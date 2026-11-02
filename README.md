# AI Voice Interviewer: demo site

A one-page static site for the Final Year Project open-house standee (QR code
target). It explains the product and shows five short demo clips, so visitors
can follow it on a phone even if the live demo isn't running.

No build step, no frameworks: plain HTML, CSS and a few lines of JavaScript.

## Files

```text
index.html                 The page
style.css                  Styles (mobile-first)
script.js                  Pauses other clips when one starts playing
videos/*.mp4               Demo clips (H.264 + AAC, faststart, 480x864)
videos/posters/*.jpg       Poster frame shown before each clip plays
```

## Preview locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a new **public** repository on GitHub (for example `ai-interviewer-demo`).
2. Push this folder to it:

   ```bash
   git remote add origin https://github.com/<your-user>/ai-interviewer-demo.git
   git branch -M main
   git push -u origin main
   ```

3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   then choose **Branch: `main`** and folder **`/ (root)`**. Click **Save**.
5. After a minute or two the site is live at
   `https://<your-user>.github.io/ai-interviewer-demo/`.
   Use that URL for the QR code.

All paths in the page are relative, so it works under the repository sub-path
without any changes.

## Updating a clip

Keep the same filename in `videos/` and regenerate its poster, for example:

```bash
ffmpeg -i source.mp4 -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p \
  -c:a aac -b:a 96k -movflags +faststart videos/hint.mp4
ffmpeg -ss 30 -i videos/hint.mp4 -frames:v 1 -q:v 5 videos/posters/hint.jpg
```
