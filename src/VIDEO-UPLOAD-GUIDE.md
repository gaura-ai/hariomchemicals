# Video Upload Guide for Hariom Chemicals Website

## 📹 Video Requirements

### Accepted Formats
- **MP4** (Recommended - Best compatibility)
- **WebM** (Good for modern browsers)
- **OGG** (Fallback option)

### Video Specifications
- **Resolution:** Vertical (9:16 aspect ratio) - Mobile-friendly
- **Recommended Size:** 720x1280 or 1080x1920 pixels
- **File Size:** Keep under 50MB for faster loading
- **Duration:** 15-60 seconds optimal
- **Format:** H.264 codec for MP4

## 🎬 Your Videos

You mentioned having two mobile videos:
1. **Isoborneol Flakes** - Vertical mobile recording
2. **Menthol Crystals** - Vertical mobile recording

## 📁 Where to Upload Videos

### Option 1: GitHub Repository (Recommended for GitHub Pages)

**Step 1: Create Videos Folder**
```bash
mkdir public/videos
```

**Step 2: Add Your Videos**
Place your video files in the `/public/videos/` directory with these names:
- `isoborneol-flakes.mp4`
- `menthol-crystals.mp4`

**Optional Thumbnails** (for better UX):
- `isoborneol-thumbnail.jpg`
- `menthol-thumbnail.jpg`

**Step 3: Update Code**
In `/App.tsx`, uncomment the video elements (already prepared in the code):

For Isoborneol Flakes:
```tsx
<video 
  className="w-full h-full object-cover"
  controls
  playsInline
  poster="/videos/isoborneol-thumbnail.jpg"
>
  <source src="/videos/isoborneol-flakes.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

For Menthol Crystals:
```tsx
<video 
  className="w-full h-full object-cover"
  controls
  playsInline
  poster="/videos/menthol-thumbnail.jpg"
>
  <source src="/videos/menthol-crystals.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

**Step 4: Git Commands**
```bash
git add public/videos/
git commit -m "Add product videos"
git push origin main
```

### Option 2: YouTube (Best for Large Files)

**Advantages:**
- No file size limits
- Free hosting
- Better mobile performance
- Analytics
- Automatic transcoding

**Steps:**
1. Upload videos to YouTube
2. Get the YouTube video IDs
3. Use YouTube embed instead

