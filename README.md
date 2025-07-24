# MagicWorld Travel Agency Website

A complete, production-ready Next.js website for MagicWorld Travel Agency built with modern web technologies and best practices.

## 🚀 Features

- **Modern Tech Stack**: Next.js 13+ with App Router, TypeScript, and shadcn/ui components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Accessible**: WCAG 2.1 AA compliant components
- **Performance**: Server-side rendering and optimized images
- **Interactive UI**: Smooth animations and hover effects
- **Professional Design**: Gradient accents and glassmorphism effects

## 📦 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Nunito (Google Fonts)
- **Animations**: Framer Motion (optional)
## 🎨 Design System

- **Colors**:
  - Background: Pure white (#FFFFFF)
  - Text: Dark gray (#1A1A1A)
  - Accents: Gradient from aqua (#08CFCC) to violet (#B445EA)
  - Footer: Light gray (#F5F5F5)
- **Typography**: Poppins font family
- **Typography**: Nunito font family
- **Border Radius**: 8px consistency
- **Spacing**: 8px base unit system

## 📄 Pages

1. **Home (/)**: Hero section, featured destinations, company badges
2. **About (/about)**: Company story, values, team information
3. **Destinations (/destinations)**: Filterable destination grid
4. **Reviews (/reviews)**: Customer testimonials and ratings
5. **Contact (/contact)**: Contact form and business information

## 🛠️ Installation & Setup

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── destinations/      # Destinations page
│   ├── reviews/           # Reviews page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components (cards, forms, etc.)
├── lib/                  # Utility functions and constants
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎯 Key Components

- **Header**: Responsive navigation with mobile menu
- **Footer**: Contact info and social links
- **DestinationCard**: Glassmorphism destination cards
- **ReviewCard**: Customer testimonial cards
- **BadgeCard**: Company feature highlights

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Build & Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

The project is configured for static export and can be deployed to any static hosting service.

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly content

## 🎨 Customization

To customize the design:

1. **Colors**: Update gradient values in Tailwind classes
2. **Typography**: Modify font settings in `layout.tsx`
3. **Content**: Edit constants in `lib/constants.ts`
4. **Components**: Extend or modify components in `components/`

## 🚀 Performance Optimizations

- Next.js Image optimization
- Static generation where possible
- Minimal JavaScript bundles
- Optimized font loading
- Efficient CSS with Tailwind

## 📞 Support

For questions or support, please contact the development team or refer to the Next.js and shadcn/ui documentation.

## 📝 License

This project is proprietary and confidential. All rights reserved by MagicWorld Travel Agency.