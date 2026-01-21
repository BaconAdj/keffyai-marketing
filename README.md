# Keffy Marketing Site

Professional landing page for keffyai.com

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

Visit http://localhost:3001

## Deployment to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set custom domain: keffyai.com
4. Deploy!

## Adding Your Photos

Replace placeholder images in `app/page.tsx`:
- Look for the gallery section
- Replace the 8 placeholder divs with Image components
- Add your photos to `/public/images/`

Example:
```tsx
<Image 
  src="/images/paris.jpg" 
  alt="Paris" 
  width={400} 
  height={400}
  className="rounded-lg object-cover"
/>
```

## Social Media Links

Update links in the waitlist section:
- Instagram: Line ~250
- TikTok: Line ~257
- Facebook: Line ~264
- Twitter: Line ~271
