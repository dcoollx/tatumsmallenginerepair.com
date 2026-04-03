# React + Vite + Material-UI Boilerplate

A modern, fast, and productive boilerplate for building React applications with Vite and Material-UI (MUI).

## Features

- ⚡ **Vite** - Lightning-fast frontend build tool with HMR
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Material-UI (MUI)** - Comprehensive UI component library with Material Design
- 📘 **TypeScript** - Full TypeScript support for type safety
- 🔧 **ESLint** - Configured linting for code quality
- 🎯 **Modern Tooling** - Pre-configured development environment

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── assets/          # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Frontend build tool
- [Material-UI (MUI)](https://mui.com/) - Component library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Emotion](https://emotion.sh/docs/introduction) - CSS-in-JS library

## Customization

### Theming

Edit the theme in `src/App.tsx`:

```tsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})
```

### Adding MUI Components

Import components from `@mui/material`:

```tsx
import { Button, Card, TextField } from '@mui/material'
```

See [MUI Documentation](https://mui.com/) for available components and their APIs.

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [MUI Documentation](https://mui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is open source and available under the MIT License.
