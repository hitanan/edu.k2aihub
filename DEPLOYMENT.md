# Deployment Guide for GitHub Pages

This guide will help you deploy the K2AI Hub to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Node.js 20+ installed
3. This project cloned to your local machine

## Deployment Steps

### 1. Prepare Your Repository

1. Create a new repository on GitHub (or use an existing one)
2. Push your code to the main branch:

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically trigger on the next push

### 3. Local Testing Before Deployment

Test the static export locally:

```bash
# Install dependencies
npm install

# Build and export the static site
npm run build

# The static files will be generated in the 'out' directory
```

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Rename `public/CNAME.example` to `public/CNAME`
2. Replace the content with your domain name
3. Configure your domain's DNS to point to GitHub Pages

### 5. Verify Deployment

1. After the GitHub Action completes, your site will be available at:

   - `https://[username].github.io/[repository-name]` (default)
   - Or your custom domain if configured

2. Check the deployment status in the **Actions** tab of your repository

## Project Features

The deployed site includes:

### Vietnam Geography Module

- 34 provincial administrative units after merger
- Interactive SVG map with click/hover interactions
- Smart search supporting current and former province names
- Individual SEO-optimized city pages
- Mobile-responsive design

### AI Của Tôi Module

- 6 comprehensive AI categories:
  - 💼 Office & Work
  - 🎨 Creative & Design
  - 📚 Education & Learning
  - 📈 Business & Marketing
  - 🌱 Daily Life
  - 💻 Programming & Development

### Global Features

- Standalone feedback system
- Performance optimizations (React.memo, lazy loading)
- SEO excellence with structured data
- Mobile-first responsive design

## Performance Optimizations

The site is optimized for GitHub Pages with:

- ✅ Static generation for all pages
- ✅ Image optimization
- ✅ Lazy loading with Suspense
- ✅ Critical resource preloading
- ✅ Bundle size optimization

## SEO Features

- ✅ Dynamic metadata for all pages
- ✅ JSON-LD structured data
- ✅ OpenGraph and Twitter Cards
- ✅ Proper canonical URLs
- ✅ Mobile-friendly design

## Troubleshooting

### Build Fails

- Check Node.js version (20+ required)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run lint`

### Pages Not Loading

- Ensure `output: 'export'` is in `next.config.ts`
- Check that all links use trailing slashes
- Verify GitHub Pages is configured to use GitHub Actions

### Performance Issues

- All pages are pre-built for optimal performance
- Static generation ensures fast loading times
- CDN caching through GitHub Pages

## Support

For issues or questions:

- Check the GitHub Actions logs for deployment errors
- Review the README.md for detailed project information
- Contact: jobtimeseo@gmail.com

## Next Steps After Deployment

1. Test all functionality on the live site
2. Submit to search engines for indexing
3. Monitor performance with Google PageSpeed Insights
4. Consider adding analytics if needed

Your Vietnamese Education Platform is now ready for users worldwide! 🚀
