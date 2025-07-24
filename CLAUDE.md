# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 music/mixtape platform application built with Vue 3, TypeScript, and Tailwind CSS. The project is a marketplace or showcase website for DJs, mixtapes, and music albums called "KupingDJ".

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview

# Install dependencies
npm install

# Prepare Nuxt (runs automatically after install)
npm run postinstall
```

**Note:** No linting or testing commands are currently configured. Consider adding ESLint and Vitest for code quality and testing.

## Architecture & Structure

### Core Technologies
- **Nuxt 3.17.7** - Vue.js meta-framework with SSR/SSG capabilities
- **Vue 3.5.17** - Progressive JavaScript framework
- **TypeScript** - Type safety enabled (via extended `.nuxt/tsconfig.json`)
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **@nuxt/image** - Image optimization module for performance
- **Vue Router 4.5.1** - Official router for Vue.js

### Project Type
- **Type**: ES Module (`"type": "module"` in package.json)
- **Private**: Yes (not intended for npm publication)
- **Package Name**: nuxt-app

### Directory Structure

```
├── app.vue              # Root component with NuxtLayout and NuxtPage
├── layouts/            
│   └── default.vue      # Main layout with Header and Footer
├── pages/              
│   └── index.vue        # Homepage (file-based routing)
├── components/          # Organized by feature/domain
│   ├── Album/          # AlbumCard, AlbumSection
│   ├── Artist/         # ArtistCard, ArtistCarousel  
│   ├── Features/       # FeatureCard, FeatureSection
│   ├── Genre/          # GenreCard, GenreSection
│   ├── Magic/          # MagicCard, MagicSection
│   ├── Mixtape/        # MixtapeCard, MixtapeCover, MixtapeMeta, MixtapeSection
│   ├── MixtapePopular/ # Dedicated popular mixtape components
│   ├── Picks/          # PicksCard, PicksSection
│   ├── PicksAlbum/     # Album-specific picks components
│   ├── PicksMixtape/   # Mixtape-specific picks components
│   ├── Testimonials/   # TestimonialCard, TestimonialSection
│   ├── BannerFooter.vue
│   ├── BannerHero.vue
│   ├── ButtonPrimary.vue
│   ├── DomsBanner.vue
│   ├── Footer.vue
│   ├── Header.vue
│   ├── HeroSection.vue
│   └── SectionTitle.vue
├── data/               # TypeScript data modules with interfaces
│   ├── albums.ts       
│   ├── artists.ts      
│   ├── features.ts     
│   ├── genres.ts       
│   ├── magics.ts       
│   ├── mixtapes.ts     # Contains BPM, price, ratings, downloads
│   ├── mixtapesPopular.ts
│   ├── picks.ts        
│   ├── picksAlbums.ts  
│   ├── picksMixtapes.ts
│   └── testimonials.ts 
├── assets/             
│   ├── css/            
│   │   ├── font.css    # Font-face declarations for custom fonts
│   │   └── tailwind.css # Tailwind directives and custom styles
│   └── icons/          # SVG icons (empty in assets, see public/icons)
├── public/             
│   ├── fonts/          
│   │   ├── geist/      # Geist font family (9 weights: Thin to Black)
│   │   └── glancyr/    # Glancyr font family (7 weights + italics)
│   ├── icons/          # Main icon repository
│   │   ├── album/      # Album-related icons
│   │   ├── artists/    # Artist profile images
│   │   ├── baseicons/  # Core UI icons (arrows, cart, etc.)
│   │   ├── features/   # Feature section icons
│   │   ├── footer/     # Footer-specific icons
│   │   ├── genre/      # Genre icons (EDM, Hip-Hop, Pop, R&B)
│   │   ├── heroicons/  # Hero section icons
│   │   ├── magic/      # Magic section frame icons
│   │   ├── mixtapes/   # Mixtape cover images
│   │   ├── picks/      # Picks section icons
│   │   └── testimoni/  # Testimonial avatars
│   ├── images/         # Duplicate image assets (consider consolidating)
│   │   ├── artists/    
│   │   └── mixtapes/   
│   ├── favicon.ico     
│   └── robots.txt      
└── server/             
    └── tsconfig.json   # Server-specific TypeScript config
```

### Key Architectural Patterns

1. **Component Organization**: Components are grouped by feature/domain (Album, Artist, Mixtape, etc.)
2. **Data Management**: Centralized data in TypeScript modules under `/data`
3. **Asset Management**: Icons organized by category, custom fonts in public directory
4. **Styling**: Tailwind CSS with custom font configurations (Geist and Glancyr families)

### Custom Font Configuration

The project uses two custom font families configured in `tailwind.config.ts`:
- **Geist**: Multiple weights from thin (100) to black (900)
- **Glancyr**: Multiple weights from thin (100) to bold (700)

### Data Structures

#### Mixtape Interface
```typescript
export interface Mixtape {
  id: number;
  artist: string;
  artistImage: string;
  title: string;
  price: string;        // Format: "Rp. 200,000"
  image: string;        // Path: "/images/mixtapes/..."
  likes: string;        // String number: "100"
  downloads: string;    // String number: "123"
  rating: string;       // String decimal: "4.5"
  bpm: string;         // String number: "150"
  date: string;        // Format: "02 July, 2025"
  subtitle?: string;    // e.g., "Exclusive On Kuping DJ"
  isFavorited?: boolean;
}
```

**Note**: Numeric values are stored as strings in the current implementation. Consider migrating to proper numeric types for better type safety.

## Configuration Details

### Nuxt Configuration (`nuxt.config.ts`)
- **Compatibility Date**: 2025-07-15
- **Dev Tools**: Enabled
- **Modules**: `@nuxtjs/tailwindcss`, `@nuxt/image`
- **CSS**: Imports custom font and Tailwind stylesheets

### Tailwind Configuration
- **Content Paths**: All Vue/JS/TS files in components, layouts, pages, and app.vue
- **Custom Font Families**: 
  - 9 Geist variants (thin through black)
  - 7 Glancyr variants (thin through bold)
- **Safelist**: All custom font utility classes to prevent purging

### TypeScript Configuration
- Extends Nuxt's generated TypeScript config (`.nuxt/tsconfig.json`)
- Server-specific config in `server/tsconfig.json`

## Development Guidelines

1. **Component Creation**: 
   - Follow the existing pattern of organizing components by feature/domain
   - Use composition API with `<script setup>` syntax
   - Place shared components at the root of `/components`

2. **Asset Management**:
   - **Icons**: Place SVG icons in `/public/icons/[category]/`
   - **Images**: Use `/public/images/` for static images
   - **Fonts**: Already configured in `/public/fonts/`
   - Use `@nuxt/image` component for optimized image loading

3. **Data Management**:
   - Add new data collections as TypeScript files in `/data/`
   - Define proper TypeScript interfaces for type safety
   - Export both the interface and the data array

4. **Routing**: 
   - Create new pages in `/pages/` - Nuxt will automatically generate routes
   - Use file-based routing conventions

5. **Styling**:
   - Use Tailwind utility classes
   - Custom fonts are available via `font-[family]-[weight]` classes
   - Global styles in `/assets/css/`

## Known Issues & Improvements

### Current State
- The project is actively being developed
- Modified files in git status: components/PicksMixtape/PicksMixtapeSection.vue, data/albums.ts, data/genres.ts

### Missing Infrastructure
- **Testing**: No test framework configured (consider Vitest)
- **Linting**: No ESLint configuration (consider @nuxt/eslint-config)
- **Formatting**: No Prettier configuration
- **Git Hooks**: No pre-commit hooks (consider husky + lint-staged)
- **Environment Variables**: No .env files detected

### Code Quality Suggestions
1. **Type Safety**: Convert string numbers to proper numeric types in data interfaces
2. **Image Organization**: Consolidate duplicate images in `/public/icons/` and `/public/images/`
3. **Component Props**: Add proper TypeScript prop definitions
4. **Error Handling**: Implement error boundaries and loading states
5. **Documentation**: Update README.md with project-specific information

### Performance Considerations
- Implement lazy loading for component sections
- Consider static generation (`nuxt generate`) for better performance
- Optimize font loading strategy
- Review and optimize image sizes

## Environment Setup

### Prerequisites
- Node.js 18+ (for Nuxt 3 compatibility)
- npm or yarn package manager

### First-Time Setup
```bash
# Clone repository
git clone [repository-url]
cd KupingDJ

# Install dependencies
npm install

# Start development server
npm run dev
```

### Deployment
The application can be deployed as:
- **SSR**: Using `npm run build` for server-side rendering
- **SSG**: Using `npm run generate` for static site generation
- **SPA**: Configure in `nuxt.config.ts` with `ssr: false`