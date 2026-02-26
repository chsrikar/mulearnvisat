# muLearn VISAT — Student Branch Website

Official website for the **muLearn VISAT** student branch at VISAT Engineering College, Elanji, Kerala. Built with React, Vite, and UnoCSS as a fast, modern single-page application showcasing events, committees, gallery, and contact information.

**Live Site:** Deployed on [Vercel](https://vercel.com)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Components](#components)
- [Data Files](#data-files)
- [Styling System (UnoCSS)](#styling-system-unocss)
- [Routing](#routing)
- [Dark Mode](#dark-mode)
- [Deployment (Vercel)](#deployment-vercel)
- [Adding / Updating Content](#adding--updating-content)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19.2.0 | UI library |
| [Vite](https://vite.dev) | 7.3.1 | Build tool & dev server |
| [UnoCSS](https://unocss.dev) | 66.6.0 | Atomic CSS engine (utility-first, like Tailwind) |
| [React Router DOM](https://reactrouter.com) | 7.13.0 | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | 12.34.1 | Animations & transitions |
| [GSAP](https://gsap.com) | 3.14.2 | Advanced animations |
| [Lucide React](https://lucide.dev) | 0.574.0 | Icon library |
| [EmailJS](https://www.emailjs.com) | 4.4.1 | Contact form email sending (no backend) |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.1.1 / 3.4.1 | Conditional class merging utility |
| ESLint | 9.39.1 | Code linting |

> **Important:** This project uses **UnoCSS**, NOT Tailwind CSS. The configuration lives in `uno.config.js`. UnoCSS is API-compatible with Tailwind utility classes but is configured differently.

---

## Project Structure

```
mulearn/
├── index.html                  # HTML entry point (title, favicon)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite config (UnoCSS + React plugins)
├── uno.config.js               # UnoCSS config (theme, shortcuts, presets, animations)
├── eslint.config.js            # ESLint config (React hooks/refresh)
├── vercel.json                 # Vercel SPA rewrite rules
├── public/
│   ├── mulearn-logo.png        # Logo & favicon
│   ├── images/                 # Member photos
│   │   ├── <member-name>.jpeg  # Individual member photos
│   │   └── peeps/              # Illustration assets
│   ├── gallery/                # Gallery photos
│   └── event-posters/          # Event poster images
└── src/
    ├── main.jsx                # App entry: React root, BrowserRouter, CSS imports
    ├── App.jsx                 # Root component: routes, dark mode state, layout
    ├── index.css               # Global CSS (spotlight nav glass, custom overrides)
    ├── assets/                 # Static assets (imported in components)
    ├── components/
    │   ├── Navbar.jsx              # Top navigation bar (transparent, logo, theme toggle)
    │   ├── SpotlightNavbar.jsx     # Glass pill nav with mouse-follow spotlight effect
    │   ├── ThemeToggle.jsx         # Dark/light mode toggle button
    │   ├── Footer.jsx              # Site footer (logo, social links, contact)
    │   ├── RetroCard.jsx           # Reusable retro-styled card (border, shadow offset)
    │   ├── MemberCard.jsx          # Individual member display card
    │   ├── AnimatedTestimonials.jsx # Flip card carousel for leadership showcase
    │   ├── EventCard.jsx           # Event display card
    │   ├── EventCardFlip.jsx       # Flippable event card with front/back
    │   └── CrowdCanvas.jsx         # Animated crowd illustrations
    ├── data/
    │   ├── committee.js            # Team data: leadership, committees, IG leads
    │   └── events.js               # Events data with poster paths & details
    ├── lib/
    │   └── utils.js                # cn() utility (clsx + tailwind-merge)
    └── pages/
        ├── Home.jsx                # Landing page (hero, about, feature cards, CTA)
        ├── Events.jsx              # Past events listing
        ├── Committee.jsx           # Team showcase (leadership, committees, IG leads)
        ├── Gallery.jsx             # Photo gallery (masonry layout, lightbox)
        └── Contact.jsx             # Contact form (EmailJS) & info
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd mulearn

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement (HMR).

### Production Build

```bash
npm run build
```

Outputs optimized static files to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to test the production build.

---

## Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com) to send emails without a backend. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### How to get these values:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an **Email Service** (e.g., Gmail) → copy the **Service ID**
3. Create an **Email Template** with variables `{{from_name}}`, `{{from_email}}`, `{{message}}` → copy the **Template ID**
4. Go to Account → copy the **Public Key**

> **For Vercel deployment:** Add these same variables in your Vercel project settings under **Settings → Environment Variables**.

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Production build to `dist/` |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint on source files |

---

## Pages

### Home (`src/pages/Home.jsx`)

The landing page with the following sections:

1. **Hero Section** — Full-width gradient hero with the muLearn branding, tagline, and CTA buttons
2. **About muLearn** — Description of muLearn's Build-in-Public philosophy and community values
3. **Feature Cards** — 5 retro-styled cards (Learn, Build, Grow, Share, Explore) in a CSS columns masonry layout
4. **Why Join muLearn** — Benefits section highlighting community and career advantages
5. **Call to Action** — Final CTA encouraging visitors to join

### Events (`src/pages/Events.jsx`)

Displays all past events using `EventCardFlip` components. Each card shows the event poster, title, date, and description. Flips to reveal more details on interaction.

- Data source: `src/data/events.js`
- Event posters: `public/event-posters/`

### Committee (`src/pages/Committee.jsx`)

Team showcase page with four sections:

1. **Leadership** — Animated flip carousel (`AnimatedTestimonials`) showing Nodal Officer, Campus Lead, and other leaders
2. **Lead Enabler & Mentor** — Two dedicated retro cards for key support roles (Jishamol T R & Megha R)
3. **Committees** — Grid of retro cards for Tech, Media, Design, Outreach, and Creative committees with leads and members
4. **Interest Group (IG) Leads** — Grid of retro cards for all IG leads

- Data source: `src/data/committee.js`
- Member photos: `public/images/`

### Gallery (`src/pages/Gallery.jsx`)

Photo gallery with:

- Masonry-style layout using CSS columns
- Framer Motion animations on scroll
- Lightbox modal for full-size image viewing
- Photos stored in `public/gallery/`

### Contact (`src/pages/Contact.jsx`)

Contact page with:

- **Contact Form** — Name, email, message fields with EmailJS integration
- **Contact Info** — Email (mulearn@visat.ac.in) and location (VISAT Engineering College, Elanji, Kerala)
- Form validation, loading states, success/error feedback
- Framer Motion entry animations

---

## Components

### `Navbar.jsx`

Top-level navigation bar. Fully transparent background (no scroll-triggered background change). Contains:

- **Logo** — `mulearn-logo.png` with CSS filter for dark/light mode visibility (`brightness-0` in light mode to render dark; no filter in dark mode for white logo)
- **SpotlightNavbar** — Centered glass pill navigation
- **ThemeToggle** — Dark/light mode switch (right-aligned)

### `SpotlightNavbar.jsx`

A glass-morphism pill-shaped navigation bar with a mouse-follow radial gradient spotlight effect. Features:

- Translucent background with `backdrop-filter: blur(16px)`
- Active route ambience indicator (colored glow behind active item)
- Responsive link list (Home, Events, Gallery, Committee, Contact)
- Styled via `src/index.css` for the glass background

### `ThemeToggle.jsx`

Button component that toggles between dark and light mode by updating the `darkMode` state in `App.jsx`.

### `Footer.jsx`

Site footer with:

- Logo (always white via `brightness-0 invert` filter)
- Social links: Instagram (`https://www.instagram.com/mulearn.vit/`) and LinkedIn (`/company/mulearn-vit/`)
- Contact email: `mulearn@visat.ac.in`
- Address: VISAT Engineering College, Elanji, Kerala

### `RetroCard.jsx`

Reusable retro-styled card component used throughout the site. Props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `tag` | string | — | Badge label (e.g., "TECH", "DESIGN") |
| `tagColor` | string | `bg-primary-500` | UnoCSS class for badge color |
| `title` | string | — | Card title (uppercase, bold) |
| `description` | string | — | Card body text |
| `author` | string | — | Author/lead name |
| `authorRole` | string | — | Author's role/position |
| `darkMode` | boolean | — | Dark mode state |

Styling: `border-4`, offset box shadow (`shadow-[6px_6px_0_0_#171717]`), hover grows shadow to `10px`.

### `AnimatedTestimonials.jsx`

Flip card carousel used on the Committee page for leadership members. Cycles through leadership data with animated transitions (Framer Motion).

### `EventCardFlip.jsx`

Interactive event card that flips to reveal more details. Shows event poster on front, description and metadata on back.

### `MemberCard.jsx`

Individual member display card with photo, name, and role.

### `CrowdCanvas.jsx`

Animated crowd illustration component using the peeps assets from `public/images/peeps/`.

---

## Data Files

### `src/data/committee.js`

Exports three arrays:

```javascript
export const leadership = [...]    // 9 leadership members
export const committees = [...]    // 5 committee objects (Tech, Media, Design, Outreach, Creative)
export const igLeads = [...]       // 7 Interest Group leads
```

Each **leadership** member has: `name`, `role`, `image`, `bio`

Each **committee** has: `name`, `color`, `leads` (array), `members` (array), each person with `name`, `image`, `role`

Each **IG lead** has: `name`, `domain`, `image`

### `src/data/events.js`

Exports an array of event objects:

```javascript
export const events = [...]  // 6 past events
```

Each event has: `id`, `title`, `date`, `time`, `venue`, `description`, `image`, `status` (all `"past"`), `category`

---

## Styling System (UnoCSS)

### Configuration (`uno.config.js`)

**Presets:**
- `presetUno` — Core Tailwind-compatible utilities
- `presetAttributify` — Allows utilities as HTML attributes
- `presetWebFonts` — Google Fonts integration (Inter via Bunny CDN)

**Transformers:**
- `transformerDirectives` — `@apply` support in CSS
- `transformerVariantGroup` — Group variants: `hover:(bg-red text-white)`

### Custom Theme Colors

```
primary:  Indigo scale (50–950) — Brand primary color
accent:   Purple scale (50–900) — Accent/secondary color
surface:  Neutral gray scale (50–900) — Backgrounds, text, borders
```

### Shortcuts (Pre-built Utility Combos)

| Shortcut | Description |
|---|---|
| `container-main` | `max-w-6xl mx-auto px-4 sm:px-6` |
| `section-spacing` | `py-12 md:py-20` |
| `btn-primary` | Gradient primary button (indigo → purple) |
| `btn-outline` | Outlined primary button |
| `card-base` | White card with hover shadow |
| `gradient-text` | Gradient clipped text |
| `input-base` | Styled form input |

### Custom Animations

Defined in `preflights`:
- `fadeUp` — Fade in + slide up (30px)
- `fadeIn` — Simple opacity fade
- `slideIn` — Fade in + slide from left
- `gradientShift` — Background gradient position animation

Usage: `animate-fade-up`, `animate-fade-in`, `animate-slide-in`

### Custom Rules

- `backdrop-blur-nav` — `backdrop-filter: blur(20px)` for glass effects

### Breakpoints

| Name | Width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

---

## Routing

Client-side routing via **React Router DOM v7**. Routes defined in `src/App.jsx`:

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page |
| `/events` | `Events` | Events listing |
| `/committee` | `Committee` | Team showcase |
| `/contact` | `Contact` | Contact form |
| `/gallery` | `Gallery` | Photo gallery |

All routes are wrapped in `<BrowserRouter>` (in `main.jsx`) with `<Routes>` in `App.jsx`.

---

## Dark Mode

Dark mode is managed via React state in `App.jsx`:

1. `darkMode` state is stored in `App` component
2. When `true`, the `dark` class is added to `<html>` element
3. `darkMode` prop is passed to all pages and components
4. Components conditionally apply dark styles (e.g., `darkMode ? 'bg-[#0f0f14]' : 'bg-white'`)

**Dark mode colors:**
- Background: `#0f0f14` (deep dark blue-gray)
- Text: `surface-200` (light gray)
- Cards: `#1a1a24` (dark cards with light borders)
- Shadows: `rgba(255,255,255,0.8)` offset shadows (inverted from light mode)

---

## Deployment (Vercel)

### Setup

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Configure build settings:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Add environment variables (see [Environment Variables](#environment-variables))

### SPA Routing Fix

The `vercel.json` file contains a rewrite rule so that all paths serve `index.html`, preventing 404 errors on page refresh:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Deploying Updates

Push to the connected branch (usually `main`). Vercel auto-deploys on every push.

---

## Adding / Updating Content

### Adding a New Team Member

1. **Add their photo** to `public/images/` (JPEG recommended, e.g., `john-doe.jpeg`)
2. **Edit `src/data/committee.js`:**
   - For leadership: Add an object to the `leadership` array
   - For committee members: Add to the relevant committee's `members` array
   - For IG leads: Add to the `igLeads` array

```javascript
// Example: Add to a committee
{
  name: 'John Doe',
  image: '/images/john-doe.jpeg',
  role: 'Developer'
}
```

> **Important:** Image paths are case-sensitive on Linux/Vercel. Ensure the filename in the code matches the actual file exactly (e.g., `Abhinand.jpeg` ≠ `abhinand.jpeg`).

### Adding a New Event

1. **Add the event poster** to `public/event-posters/` (JPEG recommended)
2. **Edit `src/data/events.js`** — Add a new event object:

```javascript
{
  id: 7,  // Next sequential ID
  title: 'Event Name',
  date: 'Month DD, YYYY',
  time: 'HH:MM AM/PM',
  venue: 'Location',
  description: 'Event description...',
  image: '/event-posters/poster-filename.jpeg',
  status: 'past',  // or 'upcoming'
  category: 'workshop'  // workshop, talk, hackathon, etc.
}
```

### Adding Gallery Photos

1. **Add photos** to `public/gallery/` (JPEG recommended)
2. **Edit `src/pages/Gallery.jsx`** — Add the new image path to the images array

### Updating Contact Information

- **Email:** Update in `src/pages/Contact.jsx` and `src/components/Footer.jsx`
- **Social links:** Update URLs in `src/components/Footer.jsx`
- **Address:** Update in `src/pages/Contact.jsx` and `src/components/Footer.jsx`

### Updating the Logo

1. Replace `public/mulearn-logo.png` with the new logo file (keep the same filename)
2. The logo uses CSS filters for visibility:
   - **Navbar (light mode):** `brightness-0` makes any logo render as black
   - **Navbar (dark mode):** No filter (logo shown as-is, should be white/light)
   - **Footer:** `brightness-0 invert` makes any logo render as white

### Adding a New Page

1. Create `src/pages/NewPage.jsx`:
   ```jsx
   function NewPage({ darkMode }) {
     return (
       <section className="pt-20 sm:pt-24 pb-12 sm:pb-16">
         {/* Your content */}
       </section>
     )
   }
   export default NewPage
   ```
2. Add route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage'
   // Inside <Routes>:
   <Route path="/new-page" element={<NewPage darkMode={darkMode} />} />
   ```
3. Add nav link in `src/components/SpotlightNavbar.jsx` (add to the links array)

---

## Troubleshooting

### Images Not Loading

- Paths in `public/` are served from root: use `/images/photo.jpeg`, NOT `/public/images/photo.jpeg`
- Filenames are **case-sensitive** on Linux/Vercel (but not on Windows). Double-check casing.

### 404 on Page Refresh (Vercel)

Ensure `vercel.json` exists with the SPA rewrite rule. See [Deployment](#deployment-vercel).

### Contact Form Not Sending

- Verify `.env` file exists with all three `VITE_EMAILJS_*` variables
- For Vercel: Ensure environment variables are set in the Vercel dashboard
- Check EmailJS dashboard for quota/template issues

### Dark Mode Logo Not Visible

The logo relies on CSS filter tricks. If using a new logo:
- The raw logo should be **white or light-colored** (for dark mode without filter)
- `brightness-0` converts it to black (for light mode)
- `brightness-0 invert` converts it to white (for footer)

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## Utility: `cn()` Helper

Located at `src/lib/utils.js`. Combines `clsx` and `tailwind-merge` for conditional class merging:

```javascript
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

Usage:
```jsx
<div className={cn('base-class', darkMode && 'dark-class', isActive && 'active-class')} />
```

---

## Entry Points

### `index.html`

- Title: "muLearn VISAT — Student Branch"
- Favicon: `/mulearn-logo.png`
- Mounts React app to `<div id="root">`

### `src/main.jsx`

- Creates React root with `StrictMode`
- Wraps app in `BrowserRouter` for client-side routing
- Imports UnoCSS reset, virtual CSS, and global styles

### `src/App.jsx`

- Manages `darkMode` state and syncs `dark` class to `<html>`
- Renders `Navbar` → `<Routes>` → `Footer` layout
- Passes `darkMode` prop to all children

---

## License

<<<<<<< HEAD
This project is maintained by the **muLearn VISAT** student community at VISAT Engineering College, Elanji, Kerala.
=======
This project is maintained by the **muLearn VISAT** student community at VISAT Engineering College, Elanji, Kerala and developed by **Chinthapenta Srikar**

