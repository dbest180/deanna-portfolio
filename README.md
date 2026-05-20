# DBest Massage Therapy Portfolio Website

A modern, responsive portfolio website for a licensed massage therapist, featuring a clean design with dark purple text on a light lilac background.

## 📁 Project Structure

deanna-portfolio
├── index.html # Main HTML file
├── README.md # Project documentation
├── assets/ # Image assets
│ ├── deanna-pic.jpg # Profile picture
│ └── qr-code.jpg # QR code image
├── css/
│ └── style.css # All styling
└── js/
└── script.js # Interactive features


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

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No build process required - this is a static site

3. **Customization**
   - Replace placeholder images in `assets/` folder with your own
   - Update contact information in `index.html`
   - Modify color scheme by editing CSS variables in `css/style.css`

## 🔧 Development

### File Structure
```
deanna-portfolio/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── .gitignore          # Git ignore file
├── assets/             # Image assets
│   ├── deanna-pic.jpg  # Profile picture
│   └── qr.png          # QR code image
├── css/
│   └── style.css       # All styling with CSS variables
└── js/
    └── script.js       # Interactive features
```

### Key Features Implemented

#### Accessibility (WCAG 2.1)
- Semantic HTML structure
- ARIA labels and roles for interactive elements
- Keyboard navigation support
- Focus indicators for all interactive elements
- Screen reader friendly modal dialogs
- Skip link for main content

#### Performance
- Throttled scroll event handlers
- Intersection Observer for animations
- Lazy loading ready for images
- Preconnect hints for external resources
- Minimized reflows and repaints

#### Form Validation
- Client-side validation with error messages
- Date picker with minimum date constraint
- Email format validation
- Phone number format validation
- Loading states during submission
- Toast notifications for feedback

#### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 992px
- Hamburger menu with click-outside closing
- Flexible grid layouts
- Touch-friendly interactive elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --dark-purple: #4A306D;      /* Primary text color */
    --light-lilac: #F5F0FF;      /* Background color */
    --medium-purple: #7B6BA8;    /* Primary accent */
    --accent-purple: #9B8BC6;    /* Secondary accent */
}
```

### Adding New Services
Copy an existing service card in `index.html` and modify:
```html
<div class="service-card">
    <div class="service-icon"><i class="fas fa-your-icon"></i></div>
    <h3>Service Name</h3>
    <p>Description here.</p>
    <span class="duration">60 min</span>
</div>
```

### Updating Social Links
Find the footer section in `index.html` and replace placeholder URLs:
```html
<a href="https://facebook.com/yourpage" aria-label="Facebook">...</a>
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created for Deanna - Licensed Massage Therapist

## 🤝 Contributing

Feel free to submit issues and enhancement requests!