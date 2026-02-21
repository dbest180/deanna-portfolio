# DBest Massage Therapy Portfolio Website

A modern, responsive portfolio website for a licensed massage therapist, featuring a clean design with dark purple text on a light lilac background.

## 📁 Project Structure
```
portfolio/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
├── assets/                    # Image assets
│   ├── deanna-pic.jpg        # Profile picture
│   └── qr-code.jpg           # QR code image
├── css/
│   └── style.css             # All styling
└── js/
    └── script.js             # Interactive features
```

## 🎨 Design Features

### Color Scheme
- **Primary Text**: Dark Purple (`#4A306D`)
- **Background**: Very Light Lilac (`#F5F0FF`)
- **Accent Colors**: Medium Purple (`#7B6BA8`), Accent Purple (`#9B8BC6`)
- **White**: (`#FFFFFF`)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Poppins (Sans-serif)
- **Font Awesome Icons** for visual elements

## ✨ Key Features

### 1. **Responsive Layout**
- Fully responsive design for all devices
- Mobile-friendly navigation with hamburger menu
- Flexbox and CSS Grid for modern layouts
- Breakpoints for tablet and mobile optimization

### 2. **Visual Elements**
- Circular profile photo with matching QR code border
- Interactive service cards with hover effects
- Animated sections on scroll
- Gradient backgrounds and subtle shadows
- Consistent border theme throughout

### 3. **Interactive Components**
- Smooth scrolling navigation
- Booking modal with form simulation
- Mobile menu toggle
- Hover animations on cards and buttons
- Active state navigation highlighting

### 4. **Content Sections**
- **Header**: Profile image, name, title, and QR code
- **About**: Professional bio with certifications grid
- **Services**: Four massage therapy services with descriptions
- **Approach**: Client-centered methodology
- **Contact**: Contact information and booking preview
- **Footer**: Social links and copyright

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Variables for theme consistency
  - Flexbox & Grid for layouts
  - CSS Transitions & Animations
  - Media Queries for responsiveness
- **Vanilla JavaScript**:
  - DOM manipulation
  - Event handling
  - Intersection Observer API for scroll animations
  - Modal functionality

## 📱 Mobile Optimization

### QR Code Alignment
- QR code centered above profile on mobile
- Consistent sizing and spacing
- "Scan to save contact" label with proper typography

### Certifications Section
- Grid layout adapts to single column on mobile
- Interactive certification cards with hover states
- Clear visual hierarchy with icons and descriptions
- Proper spacing between certification items

## 🚀 Installation & Setup

1. **Clone or Download**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Replace Images**
   - Place your profile picture in `assets/deanna-pic.jpg`
   - Place your QR code in `assets/qr-code.jpg`
   - Recommended dimensions: 400x400px for both images

3. **Customize Content**
   - Update contact information in `index.html`
   - Modify services and descriptions
   - Add actual certification links
   - Update social media links

4. **Deploy to GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Select main branch as source

## 🔧 Customization

### Update Colors
Modify CSS variables in `style.css`:
```css
:root {
    --dark-purple: #4A306D;
    --light-lilac: #F5F0FF;
    --medium-purple: #7B6BA8;
    --accent-purple: #9B8BC6;
}
```

### Add New Services
Add service cards in the services section:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Name</h3>
    <p>Service description goes here.</p>
    <span class="duration">60 min</span>
</div>
```

### Update Certifications
Modify the certifications grid in the About section with actual links and details.

## 📝 Future Enhancements

1. **Contact Form** 
   - Add a working contact form with Formspree or Netlify Forms
2. **Online Booking System**
   - Integrate with booking platforms like Calendly or Acuity
3. **Testimonials Section**
   - Add client reviews and ratings
4. **Blog/Articles**
   - Add wellness tips and massage therapy insights
5. **Gallery**
   - Add photos of the studio or treatment rooms
6. **Pricing Table**
   - Clear pricing for different services
7. **FAQ Section**
   - Common questions about massage therapy

## 📄 License

This project is open source and available for personal and commercial use. Please credit appropriately if used.

## 👤 Author

**DBest Tech**  
- Portfolio: To Be Added
- GitHub: [@dbest180](https://github.com/dbest180)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices
- All massage therapy clients and colleagues

---

*Last Updated: February 21st, 2026*
