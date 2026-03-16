# Project Structure Documentation

```
banking/
│
├── public/
│   └── index.html                 # Main HTML file (React mount point)
│
├── src/
│   ├── components/                # Reusable components
│   │   ├── Navbar.jsx             # Navigation bar component
│   │   └── Footer.jsx             # Footer component
│   │
│   ├── pages/                     # Page components (Routes)
│   │   ├── Home.jsx               # Home / Landing page
│   │   ├── About.jsx              # About page
│   │   ├── Services.jsx           # Services page with tabs
│   │   ├── Team.jsx               # Team page
│   │   ├── Careers.jsx            # Careers page
│   │   └── Contact.jsx            # Contact page with form
│   │
│   ├── App.jsx                    # Main app component with routing
│   ├── App.css                    # Global styles with Tailwind
│   ├── index.jsx                  # React DOM render entry point
│   └── index.css (optional)       # Additional global styles
│
├── package.json                   # Project dependencies & scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── .gitignore                     # Git ignore rules
├── README.md                      # Project documentation
└── node_modules/                  # Dependencies folder (auto-generated)
```

## File Descriptions

### Public Files
- **index.html**: Entry point for the React app, contains root div where React renders

### Source Files

#### Components
- **Navbar.jsx**: Fixed navigation bar with mobile menu toggle
- **Footer.jsx**: Footer with links and copyright

#### Pages
- **Home.jsx**: 
  - Hero section with CTA buttons
  - Quick statistics
  - Services preview
  - Why choose us
  - Final CTA
  
- **About.jsx**:
  - Company background
  - Mission & Vision
  - Core values
  - Client segments
  - Our approach (4-step process)
  
- **Services.jsx**:
  - Tabbed interface for Services
  - Fundraising (Debt, PE, M&A)
  - Restructuring (4 types)
  - Advisory (5 types)
  
- **Team.jsx**:
  - Team member cards
  - Expertise highlights
  - Team culture section
  
- **Careers.jsx**:
  - Why join us
  - Current job openings
  - Employee benefits
  - Life at Capraise
  
- **Contact.jsx**:
  - Contact form
  - Location info
  - FAQ section
  - Business hours

#### Root Files
- **App.jsx**: Main component with Router setup and route definitions
- **App.css**: Global Tailwind CSS styles
- **index.jsx**: React DOM render entry point

### Config Files
- **package.json**: Dependencies (React, React Router, Tailwind)
- **tailwind.config.js**: Tailwind CSS customization
- **postcss.config.js**: PostCSS plugins configuration
- **.gitignore**: Files to ignore in git
- **README.md**: Project documentation

## Dependencies

### Production
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.22.0
- react-scripts: 5.0.1

### Development
- tailwindcss
- postcss
- autoprefixer

## Routing Structure

```
/ → Home
/about → About
/services → Services
/team → Team
/careers → Careers
/contact → Contact
```

## Color Scheme

The entire website uses green color palette:
- Primary: #16a34a (green-600)
- Dark: #15803d (green-700)
- Light: #f0fdf4 (green-50)
- Accent: #059669 (green-600)

## Responsive Design

- Mobile: 320px and up
- Tablet: 768px and up (md breakpoint)
- Desktop: 1024px and up (lg breakpoint)

## Navigation Flow

```
Navbar (Fixed) ← Links to all pages
├── Home
├── About
├── Services
├── Team
├── Careers
└── Contact
Footer (in every page)
```
