# IT'S LUCKNOWI - Royal Mughlai Dining

A stunning restaurant website for IT'S LUCKNOWI, featuring authentic Royal Mughlai cuisine in a luxurious Haveli setting.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Gallery**: Showcase of special dishes and ambiance
- **Contact Section**: Integrated Google Maps with location pin and directions button
- **WhatsApp Integration**: Direct ordering through WhatsApp
- **Menu Display**: Comprehensive menu with dish categories
- **About Section**: Restaurant history and dining experience
- **Hero Section**: Eye-catching landing page

## Tech Stack

- **React** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Location

- **Google Maps**: https://maps.app.goo.gl/KSH3axYhyUxMAP9g9
- **Address**: G-21, Ground Floor, Heritage Building, Mint Road, Fort, Mumbai - 400001
- **Hours**: Monday - Sunday, 12:00 PM - 12:00 AM

## Project Structure

```
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Menu.tsx
│   ├── SpecialDishes.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppCart.tsx
├── data/               # Data files
│   └── menu.ts
├── App.tsx
├── index.tsx
└── vite.config.ts
```

## Mobile Responsiveness

The website is built with mobile-first responsive design:

- **Header**: Responsive navigation with hamburger menu for mobile devices
- **Hero Section**: Adapts to different screen sizes with optimized image scaling
- **Gallery**: Grid layout that adjusts from 1 column on mobile to multiple columns on desktop
- **Menu**: Touch-friendly buttons and text sizing for mobile users
- **Contact Section**: Maps and contact form stack vertically on mobile, side-by-side on desktop
- **Images**: Optimized and compressed for faster loading on mobile networks

All components use Tailwind CSS breakpoints (sm, md, lg, xl) for seamless responsive behavior.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
