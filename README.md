# RedString

A modern web application built with the ShipFast stack for connecting users through meaningful interactions.

## Tech Stack

- **Frontend**: React, Next.js 14 (App Router), Tailwind CSS, Shadcn/ui
- **Backend**: Node.js, Next.js API Routes
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel (recommended)

## Features

- ⚡️ Next.js 14 with App Router for optimal performance
- 🎨 Beautiful UI components with Shadcn/ui and Tailwind CSS
- 🔒 Secure authentication with NextAuth.js
- 📱 Fully responsive design for all devices
- 🔄 Server and Client Components architecture
- 📊 MongoDB integration for scalable data storage
- 🚀 Production-ready setup

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/redString.git
cd redString
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables by creating a `.env.local` file in the root directory
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
redString/
├── app/              # Next.js App Router
│   ├── api/          # API routes
│   ├── (auth)/       # Authentication routes
│   ├── dashboard/    # Dashboard routes
│   └── layout.js     # Root layout
├── components/       # React components
│   ├── ui/           # UI components (Shadcn)
│   └── custom/       # Custom components
├── lib/              # Utility functions and libraries
├── models/           # Mongoose models
├── public/           # Static assets
└── styles/           # Global styles
```

## Development

### Adding a New Feature

1. Create component(s) in the `components` directory
2. Add page(s) in the `app` directory
3. Create API routes in the `app/api` directory if needed
4. Add Mongoose models in the `models` directory if needed

### Best Practices

- Use Server Components by default, add 'use client' directive only when necessary
- Optimize images and assets for better performance
- Follow the naming conventions for components and files
- Implement proper error handling and loading states

## Deployment

The application can be easily deployed to Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel
4. Deploy

## License

[MIT License](LICENSE)

## Contact

Your Name - your.email@example.com

---

Made with ❤️ using the ShipFast stack
