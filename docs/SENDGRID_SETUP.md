# SendGrid configuration

This project uses SendGrid to send form submissions through the `/api/contact` route.

## Required environment variables
Add these values to your deployment environment (Vercel dashboard → Project → Settings → Environment Variables) or your local `.env.local` file:

```
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_TO_EMAIL=hello@jamarq.digital
SENDGRID_FROM_EMAIL=hello@jamarq.digital
```

- `SENDGRID_API_KEY` – API key from your SendGrid account (create one under **Settings → API Keys** with “Mail Send” permission).
- `SENDGRID_TO_EMAIL` – inbox that should receive contact form submissions.
- `SENDGRID_FROM_EMAIL` – verified sender in SendGrid; can match `SENDGRID_TO_EMAIL` if that address is verified.

After setting the variables, redeploy the site so the serverless function picks up the new values.
