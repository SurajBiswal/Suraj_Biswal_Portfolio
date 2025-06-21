# Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and React Icons. Perfect for software engineers who want to showcase their projects, experience, education, and blog posts.

## Features

- ✨ Modern and responsive design
- 🌙 Dark/Light mode toggle
- 📱 Mobile-first approach
- 🚀 Fast and optimized (Next.js)
- 📝 Blog with category system (DSA, System Design, CS Fundamentals, Web Development)
- 🎨 Beautiful UI components
- 🔍 Search functionality for blog posts
- 📊 Project showcase with filtering
- 📈 Experience and education timeline
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion
- **Language**: JavaScript/React

## Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Extract the project files**

   ```bash
   # Extract the zip file and navigate to the project directory
   cd portfolio-nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## File Structure

```
portfolio-nextjs/
├── components/
│   ├── layout/
│   │   ├── Header.js       # Navigation header with dark mode toggle
│   │   ├── Footer.js       # Footer with social links
│   │   └── Layout.js       # Main layout wrapper
│   ├── Hero.js             # Hero section component
│   └── Skills.js           # Skills showcase component
├── data/
│   ├── projects.json       # Your projects data
│   ├── experience.json     # Work experience data
│   ├── education.json      # Education and certifications
│   └── blog-posts.json     # Blog posts data
├── pages/
│   ├── blog/
│   │   ├── [category]/
│   │   │   └── [slug].js   # Dynamic blog post pages
│   │   ├── index.js        # Main blog page
│   │   ├── dsa.js          # DSA category page
│   │   ├── system-design.js # System Design category page
│   │   ├── cs-fundamentals.js # CS Fundamentals category page
│   │   └── web-development.js # Web Development category page
│   ├── _app.js             # Next.js app wrapper
│   ├── index.js            # Homepage
│   ├── about.js            # About page
│   ├── experience.js       # Experience page
│   ├── education.js        # Education page
│   └── projects.js         # Projects page
├── public/
│   └── images/             # Static images
├── styles/
│   └── globals.css         # Global styles and Tailwind imports
└── data/                   # JSON data files
```

## Customization Guide

### 1. Personal Information

Update your personal information in the following files:

**Hero Section** (`components/Hero.js`):

- Change name, title, and description
- Update social media links
- Add your profile image

**Header** (`components/layout/Header.js`):

- Update the logo/brand name

**Footer** (`components/layout/Footer.js`):

- Update contact information
- Add your social media links
- Update the description

### 2. Projects

Edit `data/projects.json` to add your projects:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/yourusername/project",
  "liveUrl": "https://yourproject.com",
  "image": "/images/project1.jpg",
  "featured": true
}
```

### 3. Experience

Update `data/experience.json` with your work experience:

```json
{
  "id": 1,
  "company": "Your Company",
  "position": "Your Position",
  "duration": "2020 - Present",
  "location": "City, Country",
  "description": "Your role description",
  "technologies": ["React", "Node.js"],
  "achievements": ["Achievement 1", "Achievement 2"]
}
```

### 4. Education

Modify `data/education.json` for your educational background:

```json
{
  "id": 1,
  "institution": "Your University",
  "degree": "Your Degree",
  "duration": "2018 - 2022",
  "location": "City, Country",
  "gpa": "3.8/4.0",
  "description": "Education description",
  "courses": ["Course 1", "Course 2"],
  "achievements": ["Achievement 1", "Achievement 2"]
}
```

### 5. Blog Posts

Add your blog posts in `data/blog-posts.json`:

```json
{
  "id": 1,
  "title": "Your Blog Post Title",
  "slug": "your-blog-post-title",
  "category": "dsa", // dsa, system-design, cs-fundamentals, web-development
  "excerpt": "Brief description of your post",
  "content": "Full blog post content",
  "author": "Your Name",
  "publishedDate": "2024-01-15",
  "readTime": "5 min read",
  "tags": ["tag1", "tag2"],
  "featured": true
}
```

### 6. Styling and Colors

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `out` folder to [netlify.com](https://netlify.com)

### Other Platforms

- **GitHub Pages**: Enable static export in `next.config.js`
- **Firebase Hosting**: Use Firebase CLI
- **AWS Amplify**: Connect your repository

## Live Server Setup (VS Code)

If you want to use Live Server in VS Code:

1. Install "Live Server" extension by Ritwick Dey
2. Open the project folder in VS Code
3. Run `npm run build && npm run export` to create static files
4. Right-click on the exported `index.html` and select "Open with Live Server"

## Blog Categories

The blog system includes four main categories:

- **DSA**: Data Structures & Algorithms
- **System Design**: Scalable architecture and distributed systems
- **CS Fundamentals**: Core computer science concepts
- **Web Development**: Frontend, backend, and full-stack development

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting for better loading times
- CSS purging removes unused styles
- Static generation for blog posts

## SEO Features

- Meta tags for all pages
- Open Graph tags for social media
- Structured data for blog posts
- Sitemap generation
- Optimized URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with setup or customization, feel free to reach out!

---

Built with ❤️ using Next.js and Tailwind CSS
