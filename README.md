# Dragon News 🐉📰

A modern, responsive news website built with React, Vite, Tailwind CSS, and DaisyUI. Features a clean design with smooth animations and an intuitive user experience.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **News Categories**: Browse news by different categories (Business, Technology, Sports, etc.)
- **Featured Articles**: Highlighted today's picks and trending news
- **Interactive UI**: Hover effects, smooth transitions, and engaging animations
- **Real-time Updates**: Latest news ticker with breaking news
- **User Authentication**: Login and signup functionality
- **Social Integration**: Social media links and sharing capabilities

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16 + DaisyUI 5.3.9
- **Animations**: Framer Motion 12.23.24
- **Icons**: React Icons 5.5.0
- **Routing**: React Router DOM 7.9.4
- **Date Handling**: date-fns 4.1.0
- **Marquee**: React Fast Marquee 1.6.5

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dragonnews
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Header.jsx      # Site header with logo and date
│   ├── Navber.jsx      # Navigation bar
│   ├── HeadLine.jsx    # News ticker/marquee
│   └── Footer.jsx      # Site footer
├── Pages/              # Page components
│   ├── Home.jsx        # Main home page
│   ├── About.jsx       # About page
│   ├── Career.jsx      # Career page
│   ├── Login.jsx       # Login page
│   └── Singup.jsx      # Signup page
├── layouts/            # Layout components
│   ├── HomeLayout.jsx  # Main site layout
│   └── LogingLayout.jsx # Login layout
├── Router/             # Routing configuration
│   └── Router.jsx      # Route definitions
├── Context/            # React context providers
│   ├── AuthContext.jsx
│   └── AuthProvider.jsx
└── assets/             # Static assets (images, icons)
```

## 🎨 Design Features

- **Color Scheme**: Professional dark gray and red accent colors
- **Typography**: Poppins font family for modern readability
- **Layout**: Three-column responsive layout with sidebars
- **Cards**: Elegant news cards with hover effects
- **Animations**: Smooth transitions and micro-interactions
- **Icons**: Comprehensive icon set for better UX

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Adapted layout for tablet screens
- **Desktop Enhanced**: Full-featured desktop experience
- **Flexible Grid**: CSS Grid and Flexbox for responsive layouts

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Components

### Home Page

- Featured news section with today's picks
- Category filtering system
- Trending news carousel
- Responsive news grid
- Loading states and animations

### Navigation

- Responsive navigation bar
- Active link highlighting
- User authentication buttons
- Mobile-friendly menu

### News Cards

- Image thumbnails
- Article metadata (author, date, views, rating)
- Hover effects and animations
- Responsive design

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React and modern web technologies.
