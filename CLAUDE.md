# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the KSTU Technology Transfer Center website - a modern, responsive React application built with TypeScript, Vite, and Tailwind CSS. The site is deployed using Docker with Alpine Linux and Nginx.

## Development Commands

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Docker Deployment
```bash
docker-compose up -d              # Build and start container (http://localhost:8080)
docker-compose down               # Stop and remove container
docker-compose logs -f            # View logs
docker build -t kstu-website .    # Build image manually
```

## Architecture

### Routing & Navigation
- **Client-side routing** via React Router with a single-page application (SPA) architecture
- Root path `/` redirects to `/about`
- All routes render within `App.tsx` which provides the layout structure (Header → main → Footer)
- Nginx is configured with `try_files $uri $uri/ /index.html` to support client-side routing in production

### Component Structure

**Layout Components** (`src/components/`):
- `Header.tsx` - Sticky header with glassmorphism effect, scroll detection, mobile menu, and language switcher
- `Footer.tsx` - Site footer with contact info and legal links
- `Sidebar.tsx` - Sidebar navigation with active route highlighting and staff member cards (hidden on mobile)

**Page Components** (`src/pages/`):
- `About.tsx` - Mission, directions, advantages, partnership info
- `Services.tsx` - Laboratory analysis services with detailed service lists
- `Contacts.tsx` - Contact cards and form with validation (form submission not connected to backend)

### Styling System

**Tailwind CSS v3** with custom configuration:
- Custom colors: `primary` (default, dark, light), `text` (primary, secondary), `surface`
- Custom utilities in `src/index.css` under `@layer components` and `@layer utilities`
- Key custom classes: `.header-glass`, `.btn-primary`, `.card`, `.fade-in`, `.sidebar-nav`, `.staff-card`

**Important**: Tailwind CSS v3 does not support opacity syntax like `bg-white/80` in `@apply` directives. Use explicit `rgba()` values instead:
```css
/* ❌ Wrong */
@apply bg-white/80;

/* ✅ Correct */
background-color: rgba(255, 255, 255, 0.8);
```

### Animations
Custom keyframe animations defined in `src/index.css`:
- `fadeInUp` - Fade in with upward motion
- `fadeInRight` - Fade in from right
- `scaleIn` - Fade in with scale effect
- `pulseSubtle` - Subtle pulsing effect

Classes `.fade-in`, `.fade-in-right`, `.scale-in` automatically stagger animation delays for child elements.

## Docker Build Process

**Multi-stage build**:
1. **Build stage** (Node 20 Alpine): Install deps → build React app → output to `/app/dist`
2. **Production stage** (Nginx Alpine): Copy build artifacts → copy nginx.conf → serve on port 80

**Nginx configuration** (`nginx.conf`):
- Gzip compression enabled
- Static asset caching (1 year for js/css/images)
- SPA fallback routing to `index.html`
- Health check endpoint at `/health`
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)

## Adding New Pages

1. Create page component in `src/pages/NewPage.tsx`
2. Import and add route in `src/App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage';
   // Add to Routes:
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Header.tsx` to `navLinks` array
4. Add navigation link in `src/components/Sidebar.tsx` to `navItems` array

## Styling New Components

Use existing custom Tailwind classes where possible:
- Buttons: `btn-primary` class
- Cards: `card` class
- Animations: `fade-in`, `scale-in` classes
- Text: `gradient-text` for primary blue color
- Content: `content-section` for consistent spacing

For custom styles requiring `@apply` with opacity, use explicit CSS:
```css
.my-class {
  @apply rounded-lg shadow-sm;
  background-color: rgba(26, 115, 227, 0.1);
  border-color: rgba(0, 0, 0, 0.08);
}
```

## Important Constraints

- **No backend**: Contact form shows success message but doesn't actually submit data
- **Russian language only**: English language link in header is not implemented
- **No image assets**: Staff member avatars use gradient circles with initials instead of photos
- **Mobile menu**: Functional but could be enhanced with slide-in animations
- **Tailwind v3**: Locked to v3 (not v4) due to `@apply` directive compatibility
