# 3D Artist & Motion Designer — Portfolio Template

A responsive, dark, minimalist portfolio template made with plain HTML, CSS and JavaScript. No build tools or framework required. Designed for GitHub Pages.

## 1. Personalize your content

Open **`content.js`**. This is the main file you'll edit most often:

- Change `name`, `role`, `email`, `linkedin` and `github`.
- Rewrite the `about` text.
- Edit the `skills` list.
- Replace the sample `projects` with your own work.
- Update the `experience` entries.

To add a project, copy one project object inside the `projects` array. To add a project image:
1. Put the image in the `assets` folder.
2. Set its path in the project, e.g. `image: "assets/my-render.jpg"`.
3. Keep the image reasonably optimized (WebP or JPG, ideally under 1–2 MB).

You can link each project to a Behance, ArtStation, Vimeo, YouTube or project page.

## 2. Add your CV

Export your CV as a PDF and name it **`cv.pdf`**. Put it inside `assets/`. The Download CV links already point there.

## 3. Change the design

Edit **`style.css`**. The main colors are at the top in `:root`:
- `--bg`: page background
- `--text`: main text
- `--muted`: secondary text
- `--accent`: highlight color

Edit **`index.html`** only if you want to change the page structure or add/remove sections.

## 4. Preview locally

Double-click `index.html` to open it in a browser. For a more reliable local preview, use VS Code with the Live Server extension.

## 5. Publish with GitHub Pages

1. Create a GitHub repository. For a personal site, name it `YOUR-USERNAME.github.io`. Alternatively, use any repository name, e.g. `portfolio`.
2. Upload all files and folders from this template to the repository root (keep `index.html` at the root).
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait a minute or two for the site to publish. GitHub will show the live URL in the Pages settings.

## Updating later

Edit `content.js` or replace images/CV, then commit and push the changes to GitHub. GitHub Pages will automatically redeploy the site.

## Before going live

- Replace every placeholder name, email and social link.
- Replace sample project content with your real work.
- Add your PDF at `assets/cv.pdf`.
- Check that you have permission to publish all images and work.
- Test the website on mobile and desktop.
