# Kgorogang Thatching Services Website

![Kgorogang Thatching Services](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=400&fit=crop)

## 🏠 About

A professional, mobile-first static website for **Kgorogang Thatching Services** - Expert thatchers specializing in lodges, lapas, and premium properties across South Africa.

**Owner:** Piet Seboga - Expert Thatcher & Lodge Specialist  
**Phone/WhatsApp:** [072 480 1332](tel:+27724801332)  
**Location:** Limpopo, South Africa (Mobile service to all provinces)

---

## ✨ Features

### 🎨 Design
- **Premium, trustworthy design** with earthy color palette (dark green, brown, beige, gold)
- **Mobile-first responsive** design that works perfectly on all devices
- **Smooth animations** and hover effects for engaging user experience
- **South African flag accents** for local identity

### 📱 Pages
1. **Home** (`index.html`) - Hero section, services overview, why choose us, portfolio preview
2. **Services** (`services.html`) - Detailed service descriptions with images and CTAs
3. **Portfolio** (`portfolio.html`) - Filterable gallery of completed projects with testimonials
4. **About** (`about.html`) - Company story, values, expertise, and reasons to choose
5. **Contact** (`contact.html`) - Contact form, direct contact methods, service areas

### 🚀 Functionality
- **Floating WhatsApp button** (bottom right) for instant contact
- **Mobile navigation** with hamburger menu
- **Portfolio filter** system (All, Lodges, Lapas, Residential, Repairs)
- **Contact form** ready for Formspree integration
- **Smooth scroll** and fade-in animations
- **SEO optimized** with meta tags and LocalBusiness schema
- **Fast loading** - no frameworks, pure HTML/CSS/JS

---

## 📁 Project Structure

```
kgorogang-thatching-services/
├── index.html              # Homepage
├── services.html           # Services page
├── portfolio.html          # Portfolio gallery page
├── about.html             # About us page
├── contact.html           # Contact page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # (Placeholder - using Unsplash URLs)
├── README.md              # This file
└── .gitignore            # Git ignore file
```

---

## 🛠️ Setup & Deployment

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. That's it! No build process needed.

### For Live Hosting

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/kgorogang-thatching-services`

#### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire folder
3. Your site goes live instantly with a free SSL certificate

#### Option 3: Traditional Web Hosting
1. Upload all files via FTP to your web hosting
2. Ensure `index.html` is in the root directory
3. Access your domain to view the site

---

## 📝 Customization Guide

### 1. Update Contact Form

The contact form uses Formspree (free service). To activate:

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form endpoint
4. In `contact.html`, find this line:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### 2. Replace Placeholder Images

Currently using Unsplash placeholder images. To use real images:

1. Create an `assets/images/` folder
2. Add your images (JPG/PNG, optimized for web)
3. Update image URLs in HTML files:
   ```html
   <!-- From: -->
   <img src="https://images.unsplash.com/photo-..." alt="...">
   
   <!-- To: -->
   <img src="assets/images/your-image.jpg" alt="...">
   ```

### 3. Change Colors

All colors are defined in CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-green: #2d5016;     /* Main green color */
    --primary-brown: #5c3d2e;     /* Main brown color */
    --accent-gold: #c9a961;       /* Gold accent */
    --accent-beige: #e8dcc4;      /* Beige accent */
    /* ... etc */
}
```

Change these values to customize the entire color scheme.

### 4. Update Content

All text content is directly in the HTML files. Open any page and edit:
- Headings: `<h1>`, `<h2>`, `<h3>`
- Paragraphs: `<p>`
- Lists: `<ul>` and `<li>`

### 5. Add Google Analytics (Optional)

Add before the closing `</head>` tag in each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

---

## 📱 Features Breakdown

### Navigation
- Sticky header that stays visible while scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth transitions

### Hero Section
- Full-screen hero with background image
- Overlay effect for text readability
- South African flag accent
- Clear call-to-action buttons

### Services
- Icon-based service cards
- Hover animations
- Detailed service pages with images
- Feature lists with checkmarks
- Multiple CTAs throughout

### Portfolio
- Filterable gallery (All, Lodges, Lapas, Residential, Repairs)
- Project cards with overlays
- Location and date metadata
- Testimonials section

### Contact
- Multi-method contact (Phone, WhatsApp, Form)
- Province coverage display
- Form validation
- Success/error messaging

### WhatsApp Integration
- Floating button (always visible)
- Pulse animation to draw attention
- Direct link to WhatsApp chat
- Multiple WhatsApp CTAs throughout site

---

## 🎯 SEO & Performance

### SEO Features
- ✅ Semantic HTML5 markup
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ LocalBusiness schema markup
- ✅ Descriptive alt tags on images
- ✅ Clean URL structure
- ✅ Mobile-friendly design
- ✅ Fast loading speed

### Performance
- No external frameworks (pure HTML/CSS/JS)
- Optimized CSS with minimal specificity
- Compressed images (when using real images, optimize to <200KB each)
- Minimal JavaScript
- Browser caching enabled
- Lazy loading for images (built-in)

---

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (mostly works, some modern CSS features degraded)

---

## 📞 Contact Information

**Kgorogang Thatching Services**  
Expert Thatcher & Lodge Specialist

📱 **Phone/WhatsApp:** 072 480 1332  
📍 **Location:** Limpopo, South Africa  
🚗 **Service Area:** All South African Provinces  
👤 **Owner:** Piet Seboga

---

## 📄 License

This website design and code is proprietary to Kgorogang Thatching Services.

---

## 🙏 Credits

- **Design & Development:** Custom static website
- **Placeholder Images:** [Unsplash](https://unsplash.com)
- **Icons:** Emoji (universal support)
- **Fonts:** System fonts for fast loading

---

## 🚀 Quick Start Checklist

- [ ] Replace `YOUR_FORM_ID` in contact form with actual Formspree ID
- [ ] Replace placeholder images with real project photos
- [ ] Update any placeholder text if needed
- [ ] Test contact form functionality
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Upload to web hosting or GitHub Pages
- [ ] Set up custom domain (optional)
- [ ] Submit sitemap to Google Search Console

---

## 💡 Tips for Success

1. **Professional Photos:** Invest in good quality photos of your work
2. **Regular Updates:** Add new projects to portfolio regularly
3. **Fast Response:** Reply quickly to WhatsApp and form inquiries
4. **Social Proof:** Add more testimonials as you complete projects
5. **Local SEO:** Create Google Business Profile and link to website
6. **Social Media:** Share website on Facebook, Instagram for more visibility

---

**Built with care for Kgorogang Thatching Services** 🏡

*Proven Grass Roofing Excellence | Lodges • Lapas • Homes Across Provinces*
