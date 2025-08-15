# React + Tailwind Web Component

A self-contained **React-based Web Component** built with Vite and Tailwind CSS, bundled into a **single `.js` file** that you can host and use in any HTML page without a build system.

## ✨ Features
- Written in **React 18** with **TypeScript**.
- Styled with **Tailwind CSS**, fully encapsulated inside **Shadow DOM**.
- Bundled into **one JavaScript file** (IIFE) for easy embedding.
- No external CSS or runtime dependencies — just drop the script and use the tag.
- Props are passed via HTML attributes.

---

## 📦 Installation & Build

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vijay-kumar-singh/react-tailwind-webcomponent.git
cd react-tailwind-webcomponent
npm install
npm install build

After Build you will get
dist/user-card.iife.js
```
### 1️⃣ Usage
Once built, host the file somewhere (CDN, static hosting, S3, etc.) and import it in any HTML page:
```bash
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Web Component Example</title>
  <script src="https://your-cdn.com/user-card.iife.js"></script>
</head>
<body>
  <user-card
    name="Jane Smith"
    email="jane.smith@example.com"
    phone="+1 (555) 987-6543"
    location="San Francisco, CA"
    title="Product Designer"
    theme="dark"
    avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face">
  </user-card>
</body>
</html>
```
