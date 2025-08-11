# Deployment Guide

## Environment Variables

This application requires the following environment variables to be configured:

### Required Variables

- `RESEND_API_KEY`: Your Resend API key for sending emails
  - Get it from: https://resend.com/api-keys
  - Format: `re_xxxxxxxxxx`

- `FROM_EMAIL`: The email address that will appear as the sender
  - Example: `noreply@verait.de`

- `CONTACT_EMAIL`: The email address that will receive contact form submissions
  - Example: `info@verait.de`

### Optional Variables

- `NEXT_PUBLIC_SITE_URL`: The public URL of your site
  - Production: `https://verait.de`
  - Development: `http://localhost:3000`

## Netlify Deployment

### Setting Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** > **Environment variables**
4. Add the following variables:

```
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=noreply@verait.de
CONTACT_EMAIL=info@verait.de
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x or higher

## Local Development

1. Copy `.env.example` to `.env`
2. Fill in your actual API keys and configuration
3. Run `npm run dev`

## Security Notes

- Never commit `.env` files to version control
- Use different API keys for development and production
- Regularly rotate your API keys
- Monitor your email sending quotas