import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Force dynamic rendering to prevent static generation during build
export const dynamic = 'force-dynamic'

// Initialize Resend only when API key is available
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(process.env.RESEND_API_KEY)
}

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limiting: 3 requests per 15 minutes per IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3

  const current = rateLimitMap.get(ip)
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (current.count >= maxRequests) {
    return false
  }
  
  current.count++
  return true
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>"'&]/g, '')
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    const { email } = await request.json()

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'E-Mail-Adresse ist erforderlich' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Sanitize input
    const sanitizedEmail = sanitizeInput(email)

    // Send confirmation email to subscriber
    const resend = getResendClient()
    const subscriberEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@verait.de',
      to: sanitizedEmail,
      subject: 'Willkommen beim Vera IT Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Willkommen bei Vera IT!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Vielen Dank für Ihr Interesse!</h2>
            
            <p style="color: #666; line-height: 1.6; font-size: 16px;">
              Sie haben sich erfolgreich für unseren Newsletter angemeldet. Sie erhalten ab sofort:
            </p>
            
            <ul style="color: #666; line-height: 1.8; font-size: 16px;">
              <li>Die neuesten Artikel und Insights aus der Tech-Welt</li>
              <li>Exklusive Tipps zu KI, Web-Entwicklung und digitaler Transformation</li>
              <li>Updates zu unseren Services und Projekten</li>
              <li>Einladungen zu Events und Webinaren</li>
            </ul>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Ihre E-Mail:</strong> ${sanitizedEmail}<br>
                <strong>Anmeldedatum:</strong> ${new Date().toLocaleString('de-DE')}
              </p>
            </div>
            
            <p style="color: #666; line-height: 1.6; font-size: 16px;">
              Falls Sie Fragen haben oder Unterstützung benötigen, zögern Sie nicht, uns zu kontaktieren.
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://verait.de" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">Besuchen Sie unsere Website</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
            <p>Vera IT Solutions | Ihr Partner für digitale Innovation</p>
            <p>Sie können sich jederzeit von unserem Newsletter abmelden.</p>
          </div>
        </div>
      `
    })

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@verait.de',
      to: process.env.CONTACT_EMAIL || 'info@verait.de',
      subject: 'Neue Newsletter-Anmeldung',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Neue Newsletter-Anmeldung</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>E-Mail:</strong> ${sanitizedEmail}</p>
            <p><strong>Datum:</strong> ${new Date().toLocaleString('de-DE')}</p>
            <p><strong>IP-Adresse:</strong> ${ip}</p>
            <p><strong>User Agent:</strong> ${request.headers.get('user-agent') || 'Unbekannt'}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Diese E-Mail wurde automatisch generiert.
          </p>
        </div>
      `
    })

    console.log('Newsletter subscription emails sent:', {
      subscriber: subscriberEmailResult.data?.id,
      admin: adminEmailResult.data?.id
    })

    return NextResponse.json(
      { message: 'Newsletter-Anmeldung erfolgreich!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
