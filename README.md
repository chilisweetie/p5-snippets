# p5.js Snippets

A copy-and-paste library of p5.js snippets. Each snippet shows where its code goes: `setup()`, `draw()`, `keyPressed()`, and so on.

## Files

- `index.html` — the page. You shouldn't need to edit it.
- `snippets.js` — all the snippets. Edit this file to add or change them.

## Put it on GitHub Pages

1. Create a new public repo on GitHub, e.g. `p5-snippets`.
2. Upload `index.html` and `snippets.js`. You can use **Add file → Upload files**, or `git push`.
3. In the repo, go to **Settings → Pages**. Under **Source**, choose **Deploy from a branch**, then pick `main` and `/ (root)`. Save.
4. After about a minute, the site is live at `https://YOUR-USERNAME.github.io/p5-snippets/`.

## Add a snippet

Open `snippets.js`, copy an existing block, and change it:

```js
{
  id: 'save-image',               // unique, no spaces (used for links)
  title: 'Press S to save an image',
  category: 'Canvas',             // a new name makes a new section
  level: 'beginner',              // or 'intermediate'
  description: 'Download whatever is on the canvas as a PNG.',
  parts: [
    {
      where: 'keyPressed',        // html | top | preload | setup | draw | keyPressed | mousePressed | end
      note: 'Optional extra instruction.',
      code: `if (key === 's') {
  saveCanvas('my-sketch', 'png');
}`,
    },
  ],
  tip: 'Optional tip shown at the bottom.',
},
```

Code goes between backticks. Don't use backticks or `${` inside the code itself.

## Link straight to a snippet

Add the snippet's `id` to the address, e.g. `.../p5-snippets/#save-image`. This is handy for slides or QR codes.
