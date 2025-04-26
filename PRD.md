# RedString - Product Requirements Document

## Project Overview
RedString is an innovative dating app with a unique value proposition: when users match, they unlock exclusive deals for experiences ranging from restaurants and activities to hotels and travel. This PRD outlines the requirements for creating a visually stunning, animation-rich landing page to promote the app's upcoming launch.

## Core Value Proposition
"Connect and Experience" - RedString combines meaningful connections with discovering amazing shared experiences. The app leverages the "red string of fate" concept from Asian mythology—the invisible thread that connects destined lovers—and extends it to connect users with exclusive experiences they can enjoy together.

## Target Audience
- Singles looking for quality matches and meaningful connections
- Experience-seekers who value discovering new activities, restaurants, and travel opportunities
- Urban professionals aged 25-40 with disposable income for premium experiences
- Users who appreciate high-quality design and seamless digital experiences

## Design Direction
The landing page should embody a premium, modern aesthetic with sophisticated animations that evoke both romance and excitement. The visual language incorporates the "red string of fate" concept as a consistent motif throughout the design.

### Brand Elements

#### Color Palette
- **Primary**: Deep red (#D83546) - representing the red string concept
- **Secondary**: Soft pink (#FFBEC9) - for warmth and romance
- **Accent**: Gold/Amber (#F2A649) - representing exclusive deals/experiences
- **Neutrals**: Clean whites (#FFFFFF) and deep blues (#1A2B47) for contrast

#### Typography
- **Headings**: Modern sans-serif with personality (Poppins, Montserrat, or similar)
- **Body**: Clean, highly readable sans-serif (Inter, Open Sans, or similar)
- **Accent**: Consider a subtle script font for romantic elements

#### Imagery Style
- High-quality lifestyle photography showing couples enjoying experiences
- Clean, modern illustrations of the app interface
- Custom iconography for deal categories
- Authentic-feeling imagery that avoids clichéd stock photos

## Content Strategy

### Key Messages
1. "Connect and Experience" - finding love while discovering your city
2. "Exclusive Deals Unlocked by Connection" - the unique value proposition
3. "Quality Matches Lead to Quality Experiences" - the premium positioning
4. "Join the Waitlist for Early Access" - the urgent call to action

### Copywriting Direction
- **Tone**: Exciting, premium, and slightly playful
- **Focus**: Dual benefits of finding meaningful connections + discovering amazing experiences
- **Style**: Clear, concise language emphasizing exclusivity and uniqueness
- **Narrative**: Incorporate storytelling elements about the journey from match to experience

## Landing Page Sections and Requirements

### 1. Hero Section
- Prominent headline communicating the core value proposition
- Subheadline explaining the unique concept
- Primary CTA for waitlist signup
- Phone mockups showing the app interface
- Animated "red string" connecting visual elements
- Features:
  - Subtle floating animation of phone mockups
  - Background with gentle, flowing gradient animations
  - CTA button with subtle hover animation and glow effect

### 2. Value Proposition Section
- 3-4 key benefits of using RedString
- Visual representations of each benefit
- Explanation of how the matching + deals concept works
- Features:
  - Scroll-triggered animations revealing each benefit
  - Animated transition showing connection between matching and unlocking deals
  - Micro-interactions on icons/illustrations
  - Parallax scrolling effects for depth

### 3. Deal Partners Showcase
- Highlight of premium partners and experience categories
- Visual examples of exclusive deals users can unlock
- Testimonials or partner endorsements (if available)
- Features:
  - Dynamic carousel of partner offers with smooth transitions
  - Hover states that zoom/highlight each deal
  - Animated partner logos fading in as they enter viewport
  - 3D rotating showcase of experience categories

### 4. App Preview Section
- Interactive demonstration of key app features
- Walkthrough of user journey from signup to deal redemption
- Visual highlight of the matching mechanism
- Features:
  - Animated screen transitions within phone mockups
  - Interactive elements for feature exploration
  - Floating effect for devices with subtle movement
  - Animated UI elements within app screens

### 5. Waitlist Signup Component
- Email capture form
- Indication of exclusivity/limited spots
- Privacy reassurance
- Social sharing options
- Features:
  - Animated form field focus states
  - Celebratory animation upon successful signup
  - Dynamic progress bar showing launch countdown
  - Confetti effect after signup completion

### 6. Footer
- Social media links
- Brief company information
- Contact details
- Legal links (Privacy Policy, Terms of Service)

## Technical Animation Requirements

### Animation Technologies
- GSAP (GreenSock Animation Platform) for complex animations
- Lottie for lightweight, scalable animations
- Three.js for any 3D elements or effects
- CSS animations for simpler transitions and hover states

### Transition Effects
- Smooth page section transitions during scrolling
- Scroll-triggered animations for progressive content reveal
- Fade and slide effects for content elements entering viewport
- Subtle parallax effects for background elements

### Performance Considerations
- Optimized animations for cross-device performance
- Lazy loading for off-screen animations
- Reduced animation complexity on mobile devices
- Careful balance between animation richness and page loading speed

### Responsive Behavior
- Animations that adapt across screen sizes
- Mobile-specific animation variants where needed
- Touch interaction support
- Cross-device testing to ensure smooth performance

## Additional Features
- Night/day mode toggle with different animation schemes
- Consistent "red string" visual motif throughout
- Purpose-driven animations that enhance storytelling
- Visual feedback through animation for all interactive elements
- Optional subtle sound effects for key interactions (muted by default)
- Smooth scroll-to-section navigation

## Project Structure
```
redString/
├── app/                               # Next.js App Router
│   ├── api/                           # API routes
│   │   └── waitlist/                  # Waitlist signup API
│   │       └── route.js               # Waitlist API endpoint
│   ├── layout.js                      # Root layout
│   ├── page.js                        # Landing page (main page)
│   └── globals.css                    # Global styles
├── components/                        # React components
│   ├── ui/                            # Shadcn UI components
│   │   ├── button.jsx                 # Button component
│   │   ├── input.jsx                  # Input component
│   │   └── ...                        # Other UI components
│   ├── landing/                       # Landing page specific components
│   │   ├── HeroSection.jsx            # Hero section
│   │   ├── ValuePropositionSection.jsx # Value proposition section
│   │   ├── DealPartnersSection.jsx    # Deal partners showcase
│   │   ├── AppPreviewSection.jsx      # App preview section
│   │   ├── WaitlistSection.jsx        # Waitlist signup component
│   │   └── FooterSection.jsx          # Footer section
│   ├── animations/                    # Animation components
│   │   ├── RedString.jsx              # Red string animation component
│   │   ├── PhoneFloating.jsx          # Floating phone animation
│   │   ├── ScrollReveal.jsx           # Scroll reveal animation wrapper
│   │   ├── Parallax.jsx               # Parallax effect component
│   │   └── Confetti.jsx               # Confetti animation
│   └── shared/                        # Shared components
│       ├── Navbar.jsx                 # Navigation bar
│       ├── ThemeToggle.jsx            # Theme toggle component
│       └── ProgressBar.jsx            # Progress bar for waitlist
├── lib/                               # Utility functions and libraries
│   ├── animations/                    # Animation utilities
│   │   ├── gsap.js                    # GSAP initialization and utilities
│   │   ├── lottie.js                  # Lottie animation utilities
│   │   └── three.js                   # Three.js utilities
│   ├── hooks/                         # Custom React hooks
│   │   ├── useScrollAnimation.js      # Hook for scroll animations
│   │   ├── useParallax.js             # Hook for parallax effects
│   │   └── useMediaQuery.js           # Hook for responsive design
│   ├── api.js                         # API utilities
│   ├── constants.js                   # App constants
│   └── theme.js                       # Theme configuration
├── public/                            # Static assets
│   ├── images/                        # Image assets
│   │   ├── mockups/                   # App mockup images
│   │   ├── partners/                  # Partner logos
│   │   ├── deals/                     # Deal images
│   │   └── illustrations/             # Illustrations
│   ├── animations/                    # Lottie animation files
│   │   ├── redString.json             # Red string Lottie animation
│   │   └── ...                        # Other Lottie animations
│   ├── fonts/                         # Custom fonts
│   └── favicon.ico                    # Favicon
├── styles/                            # Style-related files
│   ├── animations.css                 # Animation keyframes and styles
│   └── variables.css                  # CSS variables
├── context/                           # React context providers
│   ├── ThemeContext.jsx               # Theme context provider
│   └── AnimationContext.jsx           # Animation context provider
└── config/                            # Configuration files
    ├── tailwind.config.js             # Tailwind configuration
    └── animations.config.js           # Animation configuration
```

## Development Approach

### 1. Setup and Configuration (Week 1)
- Initialize Next.js project with App Router
- Configure Tailwind CSS with custom theme based on brand colors
- Set up Shadcn UI components
- Install and configure animation libraries (GSAP, Lottie, framer-motion)
- Create basic layout and page structure

### 2. Component Development (Weeks 2-3)
- Develop reusable UI components in the ui/ directory
- Create responsive layouts for each major section
- Implement static versions of each section without complex animations
- Build the waitlist form functionality with validation

### 3. Animation Implementation (Weeks 4-5)
- Create animation utilities and hooks
- Implement the red string motif animation throughout the site
- Add scroll-triggered animations for each section
- Develop interactive micro-animations for buttons and UI elements
- Implement the phone mockup floating and transition animations

### 4. Integration and Optimization (Week 6)
- Connect the waitlist form to backend API
- Implement progressive loading strategies for animations
- Add responsive behavior for animations on different devices
- Optimize assets and animation performance
- Implement analytics tracking

### 5. Testing and Refinement (Week 7)
- Cross-browser and device testing
- Performance optimization
- A/B testing setup for different animation variants
- Accessibility review and improvements

### 6. Launch Preparation (Week 8)
- Final polish and bug fixes
- SEO optimization
- Social media integration
- Analytics verification
- Documentation completion

## Success Metrics
- Waitlist conversion rate (target: >30% of visitors)
- Average time on page (target: >2 minutes)
- Social sharing rate (target: >5% of visitors)
- Bounce rate (target: <40%)

## Implementation Timeline
1. **Design Phase**: Wireframes, mockups, animation concepts
2. **Development Phase**: Frontend implementation with animations
3. **Testing Phase**: Cross-browser/device testing, performance optimization
4. **Launch Phase**: Analytics setup, A/B testing preparation

## Project Status
- Current Status: Component Development
- Completed:
  - Project setup with Next.js, TypeScript, and Tailwind CSS
  - Initial component architecture for the landing page
  - Core animation components (RedString, PhoneFloating, ScrollReveal)
  - Implemented Hero section with red string animation
  - Value proposition section with scroll reveal animations
  - Navbar with theme toggle functionality
- Next Steps:
  - Complete remaining section components (Deal Partners, App Preview, Waitlist, Footer)
  - Implement form validation for the waitlist
  - Add more sophisticated animations (parallax, scroll triggers)
  - Create mobile-specific animation variants
  - Optimize performance for different devices

---

This landing page should leave visitors with the impression that RedString represents the future of dating - where meaningful connections lead directly to memorable experiences together. 