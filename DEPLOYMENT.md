# Deployment Guide

This guide covers deploying your Angular portfolio to Vercel while keeping Firebase as an alternative option.

## Prerequisites

1. **Git Repository**: Ensure your code is pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) and connect your GitHub account

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository `MyPortfolio`

2. **Configure Build Settings**:
   - Framework Preset: `Other`
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist/portfolio/browser`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in the Vercel dashboard
   - For the email service, add your backend API endpoints

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a unique URL like `https://my-portfolio-xxx.vercel.app`

## Option 2: Deploy via CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   # First deployment (will configure the project)
   vercel

   # Subsequent deployments
   vercel --prod
   ```

## Option 3: Keep Firebase (Alternative)

Firebase hosting remains configured and ready to use:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and deploy
firebase login
npm run deploy:firebase
```

## Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Update DNS records as instructed

2. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - HTTPS is enabled by default

## Continuous Deployment

- Vercel automatically deploys when you push to your main branch
- Preview deployments are created for pull requests
- No additional configuration needed

## Environment Variables for Production

Add these in Vercel dashboard if using backend services:
- `NEXT_PUBLIC_API_URL`: Your backend API URL
- `EMAIL_SERVICE_URL`: Email service endpoint
- Any other environment-specific variables

## Monitoring

- **Analytics**: Enable Vercel Analytics in dashboard
- **Performance**: Built-in Core Web Vitals monitoring
- **Logs**: Real-time function logs and build logs

---

Your portfolio will be accessible at:
- **Vercel**: `https://your-project-name.vercel.app`
- **Firebase**: `https://portfolio990.web.app` (if still deployed)
- **Custom Domain**: Your configured domain (if set up)