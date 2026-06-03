# Quick Start Guide

Get your world-class AI/ML portfolio up and running in minutes.

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
cd Portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. View Your Portfolio
Open your browser to: **http://localhost:3000**

## 🌐 7-Step Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

### Step 2: Go to Vercel
Visit https://vercel.com and click "Add New Project"

### Step 3: Import GitHub Repo
Select your portfolio repository

### Step 4: Deploy
Click "Deploy" - it's automatic from here

### Step 5: Wait
Vercel builds and deploys (2-3 minutes)

### Step 6: Get Your URL
Your live site: `https://[project-name].vercel.app`

### Step 7: Add Custom Domain (Optional)
In Vercel dashboard → Settings → Domains → Add Domain

**That's it! You're live! 🚀**

## 📱 View Your Portfolio

- **Mobile**: Open on phone or use browser DevTools (F12)
- **Desktop**: Full experience at your deployed URL
- **Tablet**: Check responsive design

## ✏️ Customize Your Portfolio

### Update Personal Info

**In `app/home/page.tsx`**:
- Change headline and subheadline
- Update statistics

**In `app/about/page.tsx`**:
- Update about section
- Change achievements
- Modify research interests

**In `app/projects/page.tsx`**:
- Update project descriptions
- Add GitHub links
- Modify tech stacks

### Update Contact Info

**In `app/contact/page.tsx`**:
- Change email address
- Update GitHub URL
- Update LinkedIn URL
- Update resume download link

### Change Colors

**In `tailwind.config.ts`**:
```javascript
colors: {
  background: '#0B0F19', // Change background
  primary: '#6366F1',    // Change primary color
  accent: '#8B5CF6',     // Change accent
  success: '#22C55E',    // Change success
}
```

## 🎨 Design Customization

### Change Fonts
Edit `app/layout.tsx` and import different Google Font

### Change Hero Image
Update `components/hero.tsx` with your image

### Change Navigation
Edit `components/navbar.tsx` links

### Add New Pages
1. Create folder: `app/[page-name]/`
2. Create file: `page.tsx`
3. Add to navbar links

## 📝 Common Tasks

### Add Project
1. Open `app/projects/page.tsx`
2. Add to `projectsData` array
3. Save and refresh

### Update Skills
1. Open `components/skills.tsx`
2. Modify `skillCategories` array
3. Save and refresh

### Change Blog Post List
1. Open `app/blog/page.tsx`
2. Modify `blogPosts` array
3. Save and refresh

## 🔍 Testing Checklist

Before sharing your portfolio:

- [ ] All links work
- [ ] Mobile looks good (use DevTools F12)
- [ ] Contact form works
- [ ] Resume download works
- [ ] Social links point to correct profiles
- [ ] No console errors (DevTools)
- [ ] Animations are smooth
- [ ] Text is readable
- [ ] Images load quickly

## 📊 Share Your Portfolio

### Share with Recruiters
- **Email**: Include portfolio URL
- **LinkedIn**: Add to profile
- **Resume**: Add as portfolio link
- **Applications**: Include in CV

### Share on Social Media
- **LinkedIn**: "Excited to share my AI/ML portfolio!"
- **Twitter**: Link with brief description
- **GitHub**: Add to profile

### Optimize for Search Engines
- Link from your GitHub profile
- Share on LinkedIn
- Add to resume

## 🚀 After Deployment

### Monitor Analytics
- Vercel dashboard shows visitors
- Check Core Web Vitals
- Monitor performance metrics

### Keep Updated
- Push updates to GitHub
- Vercel automatically redeploys
- Your site updates automatically

### Add More Projects
As you build new projects, add them to the portfolio!

## 🆘 Troubleshooting

### Site Won't Load
- Check Vercel deployment status
- Wait for DNS propagation (24-48 hours)
- Clear browser cache

### Links Don't Work
- Check file paths in components
- Verify URLs are correct
- Test locally first with `npm run dev`

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`
- Restart dev server: `npm run dev`

### TypeScript Errors
- Run linter: `npm run lint`
- Fix any errors shown
- Rebuild project

## 📚 Documentation

- **README.md**: Full project overview
- **DEPLOYMENT.md**: Detailed deployment guide
- **DEVELOPMENT.md**: Local development guide
- **ARCHITECTURE.md**: Technical architecture details

## ⏱️ Time Breakdown

- **Setup**: 2 minutes
- **Deployment**: 5 minutes
- **Total**: 7 minutes to live! ⚡

## 💡 Pro Tips

1. **Use Git regularly**
   ```bash
   git add .
   git commit -m "Update: description"
   git push origin main
   ```

2. **Test before deploying**
   ```bash
   npm run build
   npm start
   ```

3. **Keep dependencies updated**
   ```bash
   npm update
   npm audit
   ```

4. **Share frequently**
   - Update portfolio as you build new projects
   - Share wins on social media
   - Send to recruiters regularly

## 🎯 Next Steps

1. ✅ Follow 5-Minute Setup above
2. ✅ Deploy to Vercel (7 steps)
3. ✅ Customize content
4. ✅ Test on mobile
5. ✅ Share with recruiters!

## 📞 Need Help?

- Check `DEVELOPMENT.md` for local development
- Check `DEPLOYMENT.md` for deployment issues
- Check `ARCHITECTURE.md` for technical details
- Review component examples in `components/` folder

---

**You're all set!** 🎉

Your world-class AI/ML portfolio is ready to impress recruiters and land you that Google Student Researcher position!

Questions? Check the documentation files or explore the code - it's well-commented and easy to understand.

Good luck! 🚀
