# Deployment Guide for GitHub Pages

This guide will help you deploy your simple portfolio to GitHub Pages.

## Quick Deploy (Recommended)

### Step 1: Move Simple Portfolio to Root

Copy the simple portfolio files to your repository root:

```bash
# From the repository root directory
cd /Users/jaehoonpyon/Documents/GitHub/pieon.github.io

# Copy all files from simple-portfolio to root
cp -r simple-portfolio/* ./

# Optional: Remove old directories
rm -rf old-vite-backup/
rm -rf nextjs-portfolio/
rm -rf simple-portfolio/
```

### Step 2: Stage All Changes

```bash
# Remove deleted files from git
git add -u

# Add new files
git add .

# Check what will be committed
git status
```

### Step 3: Commit and Push

```bash
# Commit your changes
git commit -m "Deploy simple HTML/CSS portfolio to GitHub Pages"

# Push to GitHub
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/pieon/pieon.github.io`
2. Click on **Settings**
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

### Step 5: Wait for Deployment

- GitHub Pages will automatically build and deploy your site
- This takes 1-2 minutes
- Visit: `https://pieon.github.io` or `https://www.jaehoonpyon.com`

## Alternative: Deploy from Subfolder

If you want to keep the simple-portfolio in its own folder:

### Step 1: Commit the folder

```bash
cd /Users/jaehoonpyon/Documents/GitHub/pieon.github.io

# Stage and commit
git add simple-portfolio/
git commit -m "Add simple portfolio"
git push origin main
```

### Step 2: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Source:
   - Branch: **main**
   - Folder: **/simple-portfolio**
3. Click **Save**

Your site will be at: `https://pieon.github.io/simple-portfolio/`

## Verify Deployment

After deployment, test your site:

1. Visit your GitHub Pages URL
2. Check all pages work:
   - Home: `/`
   - Resume: `/resume.html`
   - Academic: `/academic.html`
   - Contact: `/contact.html`
   - Research pages: `/research/talemate.html`, etc.

3. Test on mobile devices
4. Check browser console for any errors

## Troubleshooting

### Changes not showing up?
- Wait 1-2 minutes after pushing
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check GitHub Actions tab for deployment status

### 404 errors?
- Ensure file paths are correct
- File names are case-sensitive
- Check that all files are committed and pushed

### Images not loading?
- Verify images are in the `images/` folder
- Check file names match exactly (case-sensitive)
- Ensure images are committed to git

## Custom Domain Setup

If you want to use `www.jaehoonpyon.com`:

### Step 1: Create CNAME file

```bash
# In repository root
echo "www.jaehoonpyon.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### Step 2: Configure DNS

At your domain registrar, add these DNS records:

```
Type    Name    Value                    TTL
A       @       185.199.108.153          3600
A       @       185.199.109.153          3600
A       @       185.199.110.153          3600
A       @       185.199.111.153          3600
CNAME   www     pieon.github.io          3600
```

### Step 3: Enable in GitHub Settings

1. Go to Settings → Pages
2. Custom domain: Enter `www.jaehoonpyon.com`
3. Click **Save**
4. Wait for DNS check (green checkmark)
5. Enable "Enforce HTTPS" once DNS is verified

### Step 4: Wait for DNS Propagation

- Can take up to 24-48 hours
- Usually works within 1 hour
- Check status: `dig www.jaehoonpyon.com`

## Update Workflow

After initial deployment, to update your site:

```bash
# Make your changes to HTML/CSS/JS files

# Stage changes
git add .

# Commit
git commit -m "Update content"

# Push
git push origin main

# GitHub Pages auto-deploys in 1-2 minutes
```

## SEO Submission

After deployment, submit your site to search engines:

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://pieon.github.io` (or your custom domain)
3. Verify ownership (use HTML file method)
4. Submit sitemap if you create one

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add and verify your site
3. Import from Google Search Console (easier)

## Performance Tips

1. **Optimize images** before committing:
   ```bash
   # Use ImageOptim, TinyPNG, or similar
   # Or command line:
   convert profile.jpg -quality 85 -resize 800x800 profile.jpg
   ```

2. **Enable caching** with a `.htaccess` file (if needed)

3. **Use WebP format** for images when possible

4. **Minimize file sizes** - your CSS and JS are already minimal!

## Monitoring

Track your site's performance:

1. **Google Analytics** - Add tracking code to all pages
2. **Google Search Console** - Monitor search performance
3. **Lighthouse** - Run regular audits in Chrome DevTools

## Next Steps

- [ ] Deploy to GitHub Pages
- [ ] Test all pages and links
- [ ] Add TaleMateSample.png image
- [ ] Update research content with real data
- [ ] Fill in resume.html with actual information
- [ ] Update social media links in contact.html
- [ ] Submit to Google Search Console
- [ ] Set up custom domain (if desired)
- [ ] Monitor search engine indexing

---

**Need help?** Check the [README.md](./README.md) for more details or troubleshooting tips.
