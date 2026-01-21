# Adding Your Photos to Keffy Marketing Site

## Step 1: Prepare Your Photos

1. Select 8 great travel photos
2. Rename them: `photo1.jpg`, `photo2.jpg`, ... `photo8.jpg`
3. **IMPORTANT**: Use `.jpg` extension (lowercase)

## Step 2: Create the Images Folder

```bash
cd keffyai-marketing
mkdir -p public/images
```

## Step 3: Copy Your Photos

```bash
# Copy all your renamed photos to public/images/
cp ~/Desktop/your-photos/* public/images/
```

Your structure should look like:
```
keffyai-marketing/
├── public/
│   └── images/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       ├── photo4.jpg
│       ├── photo5.jpg
│       ├── photo6.jpg
│       ├── photo7.jpg
│       └── photo8.jpg
```

## Step 4: Verify Images Load

```bash
npm run dev
```

Visit http://localhost:3001 and scroll to the gallery section. Your photos should appear!

## Optional: Optimize Photos

For best performance, resize your photos to:
- **Width:** 800px
- **Height:** 800px  
- **Format:** JPG
- **Quality:** 85%

You can use:
- **Mac:** Preview app (Tools → Adjust Size)
- **Online:** tinyjpg.com or squoosh.app
- **Command line:** `brew install imagemagick` then:
  ```bash
  for img in photo*.jpg; do
    convert "$img" -resize 800x800^ -gravity center -extent 800x800 -quality 85 "optimized_$img"
  done
  ```

## Troubleshooting

**Photos not showing?**
1. Check file names are EXACTLY: photo1.jpg, photo2.jpg, etc. (lowercase)
2. Check they're in `public/images/` not just `images/`
3. Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
4. Check browser console for errors (F12 → Console tab)

**Wrong photos showing?**
- Clear the Next.js cache: `rm -rf .next` then `npm run dev`
