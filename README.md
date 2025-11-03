# 2025 KPCS & KSFM Joint Academic Conference

English agenda website for the 2025 KPCS & KSFM Joint Academic Conference held on November 30, 2025.

## 📋 Overview

This website provides comprehensive English agendas for all 6 conference rooms:

- **Room A** (E4 Room) - Filler & Procedures
- **Room B** - Skinbooster & Thread
- **Room C** (E2 Room) - Hybrid Session
- **Room D** (E1 & Bridal Suite) - Primary Care
- **Room E** (E6 Room) - Laser Technology
- **Room F** (E7 Room) - Advanced Topics

## ✨ Features

- **Multiple View Options**
  - Timeline View: Compare all rooms side-by-side by time slots
  - Detailed View: Full session details with speakers and topics
  - Individual Room Views: Dedicated pages for each conference room

- **Search Functionality**: Real-time search across all sessions, speakers, and topics

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

- **Tab Navigation**: Easy switching between different rooms and views

## 🚀 Quick Start

### Local Development

Simply open `index.html` in a web browser, or run a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Using the included script
./start-server.sh
```

Then visit: `http://localhost:8000/index.html`

## 📁 File Structure

```
.
├── index.html          # Main landing page
├── roomA_en.html       # Room A agenda
├── roomB_en.html       # Room B agenda
├── roomC_en.html       # Room C agenda (Hybrid)
├── roomD_en.html       # Room D agenda
├── roomE_en.html       # Room E agenda
├── roomF_en.html       # Room F agenda
└── README.md           # This file
```

## 🌐 Deployment

### Cloudflare Pages

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your GitHub account
5. Select this repository
6. Configure build settings:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
7. Click "Save and Deploy"

Your site will be live at: `https://your-project.pages.dev`

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select source: Deploy from a branch
4. Select branch: `main` and folder: `/ (root)`
5. Click "Save"

Your site will be live at: `https://your-username.github.io/repository-name`

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No build process required
- **Dynamic Content Loading**: Uses Fetch API for room content
- **Client-Side Rendering**: All processing happens in the browser
- **No Dependencies**: Works without any external libraries

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 KPCS & KSFM Joint Academic Conference

## 🤝 Contributing

This is a static website for a specific conference event. For any corrections or updates, please contact the conference organizers.
