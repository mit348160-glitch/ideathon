# MIT Ideathon 2026 Website

A modern responsive event website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Features
- Dark premium gradient theme with glassmorphism UI
- Sticky navbar + smooth scrolling
- Hero section with countdown timer to **22 May 2026**
- About, Domains, Timeline, Rules, Prizes, Gallery, Sponsors, FAQ, Contact sections
- Registration modal with embedded **Google Form**
- Google Form responses automatically flow to **Google Sheets**
- Ready to deploy on **Vercel (free)**

## Registration setup (Google Forms + Sheets)
1. Create a Google Form with fields:
   - Name, USN, Branch, Year, Email, Phone Number, Team Name, Team Members, Idea Title, Idea Description.
2. In Google Form, go to **Responses → Link to Sheets** to auto-create/update a Google Sheet.
3. Replace `registrationLink` in `app/page.tsx` with your real Google Form public embed URL.

## Local development
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Use default settings and deploy.

