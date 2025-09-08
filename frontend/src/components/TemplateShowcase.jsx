import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Switch } from './ui/switch';
import { 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Download, 
  Copy,
  Palette,
  Code2,
  Zap,
  Layers
} from 'lucide-react';

const TemplateShowcase = () => {
  const [activeDemo, setActiveDemo] = useState('colors');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Nu-Metal Color Palette with Camo Greens
  const colorPalette = {
    primary: {
      slipknotRed: '#ff0006',
      crimsonCore: '#cc0005',
      bloodDark: '#990004'
    },
    secondary: {
      camoDark: '#2d4a2b',
      militaryGreen: '#4a6741',
      forestGreen: '#6b8e5a'
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
      camoVoid: 'linear-gradient(135deg, #2d4a2b 0%, #000000 100%)',
      metallic: 'linear-gradient(135deg, #2d2d2d 0%, #c0c0c0 50%, #2d2d2d 100%)',
      militaryFade: 'linear-gradient(135deg, #6b8e5a 0%, #2d4a2b 100%)'
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal to-black text-silver">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slipknot-red/10 to-transparent"></div>
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-slipknot-red to-military-green bg-clip-text text-transparent animate-pulse-slow">
                NU-METAL
              </h1>
              <div className="text-2xl font-light tracking-widest text-silver/80 mb-8">
                RETROFIT TEMPLATE SYSTEM
              </div>
            </div>
            
            <p className="text-xl text-silver/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              A comprehensive template system inspired by nu-metal aesthetics, featuring Slipknot red, 
              military camouflage greens, and industrial design elements with subtle animations.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slipknot-red hover:bg-slipknot-red/80 transform hover:scale-105 transition-all duration-300"
                onClick={() => setActiveDemo('components')}
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Components
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-military-green text-military-green hover:bg-military-green hover:text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => setActiveDemo('colors')}
              >
                <Palette className="mr-2 h-5 w-5" />
                View Palette
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-charcoal border-steel-gray">
            <TabsTrigger value="colors" className="data-[state=active]:bg-slipknot-red">
              <Palette className="h-4 w-4 mr-2" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="components" className="data-[state=active]:bg-slipknot-red">
              <Layers className="h-4 w-4 mr-2" />
              Components
            </TabsTrigger>
            <TabsTrigger value="typography" className="data-[state=active]:bg-slipknot-red">
              <Code2 className="h-4 w-4 mr-2" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="animations" className="data-[state=active]:bg-slipknot-red">
              <Zap className="h-4 w-4 mr-2" />
              Animations
            </TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="mt-8">
            <div className="grid gap-8">
              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-slipknot-red">Primary Colors</CardTitle>
                  <CardDescription>Slipknot-inspired red palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(colorPalette.primary).map(([name, color]) => (
                      <div key={name} className="group cursor-pointer" onClick={() => copyToClipboard(color)}>
                        <div 
                          className="h-24 rounded-lg mb-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-center">
                          <p className="font-medium text-silver capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="text-sm text-silver/70 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-military-green">Secondary Colors</CardTitle>
                  <CardDescription>Military camouflage green palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(colorPalette.secondary).map(([name, color]) => (
                      <div key={name} className="group cursor-pointer" onClick={() => copyToClipboard(color)}>
                        <div 
                          className="h-24 rounded-lg mb-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-center">
                          <p className="font-medium text-silver capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="text-sm text-silver/70 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-silver">Neutral Colors</CardTitle>
                  <CardDescription>Industrial grayscale palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(colorPalette.neutrals).map(([name, color]) => (
                      <div key={name} className="group cursor-pointer" onClick={() => copyToClipboard(color)}>
                        <div 
                          className="h-20 rounded-lg mb-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg border border-steel-gray"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-center">
                          <p className="font-medium text-silver text-sm capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="text-xs text-silver/70 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-forest-green">Gradient Presets</CardTitle>
                  <CardDescription>Ready-to-use gradient combinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(colorPalette.gradients).map(([name, gradient]) => (
                      <div key={name} className="group cursor-pointer" onClick={() => copyToClipboard(gradient)}>
                        <div 
                          className="h-32 rounded-lg mb-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg"
                          style={{ background: gradient }}
                        ></div>
                        <div className="text-center">
                          <p className="font-medium text-silver capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="text-xs text-silver/70 font-mono truncate">{gradient}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="mt-8">
            <div className="grid gap-8">
              {/* Buttons Section */}
              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-slipknot-red">Button Variants</CardTitle>
                  <CardDescription>All available button styles with hover effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button className="bg-slipknot-red hover:bg-slipknot-red/80 transform hover:scale-105 transition-all duration-300">
                      Primary
                    </Button>
                    <Button variant="outline" className="border-military-green text-military-green hover:bg-military-green hover:text-white transform hover:scale-105 transition-all duration-300">
                      Secondary
                    </Button>
                    <Button variant="ghost" className="hover:bg-steel-gray transform hover:scale-105 transition-all duration-300">
                      Ghost
                    </Button>
                    <Button className="bg-gradient-to-r from-slipknot-red to-camo-dark hover:from-camo-dark hover:to-slipknot-red transform hover:scale-105 transition-all duration-300">
                      Gradient
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cards Section */}
              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-military-green">Card Layouts</CardTitle>
                  <CardDescription>Different card styles for content display</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-steel-gray border-silver/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-slipknot-red/20">
                      <CardHeader>
                        <CardTitle className="text-silver">Standard Card</CardTitle>
                        <CardDescription>Basic card layout</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-silver/70">Clean, minimal design with subtle hover effects.</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-charcoal to-steel-gray border-military-green transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-military-green/20">
                      <CardHeader>
                        <CardTitle className="text-military-green">Gradient Card</CardTitle>
                        <CardDescription>Enhanced with gradients</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-silver/70">Sophisticated gradient backgrounds for premium feel.</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-charcoal border-slipknot-red transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-slipknot-red/20">
                      <CardHeader>
                        <CardTitle className="text-slipknot-red">Accent Card</CardTitle>
                        <CardDescription>High-impact design</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-silver/70">Bold accents for important content and CTAs.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Form Elements */}
              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-forest-green">Form Elements</CardTitle>
                  <CardDescription>Input fields, switches, and controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email" className="text-silver">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="user@example.com"
                          className="bg-steel-gray border-silver/30 text-silver focus:border-slipknot-red transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="password" className="text-silver">Password</Label>
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="••••••••"
                          className="bg-steel-gray border-silver/30 text-silver focus:border-military-green transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="notifications" />
                        <Label htmlFor="notifications" className="text-silver">Enable notifications</Label>
                      </div>
                      <div>
                        <Label className="text-silver mb-2 block">Progress Example</Label>
                        <Progress value={75} className="bg-steel-gray" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-slipknot-red">Primary</Badge>
                        <Badge variant="outline" className="border-military-green text-military-green">Secondary</Badge>
                        <Badge variant="secondary" className="bg-steel-gray">Neutral</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="mt-8">
            <Card className="bg-charcoal border-steel-gray">
              <CardHeader>
                <CardTitle className="text-slipknot-red">Typography System</CardTitle>
                <CardDescription>Font hierarchy and text styles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl font-black text-silver mb-2">Heading 1</h1>
                    <p className="text-silver/70 font-mono text-sm">text-5xl font-black</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-military-green mb-2">Heading 2</h2>
                    <p className="text-silver/70 font-mono text-sm">text-4xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-silver mb-2">Heading 3</h3>
                    <p className="text-silver/70 font-mono text-sm">text-3xl font-semibold</p>
                  </div>
                  <div>
                    <p className="text-xl text-silver/90 mb-2">Large body text for introductions and important content.</p>
                    <p className="text-silver/70 font-mono text-sm">text-xl text-silver/90</p>
                  </div>
                  <div>
                    <p className="text-base text-silver/80 mb-2">Regular body text for general content and descriptions.</p>
                    <p className="text-silver/70 font-mono text-sm">text-base text-silver/80</p>
                  </div>
                  <div>
                    <p className="text-sm text-silver/70 mb-2">Small text for captions, metadata, and secondary information.</p>
                    <p className="text-silver/70 font-mono text-sm">text-sm text-silver/70</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Animations Tab */}
          <TabsContent value="animations" className="mt-8">
            <div className="grid gap-8">
              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-forest-green">Animation Classes</CardTitle>
                  <CardDescription>CSS animation utilities and examples</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slipknot-red rounded-lg mx-auto mb-4 animate-pulse"></div>
                      <p className="text-silver font-medium">Pulse</p>
                      <p className="text-silver/70 text-sm font-mono">animate-pulse</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-military-green rounded-lg mx-auto mb-4 animate-bounce"></div>
                      <p className="text-silver font-medium">Bounce</p>
                      <p className="text-silver/70 text-sm font-mono">animate-bounce</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-slipknot-red to-military-green rounded-lg mx-auto mb-4 animate-spin"></div>
                      <p className="text-silver font-medium">Spin</p>
                      <p className="text-silver/70 text-sm font-mono">animate-spin</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-charcoal border-steel-gray">
                <CardHeader>
                  <CardTitle className="text-slipknot-red">Hover Effects</CardTitle>
                  <CardDescription>Interactive hover animations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Button className="w-full bg-steel-gray hover:bg-slipknot-red transform hover:scale-105 transition-all duration-300">
                        Scale on Hover
                      </Button>
                      <Button className="w-full bg-steel-gray hover:bg-military-green hover:shadow-lg hover:shadow-military-green/50 transition-all duration-300">
                        Glow Effect
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-steel-gray rounded-lg transform hover:rotate-3 transition-all duration-300 cursor-pointer">
                        <p className="text-silver">Rotate on Hover</p>
                      </div>
                      <div className="p-4 bg-steel-gray rounded-lg hover:bg-gradient-to-r hover:from-slipknot-red hover:to-military-green transition-all duration-500 cursor-pointer">
                        <p className="text-silver">Gradient Transition</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-void-black border-t border-steel-gray py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-silver/70 mb-4">Nu-Metal Template System</p>
          <p className="text-silver/50 text-sm">
            Built with React, Tailwind CSS, and shadcn/ui components
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateShowcase;