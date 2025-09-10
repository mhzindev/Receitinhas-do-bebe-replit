# Overview

This is a Portuguese landing page for selling a baby food recipe eBook called "Comidinhas do Bebê". The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on high-conversion sales page elements including countdown timers, social proof notifications, and strategic call-to-action buttons.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom color variables for baby-themed palette (baby-yellow, baby-pink, baby-green, baby-blue)
- **Typography**: Google Fonts integration with Poppins for headings and Inter for body text
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Hookform resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build System**: ESBuild for production bundling
- **Development**: tsx for TypeScript execution in development
- **Database Integration**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **API Structure**: RESTful API with /api prefix for all endpoints

## Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Zod integration for type-safe schema validation
- **Session Storage**: PostgreSQL-backed session store
- **Migration System**: Drizzle Kit for database migrations
- **In-Memory Fallback**: MemStorage class for development/testing scenarios

## Authentication and Authorization
- **User Schema**: Basic user table with username/password fields
- **Session Management**: Express sessions with PostgreSQL storage
- **Storage Interface**: IStorage interface for CRUD operations with both PostgreSQL and in-memory implementations

## External Dependencies
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **UI Component Library**: Radix UI primitives for accessible components
- **Styling Framework**: Tailwind CSS with PostCSS processing
- **Font Service**: Google Fonts (Poppins and Inter)
- **Icon Library**: Font Awesome for social media and UI icons
- **Development Tools**: Replit-specific plugins for development environment integration
- **Form Validation**: Zod for schema validation integrated with Drizzle and React Hook Form
- **Date Handling**: date-fns for date manipulation in countdown timer
- **Animation Library**: Embla Carousel for potential testimonial carousels

## Key Features
- **Countdown Timer**: Real-time countdown component for sales urgency
- **Social Proof System**: Floating notifications showing recent purchases
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **SEO Optimization**: Meta tags and Open Graph integration
- **Sales Funnel Elements**: Strategic CTA placement and conversion optimization features