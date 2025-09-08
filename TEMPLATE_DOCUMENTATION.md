# Nu-Metal Template System Documentation

## 🎸 Overview
A comprehensive template system inspired by nu-metal aesthetics, featuring Slipknot red, Linkin Park blues, and industrial design elements with subtle animations.

## 🎨 Color Palette

### Primary Colors (Slipknot-inspired Red Palette)
```css
--slipknot-red: #ff0006;      /* Main primary color */
--crimson-core: #cc0005;      /* Darker primary variant */
--blood-dark: #990004;        /* Darkest primary variant */
```

### Secondary Colors (Military Camouflage Green Palette)
```css
--camo-dark: #2d4a2b;         /* Dark camouflage green */
--military-green: #4a6741;    /* Medium military green */
--forest-green: #6b8e5a;      /* Light forest green */
```

### Neutral Colors (Industrial Grayscale)
```css
--void-black: #000000;        /* Pure black */
--charcoal: #1a1a1a;          /* Dark background */
--steel-gray: #2d2d2d;        /* Medium background */
--silver: #c0c0c0;            /* Light text */
--platinum: #e5e5e5;          /* Lightest text */
```

### Gradient Presets
```css
/* Red Storm Gradient */
background: linear-gradient(135deg, #ff0006 0%, #990004 100%);

/* Camo Void Gradient */
background: linear-gradient(135deg, #2d4a2b 0%, #000000 100%);

/* Metallic Gradient */
background: linear-gradient(135deg, #2d2d2d 0%, #c0c0c0 50%, #2d2d2d 100%);

/* Military Fade Gradient */
background: linear-gradient(135deg, #6b8e5a 0%, #2d4a2b 100%);
```

## 📝 Typography System

### Font Families
```css
/* Headings - Industrial/Nu-metal aesthetic */
font-family: 'Orbitron', monospace;

/* Body Text - Clean, readable */
font-family: 'Rajdhani', sans-serif;
```

### Font Scale Classes
```css
.text-5xl.font-black     /* Heading 1 - Main titles */
.text-4xl.font-bold      /* Heading 2 - Section titles */
.text-3xl.font-semibold  /* Heading 3 - Subsections */
.text-2xl.font-medium    /* Heading 4 - Minor headings */
.text-base.font-normal   /* Body text */
.text-sm.font-light      /* Small text, captions */
```

## 🧩 Component Library

### Button Variants

#### Primary Button
```jsx
<Button className="bg-slipknot-red hover:bg-slipknot-red/80 transform hover:scale-105 transition-all duration-300">
  Primary Action
</Button>
```

#### Secondary Button
```jsx
<Button 
  variant="outline" 
  className="border-military-green text-military-green hover:bg-military-green hover:text-white transform hover:scale-105 transition-all duration-300"
>
  Secondary Action
</Button>
```

#### Ghost Button
```jsx
<Button 
  variant="ghost" 
  className="hover:bg-steel-gray transform hover:scale-105 transition-all duration-300"
>
  Subtle Action
</Button>
```

#### Gradient Button
```jsx
<Button className="bg-gradient-to-r from-slipknot-red to-camo-dark hover:from-camo-dark hover:to-slipknot-red transform hover:scale-105 transition-all duration-300">
  Premium Action
</Button>
```

### Card Components

#### Standard Card
```jsx
<Card className="bg-steel-gray border-silver/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-slipknot-red/20">
  <CardHeader>
    <CardTitle className="text-silver">Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-silver/70">Card content</p>
  </CardContent>
</Card>
```

#### Gradient Card
```jsx
<Card className="bg-gradient-to-br from-charcoal to-steel-gray border-linkin-blue transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-linkin-blue/20">
  {/* Content */}
</Card>
```

#### Accent Card
```jsx
<Card className="bg-charcoal border-slipknot-red transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-slipknot-red/20">
  {/* Content */}
</Card>
```

### Form Elements

#### Input Fields
```jsx
<Input 
  className="bg-steel-gray border-silver/30 text-silver focus:border-slipknot-red transition-colors duration-300"
  placeholder="Enter text..."
/>
```

#### Labels
```jsx
<Label className="text-silver">Field Label</Label>
```

