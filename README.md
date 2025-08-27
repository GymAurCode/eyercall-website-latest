# Animated Portfolio - React Version

This is a React conversion of the original HTML/CSS/JS portfolio website. All UI design and JavaScript logic have been preserved exactly as they were in the original.

## Features

- **Exact UI Preservation**: All original styling, animations, and visual effects maintained
- **Same Functionality**: Video hover effects, sidebar navigation, and all interactive elements work identically
- **Responsive Design**: All media queries and responsive behavior preserved
- **AOS Animations**: Scroll animations work exactly as before
- **Modern React**: Built with React 18, Vite, and modern development tools

## Project Structure

```
src/
├── App.jsx          # Main React component with all HTML converted to JSX
├── main.jsx         # React entry point
└── style.css        # All original CSS styles (unchanged)
public/
├── images/          # All image assets (PNG, JPG, SVG, WebP, etc.)
└── videos/          # All video assets (MP4, WebM, etc.)
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Deployment

### GitHub Pages

1. **Update Repository Name**: In `vite.config.js`, replace `"your-repo-name"` with your actual GitHub repository name:
   ```js
   base: "/your-actual-repo-name/",
   ```

2. **Build the Project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   - Go to your repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select the `gh-pages` branch (or create it)
   - Set folder to `/ (root)`

4. **Alternative: Use GitHub Actions** (Recommended):
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Important Notes

- All assets are now properly organized in the `public/` folder
- Image paths use `/images/` prefix (e.g., `/images/logo.png`)
- Video paths use `/videos/` prefix (e.g., `/videos/demo.mp4`)
- The `base` path in `vite.config.js` must match your repository name for GitHub Pages

## What Was Converted

- **HTML → JSX**: All HTML elements converted to React JSX syntax
- **JavaScript → React Hooks**: Event listeners converted to React useEffect and useRef hooks
- **CSS**: Completely unchanged - all styles, animations, and responsive design preserved
- **Assets**: All images and videos remain in their original locations

## Key Changes Made

1. **Class → className**: HTML class attributes converted to React className
2. **Event Handlers**: DOM event listeners converted to React refs and useEffect
3. **Inline Styles**: Converted to React style objects where needed
4. **AOS Integration**: AOS library properly imported and initialized in React
5. **Video References**: Video elements converted to use React refs for hover functionality

## Original Features Preserved

- ✅ Header with navigation and social icons
- ✅ Sidebar mobile navigation
- ✅ Hero section with animated text and video
- ✅ Info cards with grid layout
- ✅ Project showcase with video hover effects
- ✅ Skills section with animated slider
- ✅ Contact form
- ✅ Footer
- ✅ All CSS animations and transitions
- ✅ Responsive design for all screen sizes
- ✅ AOS scroll animations
- ✅ Video hover interactions
- ✅ Sidebar open/close animations

## Browser Support

Same as the original website - all modern browsers that support CSS Grid, Flexbox, and modern CSS features.

## Development

The project uses:
- **Vite** for fast development and building
- **React 18** with modern hooks
- **ESLint** for code quality
- **Hot Module Replacement** for instant updates during development

All original functionality has been preserved while modernizing the codebase structure.
