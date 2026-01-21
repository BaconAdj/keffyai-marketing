# Waitlist Email Setup

## Step 1: Create Resend Account

1. Go to https://resend.com
2. Sign up (free - no credit card needed)
3. Verify your email

## Step 2: Get API Key

1. Go to https://resend.com/api-keys
2. Click "Create API Key"
3. Give it a name like "Keffy Waitlist"
4. Copy the API key

## Step 3: Add to Local Environment

1. Open `.env.local` in your project
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_abc123xyz...
   ```

## Step 4: Add to Vercel

1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your API key from Resend
   - **Environments:** Production, Preview, Development

## Step 5: Verify Domain (For Production)

For production, you'll want to use your own domain instead of `onboarding@resend.dev`:

1. In Resend dashboard, go to Domains
2. Add `keffyai.com`
3. Add the DNS records to your Squarespace DNS settings
4. Wait for verification (usually 5-10 minutes)
5. Update `app/api/waitlist/route.ts` line 20:
   ```typescript
   from: 'Keffy <waitlist@keffyai.com>',
   ```

## How It Works

When someone submits the waitlist form:
1. Their email is sent to your API route
2. API route uses Resend to email `general@keffyai.com`
3. You receive notification with their email
4. User sees success message

## Testing Locally

```bash
npm run dev
```

Go to http://localhost:3001, scroll to waitlist, and test!

## Alternative: Use Formspree (Even Simpler)

If you want even simpler setup with no API key:

1. Go to https://formspree.io
2. Create free account
3. Create new form
4. Use their endpoint instead of our API route

Let me know if you want me to set up Formspree instead!
