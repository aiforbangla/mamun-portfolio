# Mamun Or Rashid — Portfolio

Academic portfolio with admin panel, chronological bio, interactive visualizations, and light/dark theme.

## Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `mamun-portfolio` (or any name you prefer)
3. Set it to **Public**
4. Do **NOT** initialize with README (we'll push our own)
5. Click **Create repository**

### Step 2: Upload Files

**Option A — Upload via GitHub Web UI (Easiest)**

1. On your new empty repo page, click **"uploading an existing file"**
2. Drag and drop ALL files and folders from this project:
   - `package.json`
   - `vite.config.js`
   - `index.html`
   - `.gitignore`
   - `src/` folder (contains `main.jsx` and `App.jsx`)
   - `.github/` folder (contains the deploy workflow)
3. Commit the files

> **Important:** GitHub web UI doesn't show hidden folders easily.
> For the `.github` folder, you may need to use Option B.

**Option B — Using Git from Terminal**

```bash
cd mamun-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mamun-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically run on push

### Step 4: Wait & Visit

1. Go to **Actions** tab — you'll see the deploy workflow running
2. Wait 1–2 minutes for it to finish (green checkmark)
3. Your site is live at: `https://YOUR_USERNAME.github.io/mamun-portfolio/`

## If Repo Name Is Different

If you name your repo something other than `mamun-portfolio`, update `vite.config.js`:

```js
base: '/your-repo-name/',
```

## Admin Panel

- Click the **Admin** button (top-right of hero)
- Password: `Mamun@2026`
- Manage: chronological entries, hero slides, gallery images, download files, profile links

## Using Your Own Domain (Optional)

1. In repo Settings → Pages, add your custom domain
2. Change `vite.config.js` to: `base: '/'`
3. Push the change — it auto-redeploys

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`
