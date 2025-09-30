# Branch Deployment Setup

## Your Deployment Status ✅

**Current Branch**: `deplo`  
**Production URL**: https://my-portfolio-77siapt5q-pramudi02s-projects.vercel.app  
**Status**: Successfully deployed from `deplo` branch

## Automatic Deployments

To set up automatic deployments from the `deplo` branch:

### Option 1: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `my-portfolio` project
3. Navigate to **Settings** → **Git**
4. Under **Production Branch**, change from `master` to `deplo`
5. Save changes

### Option 2: CLI Configuration

The `vercel.json` has been updated to enable deployments from the `deplo` branch.

## Branch Strategy

- **`deplo` branch**: Your current working branch with latest features
- **`master` branch**: Can remain as stable/release branch
- **Firebase**: Still configured for alternative deployment from any branch

## Next Steps

1. **Push any new changes**:
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin deplo
   ```

2. **Automatic deployment**: Vercel will automatically deploy when you push to `deplo`

3. **Custom domain** (optional): Configure in Vercel dashboard under Domains

## URLs

- **Preview**: https://my-portfolio-l33cvob7u-pramudi02s-projects.vercel.app
- **Production**: https://my-portfolio-77siapt5q-pramudi02s-projects.vercel.app
- **Firebase**: https://portfolio990.web.app (alternative)

Your portfolio is now live and will automatically update when you push changes to the `deplo` branch! 🚀