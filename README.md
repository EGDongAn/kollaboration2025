# 2025 KPCS & KSFM Joint Academic Conference

English agenda website for the 2025 KPCS & KSFM Joint Academic Conference held on November 30, 2025.

## 📋 Overview

This website provides comprehensive English agendas for all 6 conference rooms:

- **Room A** (E4 Room) - Filler & Procedures
- **Room B** (E2+3 Room) - Primary Care
- **Room C** (E1 Room) - Skinbooster & Thread
- **Room D** (E6 Room) - Hybrid Session
- **Room E** (E7 Room) - Laser Technology
- **Room F** (E8 Room) - Advanced Topics

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

## 🔄 Auto-Sync System

This repository automatically syncs schedule data from kollaboration.net every day at **5:00 AM KST**.

### How it works

1. **GitHub Actions** runs daily at 5:00 AM KST
2. Downloads latest HTML from 6 room pages (A-F)
3. Extracts schedule data and updates local files
4. Automatically commits and pushes changes if detected

### Source URLs

Schedule data is sourced from kollaboration.net with direct 1:1 mapping:

| Source URL | Content | Target File |
|------------|---------|-------------|
| [?pmode=roomA](https://www.kollaboration.net/html/?pmode=roomA) | Filler | roomA_en.html |
| [?pmode=roomB](https://www.kollaboration.net/html/?pmode=roomB) | Primary Care | roomB_en.html |
| [?pmode=roomC](https://www.kollaboration.net/html/?pmode=roomC) | Skinbooster & Thread | roomC_en.html |
| [?pmode=roomD](https://www.kollaboration.net/html/?pmode=roomD) | Hybrid | roomD_en.html |
| [?pmode=roomE](https://www.kollaboration.net/html/?pmode=roomE) | Laser | roomE_en.html |
| [?pmode=roomF](https://www.kollaboration.net/html/?pmode=roomF) | Academy | roomF_en.html |

### Manual Sync

You can trigger a manual sync:

1. Go to **Actions** tab in GitHub
2. Select **Sync Schedule Data** workflow
3. Click **Run workflow**

### Local Sync

```bash
# Install dependencies
npm install

# Run sync script manually
npm run sync
```

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No build process required
- **Dynamic Content Loading**: Uses Fetch API for room content
- **Client-Side Rendering**: All processing happens in the browser
- **Auto-Sync**: Node.js script with jsdom for HTML extraction

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 KPCS & KSFM Joint Academic Conference

## 🤝 Contributing

This is a static website for a specific conference event. For any corrections or updates, please contact the conference organizers.
