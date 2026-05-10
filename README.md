# Aniket Sakpal — Personal Portfolio

A production-ready Next.js 14 portfolio site built with:
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (ready to use)
- **Google Fonts** — Lora + DM Sans

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx          # Main page (composes all sections)
│   └── globals.css       # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll effect
│   ├── Hero.tsx          # Landing section with stats
│   ├── About.tsx         # Bio + highlights
│   ├── Skills.tsx        # Skill categories grid
│   ├── Experience.tsx    # Timeline of work history
│   ├── Projects.tsx      # Project cards
│   ├── Blog.tsx          # Blog post cards (placeholder-ready)
│   ├── Contact.tsx       # Contact form + info
│   └── Footer.tsx        # Site footer
└── data/
    └── content.ts        # ← All your content lives here
```

## Customization

**All content is in one file: `src/data/content.ts`**

Edit profile info, experience, projects, skills, and blog posts there — no need to touch components.

## Wiring up the Contact Form

To make the contact form send real emails, choose one of:

### Option A — EmailJS (no backend needed)
```bash
npm install @emailjs/browser
```
Then in `Contact.tsx`, replace the `handleSubmit` function with an EmailJS call.

### Option B — Resend (via Next.js API route)
Create `src/app/api/contact/route.ts`:
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'aniket17sakpal@gmail.com',
    subject: body.subject,
    html: `<p>From: ${body.name} (${body.email})</p><p>${body.message}</p>`,
  })
  return Response.json({ ok: true })
}
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com) — it auto-detects Next.js.

## Adding Your Domain

1. Buy domain (recommended: `aniketsakcpal.com` or `aniketsakpal.ai`) from Namecheap (~$10–15/yr)
2. In Vercel dashboard → Settings → Domains → Add your domain
3. Update your DNS at Namecheap to point to Vercel's nameservers

Done — SSL is automatic.
