# AI Engineer Portfolio Website

A beautiful, dark-themed portfolio website showcasing AI engineering and software development expertise.

## ✨ Features

- **Dark Theme with Gradients**: Beautiful purple-to-blue gradient design
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Micro-interactions and hover effects throughout
- **Modern UI**: Glassmorphism effects with backdrop blur
- **Interactive Navigation**: Smooth scroll with active section highlighting

## 🛠️ How to Edit Content

### Personal Information
Edit the following sections in `src/App.tsx`:

1. **Hero Section** (line ~70):
   - Update the main titles and description
   - Modify the introductory text

2. **About Section** (line ~150):
   - Replace the three paragraphs with your personal story
   - Update the skills list with your expertise areas

3. **Contact Information** (line ~350):
   - Update email address: `your.email@example.com`
   - Update GitHub URL: `https://github.com/yourusername`
   - Update LinkedIn URL: `https://linkedin.com/in/yourprofile`
   - Update the display names and handles

### Projects Section
Replace the placeholder projects (line ~50) with your actual projects:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed description of what you built and its impact",
    tech: ["Technology", "Stack", "Used"],
    github: "https://github.com/username/repo",
    live: "https://your-demo-url.com",
    image: "https://your-project-image-url.jpg"
  }
  // Add more projects...
];
```

### Skills Section
Update your skills and proficiency levels (line ~40):

```javascript
const skills = [
  { name: "Your Skill", icon: IconName, level: 90 },
  // Add more skills...
];
```

### Navigation and Branding
- Update the portfolio title in the navigation (line ~25)
- Modify the footer text with your name (line ~400)

## 🎨 Customization

### Colors
The website uses a purple-to-blue gradient theme. To change colors, update the Tailwind classes:
- Primary: `purple-400`, `purple-600`
- Secondary: `blue-400`, `blue-600`
- Background: `gray-800`, `gray-900`

### Images
- Use high-quality images from [Pexels](https://pexels.com) or your own hosted images
- Recommended image size: 600x400px for project thumbnails
- Ensure images match the dark aesthetic

### Sections
To add new sections:
1. Add the section ID to the navigation array
2. Create the section component
3. Update the scroll handler in `useEffect`

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - Your own server

## 📝 Content Guidelines

### Writing Your Project Descriptions
- Start with the impact/result
- Explain the technical challenge
- Mention specific technologies
- Include metrics when possible

### Professional Tone
- Focus on technical achievements
- Use active voice
- Quantify your impact
- Keep descriptions concise but informative

## 🔧 Technical Stack

- **React** + **TypeScript** for type-safe development
- **Tailwind CSS** for styling and responsive design
- **Lucide React** for consistent iconography
- **Vite** for fast development and building

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first navigation menu
- Optimized typography scales
- Touch-friendly interactive elements
- Proper spacing on all screen sizes

---

**Pro Tip**: After making changes, test your website on different devices and screen sizes to ensure everything looks perfect!