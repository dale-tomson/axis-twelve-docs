# GitHub Pages Deployment Setup

This document provides instructions for setting up GitHub Pages deployment for the Axis Twelve documentation site.

## Prerequisites

- GitHub repository with admin access
- Repository: `dale-tomson/axis-twelve-docs`

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/dale-tomson/axis-twelve-docs`
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the changes

### 2. Workflow Configuration

The deployment workflow is already configured in `.github/workflows/deploy.yml`.

**Triggers:**
- Automatically on push to `main` branch
- Manually via workflow dispatch

**Build Process:**
1. Checkout code
2. Install pnpm package manager
3. Setup Node.js 20 with pnpm cache
4. Install dependencies (`pnpm install --frozen-lockfile`)
5. Build Next.js site (`pnpm run build`)
6. Upload build artifacts
7. Deploy to GitHub Pages

### 3. First Deployment

The workflow will run automatically when you push to the `main` branch. You can also trigger it manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select `main` branch
5. Click **Run workflow** button

### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. Check the workflow run status
3. Once completed, your site will be available at:
   - `https://dale-tomson.github.io/axis-twelve-docs/`

## Deployment Status

After setup, your site will automatically deploy on every push to `main`.

View deployment status:
- **Actions tab**: See build and deployment logs
- **Environments**: Check deployment history and status

## Troubleshooting

### Workflow Fails

1. Check the **Actions** tab for error logs
2. Common issues:
   - Build errors: Check `pnpm run build` locally
   - Permissions: Ensure GitHub Pages is enabled in Settings
   - Node version: Workflow uses Node 20
   - pnpm version: Workflow uses pnpm 8

### Site Not Updating

1. Check that the workflow completed successfully
2. Clear browser cache and hard refresh (Ctrl+F5)
3. Check GitHub Pages settings are correct

### Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Enter your custom domain under **Custom domain**
3. Add a `CNAME` record in your DNS settings pointing to:
   - `dale-tomson.github.io`

## Local Testing

Test the production build locally before deploying:

```bash
# Build the site
pnpm run build

# The static files will be in the 'out' directory
# Serve them locally with any static server
pnpm dlx serve out
```

## Next.js Configuration

The site is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

This configuration:
- Generates static HTML/CSS/JS files
- Disables Next.js image optimization (not supported in static export)
- Outputs to the `out/` directory

## Deployment Checklist

- [x] GitHub Actions workflow created
- [ ] GitHub Pages enabled in repository settings
- [ ] First deployment triggered
- [ ] Site accessible at GitHub Pages URL
- [ ] Custom domain configured (optional)

---

**Documentation Site**: `https://dale-tomson.github.io/axis-twelve-docs/`
