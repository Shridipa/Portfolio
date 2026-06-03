# Deployment Guide for Shridipa Dhar's Portfolio

This guide covers deploying the portfolio to production on Vercel, the recommended platform for Next.js applications.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Website (Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Sign up or log in with GitHub account
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the project and click "Import"

3. **Configure Settings**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: next build (auto-filled)
   - Output Directory: .next (auto-filled)
   - Install Command: npm install (auto-filled)

4. **Environment Variables** (optional)
   - No environment variables required for this portfolio
   - Skip this step and click "Deploy"

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (typically 2-3 minutes)
   - Your site will be live at a Vercel URL (e.g., `portfolio-name.vercel.app`)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (development)
vercel

# Deploy to production
vercel --prod

# View deployment details
vercel ls
vercel inspect <deployment-url>
```

## 🌐 Custom Domain Setup

### Add Custom Domain on Vercel

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Click "Add Domain"
5. Enter your domain (e.g., `shridipad.com`)
6. Choose domain source:
   - **Vercel's Nameservers** (Recommended): Faster setup, Vercel manages DNS
   - **External Nameservers**: If your domain is on another registrar

### If Using Vercel Nameservers

1. Copy the nameserver values provided by Vercel
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Update nameservers to Vercel's values
4. Wait 24-48 hours for DNS propagation
5. Vercel will automatically detect and activate your domain

### If Using External DNS

1. Add DNS records in your registrar's DNS settings:
   - Type: `A` Record
   - Name: `@` (or your subdomain)
   - Value: `76.76.19.165` (Vercel's IP)
   - Type: `CNAME` Record
   - Name: `www`
   - Value: `cname.vercel-dns.com.`

2. Verify domain in Vercel dashboard

## 📊 Environment Setup

### Build Environment Variables (if needed in future)

If you add environment variables, create a `.env.local` file:

```bash
# .env.local
# Example (not needed for current setup)
NEXT_PUBLIC_API_URL=https://api.example.com
```

Add to Vercel:
1. Project Settings → Environment Variables
2. Add variable name and value
3. Select environments where it applies (Production, Preview, Development)

## 🔍 Pre-Deployment Checklist

Before deploying, verify:

- [ ] All pages load correctly locally: `npm run dev`
- [ ] No console errors in developer tools
- [ ] Mobile responsive design works
- [ ] Links to projects and social media are correct
- [ ] Resume PDF exists and is accessible
- [ ] Email in contact form is correct
- [ ] All images/assets are optimized
- [ ] Navigation works on all pages
- [ ] Animations perform smoothly

## 🧪 Local Testing

### Build & Test Production Version Locally

```bash
# Create production build
npm run build

# Test production build locally
npm start

# Navigate to http://localhost:3000
```

## 📈 Analytics & Monitoring

### Enable Vercel Analytics

1. In Vercel dashboard, go to "Settings" → "Analytics"
2. Enable Web Analytics for free tier insights
3. View real-time visitor data, page performance, etc.

### Monitor Performance

- **Lighthouse**: Run in Chrome DevTools for performance scores
- **Web Vitals**: Vercel automatically tracks Core Web Vitals
- **Error Tracking**: Vercel shows build and runtime errors

## 🔄 Automatic Deployments

Vercel automatically deploys on every push:

- **Push to `main` branch** → Production deployment
- **Push to other branches** → Preview deployments
- **Pull Requests** → Preview URLs for collaboration

## 📝 Updating Content

After deployment, to update content:

1. Edit files locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. Vercel automatically redeploys (takes 2-3 minutes)
4. New version goes live automatically

## 🆘 Troubleshooting

### Build Fails

1. Check Vercel build logs:
   - Go to "Deployments" → Failed deployment → "View Logs"
   - Look for error messages
   - Common issues:
     - Missing dependencies: Run `npm install`
     - TypeScript errors: Fix types in code
     - Import errors: Check file paths

### Site is Slow

1. Check Vercel analytics
2. Optimize images
3. Check for large dependencies
4. Review bundle size in deployment logs

### Domain Not Working

1. Check DNS propagation: https://dnschecker.org/
2. Verify domain is added in Vercel
3. Clear browser cache (Ctrl+Shift+Delete)
4. Wait 24-48 hours for full DNS propagation

### Deployment Stuck

1. Cancel current deployment in Vercel dashboard
2. Push a new commit
3. Vercel will redeploy

## 🔐 Security Best Practices

1. **Keep dependencies updated**:
   ```bash
   npm update
   npm audit
   ```

2. **Enable HTTPS**: Vercel automatically provides SSL/TLS

3. **Set up deployment protection**:
   - Vercel Dashboard → Settings → Deployment Protection
   - Requires authentication for preview URLs

## 🚀 Performance Optimization

### Already Included

- ✅ Next.js optimizations (code splitting, image optimization)
- ✅ CSS minification (Tailwind CSS)
- ✅ JavaScript minification
- ✅ Automatic image optimization

### Manual Optimizations

If needed in future:

1. **Image Optimization**:
   ```bash
   # Use Next.js Image component
   import Image from 'next/image'
   ```

2. **Font Optimization**:
   - Already using Google Fonts with `next/font`

3. **Script Optimization**:
   - Use `next/script` for third-party scripts

## 📱 Testing on Different Devices

Test the live deployment:

1. **Mobile**: Open on phone or use browser DevTools (F12 → Toggle device toolbar)
2. **Tablet**: Check responsive design
3. **Desktop**: Test on different screen sizes
4. **Browsers**: Test on Chrome, Firefox, Safari, Edge

## 🎓 Portfolio Showcase

Once deployed, you can:

1. **Share in Applications**:
   - Google Student Researcher: Include URL in application
   - AI/ML Internships: Add to resume
   - Research Programs: Reference in proposals

2. **Social Media**:
   - Post on LinkedIn: "Just launched my AI/ML portfolio!"
   - Share on Twitter: Technical highlight threads
   - Add to GitHub profile

3. **Resume**:
   ```
   Portfolio: https://shridipad.com
   ```

## 🔄 Continuous Deployment Workflow

```
Local Development → GitHub Push → Vercel Build → Tests → Deploy to Production → Live
```

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically builds and deploys
5. Monitor deployment in Vercel dashboard

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

## ✅ Post-Deployment Checklist

After going live:

- [ ] Share portfolio URL with mentors/advisors
- [ ] Test all links work
- [ ] Verify contact form sends emails
- [ ] Check Google indexing (Google Search Console)
- [ ] Monitor performance metrics
- [ ] Share on LinkedIn
- [ ] Update resume with portfolio URL

---

**Deployment Status**: ✅ Ready for production

**Last Updated**: May 2026

**Platform**: Vercel

**Build Time**: ~2-3 minutes

**Cost**: Free tier available, paid plans optional
