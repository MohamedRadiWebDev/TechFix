
# TechFix - Computer Repair Services Website

A Next.js website for a computer repair service company with multi-language support, dark mode, and responsive design.

## Features

- 🌐 Multi-language support (English and Arabic)
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Styled with Tailwind CSS

## Getting Started

1. Clone the project 
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
- Click the "Run" button in Replit, or
- Run `npm run dev` in the Shell

The site will be available at your Replit URL on port 5000.

## Project Structure

```
├── public/
│   ├── images/         # Static images
│   └── locales/        # Translation files
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   └── context/       # React context providers
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Customization

### Adding New Languages

1. Create a new translation file in `public/locales/`
2. Add the language option in `LanguageContext.js`

### Modifying Theme

The theme can be customized in:
- `tailwind.config.js` - For colors and other design tokens
- `src/app/globals.css` - For global styles
- `ThemeContext.js` - For theme switching logic

### Adding New Components

Place new components in the `src/components/` directory and import them as needed.

## Built With

- Next.js
- React
- Tailwind CSS
- Hero Icons

## Environment

This project runs on Replit and is configured for optimal performance in the Replit environment.
