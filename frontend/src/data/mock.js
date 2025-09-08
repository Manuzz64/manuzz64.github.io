// Nu-Metal Template System Mock Data
export const templateData = {
  // Color Palette with HEX codes
  colors: {
    primary: {
      slipknotRed: '#ff0006',
      crimsonCore: '#cc0005',
      bloodDark: '#990004'
    },
    secondary: {
      linkinBlue: '#003d7a',
      electricBlue: '#0066cc',
      neonBlue: '#00aaff'
    },
    neutrals: {
      voidBlack: '#000000',
      charcoal: '#1a1a1a',
      steelGray: '#2d2d2d',
      silver: '#c0c0c0',
      platinum: '#e5e5e5'
    },
    gradients: {
      redStorm: 'linear-gradient(135deg, #ff0006 0%, #990004 100%)',
      blueVoid: 'linear-gradient(135deg, #003d7a 0%, #000000 100%)',
      metallic: 'linear-gradient(135deg, #2d2d2d 0%, #c0c0c0 50%, #2d2d2d 100%)',
      neonPulse: 'linear-gradient(135deg, #00aaff 0%, #003d7a 100%)'
    }
  },

  // Typography System
  typography: {
    fonts: {
      heading: 'Orbitron, monospace',
      body: 'Rajdhani, sans-serif'
    },
    scales: {
      h1: 'text-5xl font-black',
      h2: 'text-4xl font-bold', 
      h3: 'text-3xl font-semibold',
      h4: 'text-2xl font-medium',
      body: 'text-base font-normal',
      small: 'text-sm font-light'
    }
  },

  // Component Variants
  components: {
    buttons: [
      {
        name: 'Primary',
        class: 'bg-slipknot-red hover:bg-slipknot-red/80 transform hover:scale-105 transition-all duration-300',
        description: 'Main CTA button with Slipknot red'
      },
      {
        name: 'Secondary',
        class: 'border-linkin-blue text-linkin-blue hover:bg-linkin-blue hover:text-white transform hover:scale-105 transition-all duration-300',
        description: 'Outline button with Linkin Park blue'
      },
      {
        name: 'Ghost',
        class: 'hover:bg-steel-gray transform hover:scale-105 transition-all duration-300',
        description: 'Subtle button for secondary actions'
      },
      {
        name: 'Gradient',
        class: 'bg-gradient-to-r from-slipknot-red to-crimson-core hover:from-crimson-core hover:to-slipknot-red transform hover:scale-105 transition-all duration-300',
        description: 'Eye-catching gradient button'
      }
    ],
    cards: [
      {
        name: 'Standard',
        class: 'bg-steel-gray border-silver/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-slipknot-red/20',
        description: 'Basic card with subtle animations'
      },
      {
        name: 'Gradient',
        class: 'bg-gradient-to-br from-charcoal to-steel-gray border-linkin-blue transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-linkin-blue/20',
        description: 'Enhanced card with gradient background'
      },
      {
        name: 'Accent',
        class: 'bg-charcoal border-slipknot-red transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-slipknot-red/20',
        description: 'High-impact card with red accent'
      }
    ]
  },

  // Animation Classes
  animations: {
    hover: [
      'transform hover:scale-105 transition-all duration-300',
      'hover:shadow-lg hover:shadow-slipknot-red/50 transition-all duration-300',
      'transform hover:rotate-3 transition-all duration-300',
      'hover:bg-gradient-to-r hover:from-slipknot-red hover:to-linkin-blue transition-all duration-500'
    ],
    utility: [
      'animate-pulse',
      'animate-bounce',
      'animate-spin',
      'animate-pulse-slow'
    ]
  },

  // CSS Custom Properties
  cssVariables: {
    '--slipknot-red': '#ff0006',
    '--crimson-core': '#cc0005',
    '--blood-dark': '#990004',
    '--linkin-blue': '#003d7a',
    '--electric-blue': '#0066cc',
    '--neon-blue': '#00aaff',
    '--void-black': '#000000',
    '--charcoal': '#1a1a1a',
    '--steel-gray': '#2d2d2d',
    '--silver': '#c0c0c0',
    '--platinum': '#e5e5e5'
  },

  // Usage Examples
  examples: {
    hero: `
      <div className="bg-gradient-to-br from-black via-charcoal to-black text-silver">
        <h1 className="text-6xl font-black bg-gradient-to-r from-slipknot-red to-linkin-blue bg-clip-text text-transparent">
          NU-METAL
        </h1>
      </div>
    `,
    button: `
      <Button className="bg-slipknot-red hover:bg-slipknot-red/80 transform hover:scale-105 transition-all duration-300">
        Get Started
      </Button>
    `,
    card: `
      <Card className="bg-charcoal border-steel-gray transform hover:scale-105 transition-all duration-300">
        <CardContent>
          <p className="text-silver">Your content here</p>
        </CardContent>
      </Card>
    `
  }
};

export default templateData;