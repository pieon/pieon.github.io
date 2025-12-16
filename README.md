# Simple Portfolio Website

A clean, minimal portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools - just simple, fast, and SEO-friendly code.

## Features

- **Pure HTML/CSS/JS** - No frameworks or dependencies
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Semantic HTML with proper meta tags
- **Fast Loading** - Minimal JavaScript, optimized for performance
- **GitHub Pages Ready** - Deploy in minutes

## Project Structure

```
simple-portfolio/
├── index.html              # Home page with all sections
├── resume.html             # Resume/CV page
├── academic.html           # Academic work and publications
├── contact.html            # Contact information
├── css/
│   └── style.css          # All styles (442 lines)
├── js/
│   └── main.js            # Minimal interactivity (83 lines)
├── images/
│   ├── profile.jpg        # Your profile photo
│   └── TaleMateSample.png # Research project images (add as needed)
└── research/
    ├── talemate.html      # TaleMate research details
    ├── minimalism.html    # Minimalism research details
    └── toysphere.html     # Toysphere research details
```

## Quick Start

### Local Development

1. Simply open `index.html` in your browser
2. No build process required!
3. Edit HTML/CSS/JS files directly

### Live Server (Optional)

For a better development experience with auto-reload:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## Deployment to GitHub Pages

### Option 1: Deploy from Root (Recommended)

If you want your portfolio at `https://yourusername.github.io`:

1. **Copy files to repository root:**
   ```bash
   # From the simple-portfolio directory
   cp -r * ../
   cd ..
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy simple portfolio to GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch and **/ (root)**
   - Click **Save**

4. **Visit your site:**
   - Your site will be live at: `https://yourusername.github.io`
   - It may take 1-2 minutes to deploy

### Option 2: Deploy from simple-portfolio Folder

If you want to keep the portfolio in a subfolder:

1. **Commit and push:**
   ```bash
   git add simple-portfolio/
   git commit -m "Add simple portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Settings → Pages
   - Source: **main** branch and **/simple-portfolio**
   - Click **Save**

3. **Visit your site:**
   - `https://yourusername.github.io/simple-portfolio/`

### Option 3: Use a Custom Domain

1. Deploy using Option 1 (root deployment)
2. In repository Settings → Pages → Custom domain
3. Enter your domain: `www.jaehoonpyon.com`
4. Update DNS records at your domain registrar:
   ```
   Type    Name    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     yourusername.github.io
   ```
5. Wait for DNS propagation (can take up to 24 hours)

## Customization

### Update Content

1. **Home Page** - Edit `index.html`:
   - About section: Lines 48-70
   - Blog posts: Lines 72-130
   - Research projects: Lines 132-200
   - Talks: Lines 202-250
   - Teaching: Lines 252-290

2. **Resume** - Edit `resume.html`:
   - Add your education, experience, skills

3. **Academic** - Edit `academic.html`:
   - Add your publications and presentations

4. **Contact** - Edit `contact.html`:
   - Update email, office location, social links

### Change Colors

Edit `css/style.css` (lines 1-7):

```css
:root {
  --primary-color: #0095eb;      /* Main blue color */
  --primary-hover: #0077be;      /* Hover state */
  --text-primary: rgba(0, 0, 0, 0.8);
  --text-secondary: #7a7a7a;
  --border-color: #e0e0e0;
  --bg-gray: #f5f5f5;
}
```

### Add Images

1. Place images in the `images/` folder
2. Reference them in HTML:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

For research pages:
```html
<img src="../images/your-image.png" alt="Description">
```

### Update Meta Tags for SEO

In each HTML file's `<head>` section, update:

```html
<title>Your Title Here</title>
<meta name="description" content="Your description here">
<meta property="og:title" content="Your Open Graph title">
<meta property="og:url" content="https://your-domain.com">
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **First Load:** < 100ms (HTML only, no build step)
- **CSS:** Single file, 442 lines, ~10KB
- **JavaScript:** Minimal, 83 lines, ~2KB
- **Images:** Optimize before adding (use WebP for best results)

## SEO Checklist

- ✅ Semantic HTML5 elements
- ✅ Unique meta descriptions for each page
- ✅ Open Graph tags for social sharing
- ✅ Descriptive alt text for images
- ✅ Clean, readable URLs
- ✅ Mobile-responsive design
- ✅ Fast loading times

### Submit to Search Engines

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your property
   - Verify ownership
   - Submit your sitemap (if you create one)

2. **Bing Webmaster Tools:**
   - https://www.bing.com/webmasters
   - Add and verify your site

## Adding a Sitemap (Optional)

Create `sitemap.xml` in the root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.jaehoonpyon.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.jaehoonpyon.com/resume.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.jaehoonpyon.com/academic.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.jaehoonpyon.com/contact.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.jaehoonpyon.com/research/talemate.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.jaehoonpyon.com/research/minimalism.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.jaehoonpyon.com/research/toysphere.html</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

## Need to Add

1. **TaleMateSample.png** - Add your TaleMate research image to `images/` folder
2. **Update research content** - Replace placeholder text in research pages with your actual content
3. **Add your actual resume content** - Fill in resume.html with your real information
4. **Update social links** - Replace placeholder links in contact.html with your actual profiles

## Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images are in the `images/` folder
- Check file names match exactly (case-sensitive on some servers)

### CSS not loading?
- Clear browser cache
- Check `<link>` tag in HTML points to correct path
- Verify `css/style.css` exists

### GitHub Pages not updating?
- Changes can take 1-2 minutes to deploy
- Clear browser cache
- Check GitHub Actions tab for deployment status

## License

This is a personal portfolio template. Feel free to use and modify as needed.

## Contact

For questions or issues, please update the contact information in `contact.html`.

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

No frameworks. No build tools. Just simple, clean code.
