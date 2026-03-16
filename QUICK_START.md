# Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Install Node.js
If you don't have Node.js installed, download it from: https://nodejs.org/

### Step 2: Open Terminal/Command Prompt
Navigate to your project folder:
```bash
cd d:\banking
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React
- React Router DOM
- Tailwind CSS
- Other required packages

### Step 4: Start Development Server
```bash
npm start
```

Your browser will automatically open at `http://localhost:3000`

### Step 5: Start Editing
- Modify files in `src/` folder
- Changes will auto-reload in browser
- Press Ctrl+C to stop the server

---

## Common Tasks

### Add a New Page

1. Create a new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Add the component:
   ```jsx
   function NewPage() {
     return (
       <div className="pt-24">
         {/* Your content here */}
       </div>
     );
   }
   export default NewPage;
   ```
3. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
4. Add link in `src/components/Navbar.jsx`:
   ```jsx
   <Link to="/newpage" className="text-white hover:text-green-100 transition">New Page</Link>
   ```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  green: {
    600: '#your-color-here',
    // ...
  }
}
```

### Build for Production
```bash
npm run build
```

This creates an optimized production-ready build in the `build/` folder.

---

## Folder Structure Quick Reference

```
src/
├── components/     → Reusable UI components (Navbar, Footer)
├── pages/         → Page components (Home, About, Services, etc.)
├── App.jsx        → Main component with routes
└── index.jsx      → Entry point
```

---

## Useful Commands

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm eject          # Eject from Create React App (not reversible!)
npm install        # Install dependencies
npm update         # Update dependencies
```

---

## Troubleshooting

### Port 3000 already in use
```bash
npx kill-port 3000  # Kill process using port 3000
npm start
```

### Dependencies not installing
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Tailwind CSS not working
Ensure `src/App.css` has:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Hot reload not working
- Save your files again
- Refresh browser (F5)
- Restart the dev server (Ctrl+C then `npm start`)

---

## Environment Variables

Create a `.env` file in the root folder for sensitive data:
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_KEY=your-key-here
```

Access in code with: `process.env.REACT_APP_API_URL`

---

## Deployment Options

### Vercel (Recommended - Free)
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Auto-deploys on each push

### Netlify
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Authentication works automatically

### GitHub Pages
```bash
npm install gh-pages
npm run build
npm run deploy
```

---

## Need Help?

- Check `README.md` for full documentation
- See `PROJECT_STRUCTURE.md` for detailed file descriptions
- Review component files at `src/components/` and `src/pages/`
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com

---

Happy coding! 🚀
