# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite.

## Features

- 🎨 **Modern UI/UX** - Clean, tech-focused design with smooth animations.
- 🌓 **Dark/Light Mode** - Fully supported with persistent preference.
- 📱 **Responsive** - Optimized for all devices (Mobile, Tablet, Desktop).
- ⚡ **Fast Performance** - Built with Vite and optimized assets.
- 🛠️ **Tech Stack** - React, Tailwind CSS v4, Framer Motion, Lucide React.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository (or unzip the project).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` folder, ready for deployment.

## Project Structure

- `src/components` - UI components (Hero, About, Projects, etc.)
- `src/data` - Static data for easy editing (content.js).
- `src/hooks` - Custom hooks (useTheme).
- `src/index.css` - Global styles and Tailwind imports.

## Customization

You can easily customize the content by editing `src/data/index.js`. 
To change colors or theme, modify `tailwind.config.js` or `index.css`.

## Deployment

### GitHub Pages / Netlify / Vercel

1. Push your code to GitHub.
2. Connect your repository to Netlify or Vercel.
3. Use the following build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

---

Built by [Your Name]
