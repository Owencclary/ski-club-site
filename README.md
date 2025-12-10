# Evergreen Freeride Collective

Landing page for the ski club with signup form.

## Deploy to Vercel (5 minutes)

### Option A: Via GitHub (recommended)

1. **Create a GitHub repo**
   - Go to [github.com/new](https://github.com/new)
   - Name it `ski-club-site` (or whatever you want)
   - Keep it public or private, doesn't matter
   - Click "Create repository"

2. **Push this code to GitHub**
   ```bash
   cd ski-club-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ski-club-site.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
   - Click "Add New Project"
   - Import your `ski-club-site` repo
   - Click "Deploy" (Vercel auto-detects Vite)
   - Done! You'll get a URL like `ski-club-site.vercel.app`

### Option B: Vercel CLI (even faster)

```bash
npm install -g vercel
cd ski-club-site
vercel
```

Follow the prompts and you're live.

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## Collecting Form Submissions

Right now the form just shows a success message. To actually collect submissions, you have a few options:

### Easy: Google Forms / Tally
Replace the form with an embedded Google Form or [Tally](https://tally.so) form.

### Medium: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Change the form's `onSubmit` to POST to your Formspree endpoint

### Advanced: Discord Webhook
Send submissions directly to a Discord channel. I can help set this up if you want.

---

## Custom Domain

In Vercel dashboard → your project → Settings → Domains → Add your domain.

Vercel gives you free HTTPS automatically.
