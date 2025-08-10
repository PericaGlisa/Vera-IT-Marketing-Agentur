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

// Input sanitization
function sanitizeInput(input: string): string {
  if (!input) return ''
  return input.trim().replace(/[<>"'&]/g, '')
}

// Name sanitization (more permissive for names)
function sanitizeName(name: string): string {
  if (!name) return ''
  return name.trim().replace(/[<>"&]/g, '')
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Extract all form data
    const {
      // Step 1: Basic data
      name,
      email,
      phone,
      companyName,
      companyStage,
      website,
      linkedin,
      industry,
      
      // Step 2: Team and phase
      teamSize,
      revenue,
      hasProduct,
      productDescription,
      
      // Step 3: Goals and needs
      mainReasons,
      otherReason,
      painPoint,
      futureGoals,
      priority,
      
      // Step 4: Technical details
      hasTechTeam,
      preferredTech,
      hasIdeas,
      timeframe,
      
      // Step 5: Budget
      budget,
      hasWorkedWithIT,
      
      // Step 6: Additional comments
      additionalComments
    } = body

    // Validate required fields
    if (!name || !email || !companyName || !companyStage || !industry) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
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

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeName(name),
      email: email.trim().toLowerCase(),
      phone: phone ? sanitizeInput(phone) : '',
      companyName: sanitizeInput(companyName),
      companyStage: sanitizeInput(companyStage),
      website: website ? sanitizeInput(website) : '',
      linkedin: linkedin ? sanitizeInput(linkedin) : '',
      industry: sanitizeInput(industry),
      teamSize: teamSize ? sanitizeInput(teamSize) : '',
      revenue: revenue ? sanitizeInput(revenue) : '',
      hasProduct: hasProduct ? sanitizeInput(hasProduct) : '',
      productDescription: productDescription ? sanitizeInput(productDescription) : '',
      mainReasons: Array.isArray(mainReasons) ? mainReasons.map(reason => sanitizeInput(reason)) : [],
      otherReason: otherReason ? sanitizeInput(otherReason) : '',
      painPoint: painPoint ? sanitizeInput(painPoint) : '',
      futureGoals: futureGoals ? sanitizeInput(futureGoals) : '',
      priority: priority ? sanitizeInput(priority) : '',
      hasTechTeam: hasTechTeam ? sanitizeInput(hasTechTeam) : '',
      preferredTech: preferredTech ? sanitizeInput(preferredTech) : '',
      hasIdeas: hasIdeas ? sanitizeInput(hasIdeas) : '',
      timeframe: timeframe ? sanitizeInput(timeframe) : '',
      budget: budget ? sanitizeInput(budget) : '',
      hasWorkedWithIT: hasWorkedWithIT ? sanitizeInput(hasWorkedWithIT) : '',
      additionalComments: additionalComments ? sanitizeInput(additionalComments) : ''
    }

    // Get client IP for logging
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'Unknown'

    // Initialize Resend client
    const resend = getResendClient()

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; margin-bottom: 30px; text-align: center; border-bottom: 3px solid #6366f1; padding-bottom: 15px;">Neue Kundenformular-Anfrage</h1>
          
          <!-- Step 1: Basic Data -->
          <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h2 style="color: #6366f1; margin-bottom: 15px; font-size: 18px;">📋 Grunddaten</h2>
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>E-Mail:</strong> ${sanitizedData.email}</p>
            ${sanitizedData.phone ? `<p><strong>Telefon:</strong> ${sanitizedData.phone}</p>` : ''}
            <p><strong>Firmenname:</strong> ${sanitizedData.companyName}</p>
            <p><strong>Gründungsphase:</strong> ${sanitizedData.companyStage}</p>
            ${sanitizedData.website ? `<p><strong>Website:</strong> ${sanitizedData.website}</p>` : ''}
            ${sanitizedData.linkedin ? `<p><strong>LinkedIn:</strong> ${sanitizedData.linkedin}</p>` : ''}
            <p><strong>Branche:</strong> ${sanitizedData.industry}</p>
          </div>
          
          <!-- Step 2: Team and Phase -->
          ${sanitizedData.teamSize || sanitizedData.revenue || sanitizedData.hasProduct ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #f0f9ff; border-radius: 8px;">
            <h2 style="color: #0ea5e9; margin-bottom: 15px; font-size: 18px;">👥 Team und Phase</h2>
            ${sanitizedData.teamSize ? `<p><strong>Teamgröße:</strong> ${sanitizedData.teamSize}</p>` : ''}
            ${sanitizedData.revenue ? `<p><strong>Jahresumsatz:</strong> ${sanitizedData.revenue}</p>` : ''}
            ${sanitizedData.hasProduct ? `<p><strong>Vorhandenes Produkt:</strong> ${sanitizedData.hasProduct}</p>` : ''}
            ${sanitizedData.productDescription ? `<p><strong>Produktbeschreibung:</strong> ${sanitizedData.productDescription}</p>` : ''}
          </div>
          ` : ''}
          
          <!-- Step 3: Goals and Needs -->
          ${sanitizedData.mainReasons.length > 0 || sanitizedData.painPoint || sanitizedData.futureGoals || sanitizedData.priority ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #f0fdf4; border-radius: 8px;">
            <h2 style="color: #10b981; margin-bottom: 15px; font-size: 18px;">🎯 Ziele und Bedürfnisse</h2>
            ${sanitizedData.mainReasons.length > 0 ? `<p><strong>Hauptgründe:</strong><br>${sanitizedData.mainReasons.join('<br>')}</p>` : ''}
            ${sanitizedData.otherReason ? `<p><strong>Anderer Grund:</strong> ${sanitizedData.otherReason}</p>` : ''}
            ${sanitizedData.painPoint ? `<p><strong>Größte Herausforderung:</strong> ${sanitizedData.painPoint}</p>` : ''}
            ${sanitizedData.futureGoals ? `<p><strong>Ziele in 12 Monaten:</strong> ${sanitizedData.futureGoals}</p>` : ''}
            ${sanitizedData.priority ? `<p><strong>Priorität:</strong> ${sanitizedData.priority}</p>` : ''}
          </div>
          ` : ''}
          
          <!-- Step 4: Technical Details -->
          ${sanitizedData.hasTechTeam || sanitizedData.preferredTech || sanitizedData.hasIdeas || sanitizedData.timeframe ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #fef3c7; border-radius: 8px;">
            <h2 style="color: #f59e0b; margin-bottom: 15px; font-size: 18px;">⚙️ Technische Details</h2>
            ${sanitizedData.hasTechTeam ? `<p><strong>Technisches Team:</strong> ${sanitizedData.hasTechTeam}</p>` : ''}
            ${sanitizedData.preferredTech ? `<p><strong>Bevorzugte Technologien:</strong> ${sanitizedData.preferredTech}</p>` : ''}
            ${sanitizedData.hasIdeas ? `<p><strong>Vorhandene Ideen:</strong> ${sanitizedData.hasIdeas}</p>` : ''}
            ${sanitizedData.timeframe ? `<p><strong>Zeitrahmen:</strong> ${sanitizedData.timeframe}</p>` : ''}
          </div>
          ` : ''}
          
          <!-- Step 5: Budget -->
          ${sanitizedData.budget || sanitizedData.hasWorkedWithIT ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #fce7f3; border-radius: 8px;">
            <h2 style="color: #ec4899; margin-bottom: 15px; font-size: 18px;">💰 Budget</h2>
            ${sanitizedData.budget ? `<p><strong>Budget:</strong> ${sanitizedData.budget}</p>` : ''}
            ${sanitizedData.hasWorkedWithIT ? `<p><strong>Erfahrung mit IT-Firmen:</strong> ${sanitizedData.hasWorkedWithIT}</p>` : ''}
          </div>
          ` : ''}
          
          <!-- Step 6: Additional Comments -->
          ${sanitizedData.additionalComments ? `
          <div style="margin-bottom: 30px; padding: 20px; background: #f3f4f6; border-radius: 8px;">
            <h2 style="color: #6b7280; margin-bottom: 15px; font-size: 18px;">💬 Zusätzliche Kommentare</h2>
            <p>${sanitizedData.additionalComments}</p>
          </div>
          ` : ''}
          
          <!-- Meta Information -->
          <div style="margin-top: 30px; padding: 15px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h3 style="color: #374151; margin-bottom: 10px; font-size: 16px;">📊 Meta-Informationen</h3>
            <p style="color: #6b7280; font-size: 14px;"><strong>Datum:</strong> ${new Date().toLocaleString('de-DE')}</p>
            <p style="color: #6b7280; font-size: 14px;"><strong>IP-Adresse:</strong> ${ip}</p>
            <p style="color: #6b7280; font-size: 14px;"><strong>User Agent:</strong> ${request.headers.get('user-agent') || 'Unbekannt'}</p>
          </div>
        </div>
      </div>
    `

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@verait.de',
      to: process.env.CONTACT_EMAIL || 'info@verait.de',
      subject: `Neue Kundenformular-Anfrage von ${sanitizedData.name} (${sanitizedData.companyName})`,
      html: emailHtml
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Customer form submitted successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Customer form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}