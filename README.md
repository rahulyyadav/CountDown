# 364 Days Countdown Timer

A beautiful, responsive countdown timer that tracks 364 days from a start date. The timer persists across devices and browsers using URL-based state management.

![Countdown Timer Preview](https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1200&h=400)

## Features

- 📱 Fully responsive design for mobile and desktop
- 🔄 Persistent countdown across devices using URL parameters
- 🎯 Progress bar visualization
- 🌙 Automatic midnight updates
- 📤 Easy sharing functionality
- ✨ Beautiful gradient background with glassmorphism UI

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd 364-days-countdown
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Usage

1. When you first open the app, it automatically starts the countdown from the current date
2. The URL will be updated with your start date
3. To access the same countdown from another device:
   - Click the "Share countdown" button to copy the URL
   - Open the copied URL on any device or browser
   - Bookmark the URL for easy access

## Development

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request