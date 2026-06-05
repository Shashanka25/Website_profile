# 🌌 Shashanka Biswas — Personal Profile Website

A premium, highly interactive, and visually stunning personal portfolio website built with modern web technologies. This website features a cutting-edge **Glassmorphism design**, responsive structure, and fluid micro-animations that work seamlessly across all screen sizes.

---

## ✨ Features

- **🎨 Modern Glassmorphism UI**: Built with rich aesthetic colors, beautiful dark-mode backdrop filters (`backdrop-filter: blur()`), glowing gradients, and HSL-tailored colors.
- **📱 Fully Responsive**: Custom mobile-first responsive design featuring an animated navigation drawer for smaller screens.
- **✨ Micro-Animations & Scroll Effects**:
  - **Morphed Hero Image**: A dynamic, organic morphing bubble shape for the profile picture.
  - **Typewriter Effect**: Engaging, continuous typing animation in the hero section using Typed.js.
  - **3D Card Tilts**: Premium interactive 3D tilt effects on skill and project cards powered by Vanilla-tilt.js.
  - **Custom Cursor**: A smooth, stylized custom mouse cursor that follows user movements.
  - **Intersection Observer Animations**: Elements smoothly slide and fade into view as you scroll down the page.
  - **Interactive Modals**: Clean, glassmorphic pop-up modals for displaying project details.
  - **Hover Micro-interactions**: Smooth transitions and lifts on active cards and links.
- **📞 Integrated Contact Panel**: Quick-access interactive buttons linking directly to Phone, Email, LinkedIn, and GitHub profiles.

---

## 🛠️ Tech Stack

- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS3 (CSS Variables, Flexbox/Grid, Keyframe Animations, Backdrop-filter, Responsive Media Queries)
- **Logic**: Vanilla ES6+ JavaScript (Intersection Observer API, Mobile Toggle Listeners, Custom Cursor Logic)
- **Libraries**: Typed.js (Typing animation), Vanilla-tilt.js (3D card tilt), ScrollReveal.js (Scroll animations)

---

## 🚀 Live Preview & Running Locally

### Prerequisites
You need [Node.js](https://nodejs.org/) installed to run a local dev server easily.

### Steps to Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shashanka25/Website_profile.git
   cd Website_profile
   ```

2. **Serve the website**:
   Run a simple static file server locally:
   ```bash
   npx serve
   ```

3. **Open the browser**:
   Navigate to the local URL provided by the server:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
Website_profile/
├── index.html        # Main HTML content & SEO optimized metadata
├── styles.css        # Premium Glassmorphic design variables & responsive styles
├── script.js         # Mobile drawer toggle & scroll-reveal animation logic
├── profile.jpg       # Profile picture (optimized web format)
└── README.md         # Documentation & guide
```

---

## 🧑‍💻 Customization

You can easily modify this template to make it your own:
1. **Details**: Open `index.html` and change the text in the `<h1 class="name">` and `<h2 class="title">` tags.
2. **About Bio**: Update the text inside `<p class="introduction">` to represent your background.
3. **Contact Links**: Change the `href` values inside the `<div class="contact-info">` section to match your own email, phone number, and social links.
4. **Skills**: Modify the cards inside `<div class="skills-grid">` to showcase your unique capabilities.

---

*Built with ❤️ and modern front-end best practices.*