**Update Code with YouTube Embed:**
```tsx
<div className="relative aspect-[9/16]">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0"
    title="Isoborneol Flakes"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

### Option 3: Vimeo (Professional Option)

**Advantages:**
- Ad-free
- Better video quality
- Professional appearance
- Privacy controls

**Steps:**
1. Create a Vimeo account
2. Upload videos
3. Get embed codes
4. Use Vimeo embed

### Option 4: Cloud Storage Links

**Services:**
- **Google Drive**: Public link
- **Dropbox**: Public link
- **OneDrive**: Public link

**Note:** Not recommended for production as these can be slow and may have access issues.

## 🎥 Video Optimization Tips

### Before Uploading

1. **Compress Your Video:**
   - Use [HandBrake](https://handbrake.fr/) (Free)
   - Use [Adobe Media Encoder](https://www.adobe.com/products/media-encoder.html)
   - Online: [Clipchamp](https://clipchamp.com/) or [Kapwing](https://www.kapwing.com/)

2. **Recommended HandBrake Settings:**
   - Format: MP4
   - Video Codec: H.264
   - Quality: RF 23-25
   - Preset: "Fast 1080p30" or "Fast 720p30"
   - Keep audio at 128-192 kbps

3. **Create Thumbnails:**
   - Extract a frame from your video
   - Size: 720x1280 or 1080x1920 (match video)
   - Format: JPG or PNG
   - Optimize with [TinyPNG](https://tinypng.com/)

## 🚀 Implementation Steps

### Quick Start (GitHub Pages)

1. **Prepare Your Videos**
   ```bash
   # Create directory
   mkdir -p public/videos
   
   # Copy your videos (adjust paths as needed)
   cp /path/to/your/isoborneol.mp4 public/videos/isoborneol-flakes.mp4
   cp /path/to/your/menthol.mp4 public/videos/menthol-crystals.mp4
   ```

2. **Update App.tsx**
   - Find the two video placeholders in the "Product Videos Showcase" section
   - Uncomment the `<video>` tags
   - Comment out or remove the placeholder `<div>` with icons

3. **Test Locally** (if possible)
   - Check that videos load
   - Test on mobile device
   - Verify controls work

4. **Deploy**
   ```bash
   git add .
   git commit -m "Add product showcase videos"
   git push origin main
   ```

5. **Verify on GitHub Pages**
   - Wait for deployment (2-5 minutes)
   - Visit your site
   - Test videos on desktop and mobile

## 📱 Mobile Considerations

### Best Practices
- Use `playsInline` attribute (already added)
- Add `controls` attribute for user control
- Include poster image for better UX
- Keep file size under 25MB for mobile

### Testing
Test your videos on:
- iOS Safari
- Android Chrome
- Desktop browsers (Chrome, Firefox, Safari)

## 🎨 Advanced Customization

### Auto-play Background Video
```tsx
<video 
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/videos/your-video.mp4" type="video/mp4" />
</video>
```

### Custom Video Controls
If you want custom styled controls, consider using:
- [Video.js](https://videojs.com/)
- [Plyr](https://plyr.io/)
- Custom HTML5 controls

## 📊 Monitoring

### After Upload
- Check loading speed
- Monitor bandwidth usage on GitHub Pages
- Test on different devices and connections
- Check video quality

### GitHub Pages Limits
- Repository size: 1GB
- Each file: <100MB
- Bandwidth: 100GB/month (soft limit)
- If you exceed, consider YouTube

## 🆘 Troubleshooting

### Video Won't Load
1. Check file path is correct
2. Verify file is in `/public/videos/`
3. Check file name matches code exactly
4. Ensure video format is MP4
5. Try clearing browser cache

### Video Too Large
1. Compress with HandBrake
2. Reduce resolution (1080p → 720p)
3. Shorten duration
4. Use YouTube instead

### Slow Loading
1. Compress video more
2. Use poster image
3. Consider lazy loading
4. Use YouTube for bandwidth-heavy content

## 📝 Code Reference

The video section code is located in `/App.tsx` at the **"Product Videos Showcase"** section (around line 290).

Look for these comments:
```tsx
{/* Uncomment and update path once video is uploaded */}
```

## ✅ Checklist

Before going live:
- [ ] Videos compressed to < 25MB each
- [ ] Files named correctly
- [ ] Thumbnail images created
- [ ] Video elements uncommented in code
- [ ] Tested on mobile device
- [ ] Tested on desktop browser
- [ ] Pushed to GitHub
- [ ] Verified on live site

## 🎯 Recommended Approach

For your specific case (two vertical mobile videos):

1. **Start with GitHub** (if videos are < 25MB each after compression)
2. **Use YouTube** if videos are larger or for better performance
3. **Add thumbnails** for professional appearance

## 💡 Pro Tips

1. **Create Short Clips:** 15-30 seconds is ideal for web
2. **Add Text Overlay:** Add product names/features in video
3. **Good Lighting:** Ensure products are well-lit in videos
4. **Stable Shot:** Use tripod or stabilization
5. **Close-ups:** Show crystal structure and clarity
6. **Background:** Plain white or neutral background works best

## 🔗 Useful Tools

- **Video Compression:** [HandBrake](https://handbrake.fr/)
- **Online Editor:** [Kapwing](https://www.kapwing.com/)
- **Thumbnail Creator:** [Canva](https://www.canva.com/)
- **Video Hosting:** [YouTube](https://youtube.com/) or [Vimeo](https://vimeo.com/)

---

## Need Help?

If you encounter any issues:
1. Check file paths match exactly
2. Verify video format (MP4 H.264)
3. Test in different browsers
4. Check browser console for errors (F12)

**Current Placeholder Status:**
The website currently shows attractive placeholders with icons. Once you upload videos, simply uncomment the video tags and the placeholders will be replaced with your actual product videos!
