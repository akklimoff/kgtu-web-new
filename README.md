# KSTU Technology Transfer Center Website

Modern, responsive website for the Technology Transfer, Education and Entrepreneurship Center (ЦТТОП) at KSTU im. I. Razzakova, built with React, Vite, and Tailwind CSS.

## Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Professional UI**: Tailwind CSS with formal, corporate design
- **Smooth Animations**: Fade-in, scale, and staggered animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Docker Ready**: Multi-stage build with Alpine Linux + Nginx
- **Performance Optimized**: Gzip compression, caching, lazy loading

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router 7.x
- **Server**: Nginx (Alpine Linux)
- **Deployment**: Docker + Docker Compose

## Quick Start

### Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will be available at http://localhost:5173

### Production Build

Build the application:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

### Docker Deployment

#### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The website will be available at: **http://localhost:8080**

#### Option 2: Using Docker CLI

```bash
# Build the image
docker build -t kstu-website:latest .

# Run the container
docker run -d \
  --name kstu-website \
  -p 8080:80 \
  --restart unless-stopped \
  kstu-website:latest

# Stop and remove the container
docker stop kstu-website
docker rm kstu-website
```

## Project Structure

```
web-new/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── Sidebar.tsx   # Sidebar navigation
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Home page
│   │   ├── About.tsx     # About page
│   │   ├── Services.tsx  # Services page
│   │   └── Contacts.tsx  # Contacts page
│   ├── assets/           # Static assets
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Public static files
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose config
├── nginx.conf            # Nginx configuration
├── tailwind.config.js    # Tailwind CSS config
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

## Available Pages

- **Главная (Home)**: `/` - Main page with center overview
  - Hero section with center introduction
  - Mission and goals
  - Partner organizations
  - Center tasks and objectives
  - Achievements (2017-2019)
  - Services offered
  - Call-to-action section

- **О нас (About)**: `/about` - Detailed information about the Technology Transfer Center
  - Center introduction
  - Mission statement
  - Activity directions
  - Advantages and benefits
  - Partnership information

- **Услуги (Services)**: `/services` - Laboratory analysis and consulting services
  - Flour quality laboratory analysis
  - Services for millers
  - Services for bakers
  - Capabilities and achievements

- **Контакты (Contacts)**: `/contacts` - Contact information and feedback form
  - Contact cards (phone, email, address)
  - Feedback form with validation

## Design Features

### Formal Corporate Design
- Professional navy blue color scheme (#1e40af)
- Minimal border radius for strict appearance
- Square elements and strict borders
- Uppercase typography with proper tracking

### Animations
- Fade-in on scroll
- Hover effects with transforms
- Button ripple effects
- Smooth page transitions

### Performance
- Gzip compression
- Browser caching for static assets
- Code splitting
- Lazy loading

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## Configuration

### Changing the Port

Edit `docker-compose.yml`:

```yaml
ports:
  - "YOUR_PORT:80"  # Change YOUR_PORT to desired port
```

### Custom Nginx Configuration

Edit `nginx.conf` to modify:
- Caching policies
- Security headers
- URL redirects
- Error pages

### Tailwind Customization

Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

## Development

### Adding a New Page

1. Create a new file in `src/pages/`, e.g., `NewPage.tsx`
2. Import and add route in `src/App.tsx`:
```tsx
import NewPage from './pages/NewPage';

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```
3. Add link to navigation in `src/components/Header.tsx`

### Styling

The project uses Tailwind CSS with custom utilities defined in `src/index.css`. Custom classes include:
- `.btn-primary` - Primary button style
- `.card` - Card component
- `.fade-in` - Fade-in animation
- `.gradient-text` - Gradient text effect

## Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose logs web

# Verify port is not in use
lsof -i :8080
```

### Build fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

### Styles not loading

Make sure Tailwind CSS is properly configured:
1. Check `tailwind.config.js` content paths
2. Verify `@tailwind` directives in `src/index.css`
3. Restart dev server

## Contact

**KSTU Technology Transfer Center**
- Phone: +996 508 888 568
- Email: ttc@kstu.kg
- Address: 720044, Kyrgyzstan, Bishkek, Ch. Aitmatov Ave, 66, office 1/333

## License

© 2024 KSTU Technology Transfer Center. All rights reserved.
