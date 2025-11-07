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

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per 15 minutes

  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

// Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>"&]/g, '') // Remove potentially dangerous characters but keep apostrophes for names
    .trim()
    .substring(0, 1000) // Limit length
}

// Special sanitization for names - more permissive
function sanitizeName(input: string): string {
  return input
    .replace(/[<>"&]/g, '') // Remove only the most dangerous characters
    .trim()
    .substring(0, 100) // Reasonable limit for names
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, company, phone, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate input lengths BEFORE sanitization
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs AFTER validation
    const sanitizedData = {
      name: sanitizeName(name), // Use more permissive sanitization for names
      email: email.trim().toLowerCase(),
      company: company ? sanitizeInput(company) : '',
      phone: phone ? sanitizeInput(phone) : '',
      service: sanitizeInput(service),
      budget: budget ? sanitizeInput(budget) : '',
      message: sanitizeInput(message)
    }

    // Send email using Resend with sanitized data
    const resend = getResendClient()
    const { data, error } = await resend.emails.send({
      from: `Vera IT Contact Form <${process.env.FROM_EMAIL || 'noreply@verait.de'}>`,
      to: [process.env.CONTACT_EMAIL || 'info@verait.de'],
      subject: `Neue Projektanfrage von ${sanitizedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 20px;">Neue Projektanfrage</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #1e293b;">Kontaktinformationen</h3>
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>E-Mail:</strong> ${sanitizedData.email}</p>
            ${sanitizedData.company ? `<p><strong>Unternehmen:</strong> ${sanitizedData.company}</p>` : ''}
            ${sanitizedData.phone ? `<p><strong>Telefon:</strong> ${sanitizedData.phone}</p>` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #1e293b;">Projektdetails</h3>
            <p><strong>Gewünschter Service:</strong> ${sanitizedData.service}</p>
            ${sanitizedData.budget ? `<p><strong>Budget:</strong> ${sanitizedData.budget}</p>` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e293b;">Projektbeschreibung</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404; font-size: 12px;">
              <strong>Security Info:</strong> IP: ${ip} | Timestamp: ${new Date().toISOString()}
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            Gesendet über das Kontaktformular von verait.de
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