#### Progress Bar
```jsx
<Progress value={75} className="bg-steel-gray" />
```

### Badges
```jsx
<Badge className="bg-slipknot-red">Primary</Badge>
<Badge variant="outline" className="border-linkin-blue text-linkin-blue">Secondary</Badge>
<Badge variant="secondary" className="bg-steel-gray">Neutral</Badge>
```

## ✨ Animation Classes

### Hover Effects
```css
/* Scale up on hover */
.transform.hover:scale-105.transition-all.duration-300

/* Glow effect */
.hover:shadow-lg.hover:shadow-slipknot-red/50.transition-all.duration-300

/* Rotate on hover */
.transform.hover:rotate-3.transition-all.duration-300

/* Gradient transition */
.hover:bg-gradient-to-r.hover:from-slipknot-red.hover:to-linkin-blue.transition-all.duration-500
```

### Utility Animations
```css
.animate-pulse         /* Subtle pulsing */
.animate-bounce        /* Bouncing effect */
.animate-spin          /* Rotation */
.animate-pulse-slow    /* Slower pulse (3s) */
```

### Custom Animations
```css
/* Metallic pulse effect */
@keyframes metallic-pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 0, 6, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(255, 0, 6, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 0, 6, 0); }
}

.metallic-pulse {
  animation: metallic-pulse 2s infinite;
}
```

## 🎯 Usage Examples

### Hero Section
```jsx
<div className="bg-gradient-to-br from-black via-charcoal to-black text-silver">
  <div className="container mx-auto px-6 py-20">
    <h1 className="text-6xl font-black bg-gradient-to-r from-slipknot-red to-linkin-blue bg-clip-text text-transparent animate-pulse-slow">
      NU-METAL
    </h1>
    <p className="text-xl text-silver/70 max-w-2xl mx-auto mb-12">
      Your content description here
    </p>
    <Button className="bg-slipknot-red hover:bg-slipknot-red/80 transform hover:scale-105 transition-all duration-300">
      Get Started
    </Button>
  </div>
</div>
```

### Navigation Layout
```jsx
<nav className="bg-charcoal border-b border-steel-gray">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-slipknot-red font-black text-xl">LOGO</div>
      <div className="space-x-6">
        <a className="text-silver hover:text-slipknot-red transition-colors duration-300">Home</a>
        <a className="text-silver hover:text-linkin-blue transition-colors duration-300">About</a>
      </div>
    </div>
  </div>
</nav>
```

### Content Section
```jsx
<section className="bg-charcoal py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-linkin-blue mb-8 text-center">Section Title</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Use card components here */}
    </div>
  </div>
</section>
```

## 🎨 Custom CSS Properties

Add these to your CSS file for easy theme customization:

```css
:root {
  /* Primary Colors */
  --slipknot-red: #ff0006;
  --crimson-core: #cc0005;
  --blood-dark: #990004;
  
  /* Secondary Colors */
  --linkin-blue: #003d7a;
  --electric-blue: #0066cc;
  --neon-blue: #00aaff;
  
  /* Neutral Colors */
  --void-black: #000000;
  --charcoal: #1a1a1a;
  --steel-gray: #2d2d2d;
  --silver: #c0c0c0;
  --platinum: #e5e5e5;
}
```

## 📱 Responsive Design

The template is fully responsive with mobile-first approach:

```css
/* Mobile default styles */
.container { padding: 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
  .md:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md:text-4xl { font-size: 2.25rem; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .lg:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg:text-6xl { font-size: 4rem; }
}
```

## 🚀 Getting Started

1. **Copy the color palette** from the Tailwind config
2. **Import the fonts** in your CSS:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
   ```
3. **Use the component classes** as shown in the examples
4. **Customize animations** based on your needs

## 🎸 Brand Guidelines

- **Primary Action**: Always use Slipknot red (#ff0006)
- **Secondary Action**: Use Linkin Park blue variants
- **Text Hierarchy**: Dark backgrounds with light text
- **Animations**: Subtle but engaging, never overwhelming
- **Spacing**: Generous whitespace for premium feel
- **Contrast**: Ensure accessibility with high contrast ratios

---

*Built with React, Tailwind CSS, and shadcn/ui components*
*Inspired by nu-metal aesthetics and industrial design*