# URL Copy with Summary

An intelligent Chrome extension that copies URLs in rich formats, generates AI-powered summaries, extracts smart hashtags, crafts personal recommendation text with selectable personas, and creates stunning social-media eye-catch images.

<p align="center">
  <a href="https://github.com/wildriver/url-copy-with-summary/releases/download/v2.5.9/url-copy-with-summary.mp4">
    <img src="docs/thumbnail.png" alt="Demo video — click to play" width="720">
  </a>
</p>

> 🎬 [Watch the demo video](https://github.com/wildriver/url-copy-with-summary/releases/download/v2.5.9/url-copy-with-summary.mp4)

## ✨ New in v2.5.x
- **お勧め文 (Recommendation) with Personas**: Generate a personal, enthusiastic recommendation blurb in one of 8 tones — Default / Teacher / Student / Enthusiast / Researcher / Writer / Friend / Businessman.
- **Theme Selector**: Pick between a refined **Light**, refined **Dark** (new default), and the original **Neon** look from Settings.
- **Cleaner UI**: Removed the duplicate AI summary section — checkboxes now trigger generation automatically. Provider selector and remaining-quota badge moved to the preview header for a more compact layout.
- **Close Button on Settings**: Close the settings tab in one click and return to your work.
- **Eye-catch Layout Fix**: Two-row layout for the Eye-catch menu, eliminating awkward text wrapping.
- **Visual Clarity**: Distinct styling for the clipboard-preview area so you never confuse input vs. output.

## 🚀 Features
- **Three Themes**: Refined Light, refined Dark, and original Neon — choose from Settings.
- **Bilingual**: Fully localized in English and Japanese.
- **Flexible URL Copy**: Compose the clipboard output from Title, AI Summary, X-optimized Summary (140 chars), Hashtags, and a personal Recommendation.
- **AI Summary**: Configurable length and language via Groq or OpenRouter.
- **Recommendation with Personas**: Let AI write a short, character-driven recommendation message in the persona you pick.
- **Eye-catch Generation**: 1200×630 social share images with 5 templates and optional AI-assisted title.
- **Smart Fallback**: Falls back between Groq and OpenRouter when one hits its rate limit.
- **Rate-limit Badge**: See your remaining daily requests directly in the popup.
- **Amazon & Tracking URL Cleanup**: Strips `fbclid`, `utm_*`, and shortens Amazon product URLs automatically.

## 📥 Installation
1. Download the latest [`extension_v2.5.9.zip`](https://github.com/wildriver/url-copy-with-summary/releases/latest) from the Releases page.
2. **Unzip** the file into a folder.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **"Developer mode"** in the top right corner.
5. Click **"Load unpacked"** and select the **folder** you just unzipped (the one containing `manifest.json`).

## ⚙️ Setup
1. Open the extension popup.
2. Click **Settings** to configure your AI provider (Groq or OpenRouter) and enter your API key. The **AI Writing** group requires an API key.
   - **Groq Limits**: `llama-3.1-8b-instant` allows up to 14,400 requests/day. High-performance models like `llama-3.3-70b-versatile` may be limited to 1,000 requests/day.
   - **OpenRouter Limits**: Free tier allows roughly ~50 requests/day. Upgrading to a $10 credit unlocks 1,000+ requests/day.
   - *Tip: Configure both providers! If one goes down or hits a limit, the extension will automatically fall back to the other.*
3. (Optional) Pick your preferred **Theme**: Light / Dark / Neon.

## 🛠 Development
- **Manifest V3**: Built with modern Chrome extension standards.
- **Canvas API**: Local image generation for performance and privacy.
- **AI Integration**: Connects to your choice of LLM provider (Groq, OpenRouter).
- **CSS Variables + Themes**: Flash-free theme switching via `theme.js` reading `localStorage` before render.

## 🙏 Acknowledgements
This project is a fork of the original [Simple URL Copy](https://github.com/MISONLN41/simple-url-copy) by [@ikedaosushi](https://github.com/ikedaosushi) and [Misoni](https://github.com/MISONLN41).

Special thanks to the original authors for providing the foundation for this extension.

---
*Enhanced by URL Copy with Summary.*
