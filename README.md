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

---

## Registration setup (Google Forms + Sheets, no Firebase)

### 1) Create the registration Google Form
Create these fields exactly:
- Name
- USN
- Branch
- Year
- Email
- Phone Number
- Team Name
- Team Members
- Idea Title
- Idea Description
- Payment Status (Paid/Unpaid) *(if fee is collected)*
- Amount Paid (Number) *(if fee is collected)*

### 2) Connect responses to a Google Sheet (live)
1. Open the form → **Responses** tab.
2. Click **Link to Sheets**.
3. Choose **Create new spreadsheet**.

Now every submission appears in Sheets live.

### 3) Embed it in this website
Replace `registrationLink` in `app/page.tsx` with your real public Google Form URL.

---

## Live organizer dashboard (registrations + total money)

In the linked Google Sheet:

### A) Live total registrations
In any summary cell:
```gs
=COUNTA(A2:A)
```
(Assuming column A has timestamps.)

### B) Live total money collected
If `Amount Paid` is in column `M`:
```gs
=SUM(M2:M)
```

### C) Live paid registrations count
If `Payment Status` is in column `L`:
```gs
=COUNTIF(L2:L,"Paid")
```

### D) Optional dashboard tab
Create a tab named `Dashboard` and place:
- Total Registrations
- Paid Teams
- Total Revenue
- Pending Payments

Use formulas like:
```gs
=COUNTIF(L2:L,"Unpaid")
```

This gives you real-time numbers directly from form entries.

---

## If you want online payment tracking (recommended)
Use this flow:
1. Add UPI/QR payment instructions in form description.
2. Ask for Transaction ID in an extra field.
3. Mark Payment Status as Paid only after verification.

For fully automatic payment + registration reconciliation, use Razorpay payment links and add the payment reference in the form.

---

## Local development
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Use default settings and deploy.
