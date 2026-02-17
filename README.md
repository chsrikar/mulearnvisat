# μLearn VISAT Student Branch Website

A modern, minimal, responsive website for the μLearn VISAT Student Branch built with **React + Vite + UnoCSS**.

## 🚀 Tech Stack

- **React** (v19) — Functional components only
- **Vite** (v7) — Lightning-fast build tool
- **UnoCSS** — Utility-first CSS engine
- **React Router DOM** — Client-side routing

> No Tailwind. No Bootstrap. No UI libraries.

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx      # Sticky navbar with dark mode toggle
 │    ├── Footer.jsx      # Footer with social links
 │    ├── EventCard.jsx   # Reusable event card component
 │    ├── MemberCard.jsx  # Reusable member card component
 │
 ├── pages/
 │    ├── Home.jsx        # Hero, About, Features, CTA
 │    ├── Events.jsx      # Ongoing/Past events with tabs
 │    ├── Committee.jsx   # Team member grid
 │    ├── Contact.jsx     # Contact form + info
 │
 ├── data/
 │    ├── events.js       # Event data
 │    ├── committee.js    # Committee member data
 │
 ├── App.jsx              # Root component with routing
 ├── main.jsx             # Entry point
 ├── index.css            # Global styles
```

## 🎨 Features

- ✨ Animated gradient text & smooth scroll reveal
- 🌙 Dark mode toggle
- 📱 Fully responsive (mobile-first)
- 🎯 SEO-friendly meta tags
- 🏎️ Fast performance with Vite
- ♿ Accessible focus states

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📝 License

MIT — Built with 💜 by the μLearn VISAT community
