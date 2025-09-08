import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Github, 
  Instagram, 
  Mail, 
  ExternalLink,
  Terminal,
  Code,
  Skull,
  Zap,
  Music,
  Cpu
} from 'lucide-react';

const Mzz64Homepage = () => {
  const [visitorCount, setVisitorCount] = useState(1337);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [glitchText, setGlitchText] = useState('Mzz64');

  // Update time every second for that 2000s web feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Random visitor count changes for that old web feel
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect for name
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = ['M', 'z', 'z', '6', '4'];
      const randomGlitch = glitchChars.map(char => 
        Math.random() > 0.8 ? String.fromCharCode(33 + Math.random() * 94) : char
      ).join('');
      setGlitchText(randomGlitch);
      
      setTimeout(() => setGlitchText('Mzz64'), 100);
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Manuzz64',
      icon: <Github className="h-6 w-6" />,
      description: 'Code Repository',
      color: 'border-silver text-silver hover:bg-silver hover:text-black'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/manu_zz64/',
      icon: <Instagram className="h-6 w-6" />,
      description: 'Photo Feed',
      color: 'border-military-green text-military-green hover:bg-military-green hover:text-black'
    },
    {
      name: 'AUR',
      url: 'https://aur.archlinux.org/account/Mzz64',
      icon: <Terminal className="h-6 w-6" />,
      description: 'Arch User Repository',
      color: 'border-camo-dark text-camo-dark hover:bg-camo-dark hover:text-white'
    },
    {
      name: 'Email',
      url: 'mailto:zz64manu@gmail.com',
      icon: <Mail className="h-6 w-6" />,
      description: 'Direct Contact',
      color: 'border-slipknot-red text-slipknot-red hover:bg-slipknot-red hover:text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-silver font-mono">
      {/* Header Bar - Web 1.0 Style */}
      <div className="bg-charcoal border-b-2 border-slipknot-red p-2">
        <div className="flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <span className="text-military-green">◉ ONLINE</span>
            <span className="text-silver">Last Updated: {currentTime}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slipknot-red">Visitors: {visitorCount.toLocaleString()}</span>
            <span className="text-silver">Since 2000</span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Header Section - Raw and Edgy */}
        <div className="text-center mb-8">
          <div className="border-2 border-slipknot-red bg-charcoal p-6 mb-6 transform -rotate-1">
            <h1 className="text-6xl font-black text-slipknot-red mb-2 font-mono tracking-wider">
              {glitchText}
            </h1>
            <div className="text-xl text-silver mb-4">
              ▲▼▲ Manuel Bouças ▲▼▲
            </div>
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-military-green text-black">Developer</Badge>
              <Badge className="bg-steel-gray text-silver">Linux User</Badge>
              <Badge className="bg-slipknot-red text-white">Nu-Metal</Badge>
            </div>
            
            {/* ASCII Art Style Border */}
            <div className="text-silver text-xs font-mono border border-steel-gray p-2 bg-black">
              ╔════════════════════════════════════════╗<br/>
              ║ &gt; WELCOME TO MZZ64's PERSONAL SPACE &lt; ║<br/>
              ╚════════════════════════════════════════╝
            </div>
          </div>
        </div>

        {/* Social Links Grid - Geocities Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <div key={link.name} className="relative">
              {/* Random decorative elements */}
              <div className="absolute -top-2 -left-2 text-slipknot-red text-xl">★</div>
              <div className="absolute -bottom-2 -right-2 text-military-green text-xl">●</div>
              
              <Card className={`bg-steel-gray border-2 ${link.color.split(' ')[0]} ${link.color.split(' ')[1]} transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <div>
                      <CardTitle className="text-lg font-black">{link.name}</CardTitle>
                      <p className="text-xs text-silver/70">{link.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 border-2 ${link.color} transition-all duration-300 text-sm font-bold`}
                  >
                    VISIT PAGE <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* About Section - Table Layout Web 1.0 Style */}
        <div className="border-2 border-military-green bg-charcoal p-6 mb-8">
          <h2 className="text-3xl font-black text-military-green mb-4 text-center">
            &lt;ABOUT_USER&gt;
          </h2>
          
          <table className="w-full border border-steel-gray text-sm">
            <tbody>
              <tr className="border-b border-steel-gray">
                <td className="border-r border-steel-gray p-3 bg-black font-bold text-slipknot-red">HANDLE:</td>
                <td className="p-3">Mzz64</td>
              </tr>
              <tr className="border-b border-steel-gray">
                <td className="border-r border-steel-gray p-3 bg-black font-bold text-slipknot-red">REAL_NAME:</td>
                <td className="p-3">Manuel Bouças</td>
              </tr>
              <tr className="border-b border-steel-gray">
                <td className="border-r border-steel-gray p-3 bg-black font-bold text-slipknot-red">CONTACT:</td>
                <td className="p-3">zz64manu@gmail.com</td>
              </tr>
              <tr className="border-b border-steel-gray">
                <td className="border-r border-steel-gray p-3 bg-black font-bold text-slipknot-red">LOCATION:</td>
                <td className="p-3">~/home/mzz64/</td>
              </tr>
              <tr>
                <td className="border-r border-steel-gray p-3 bg-black font-bold text-slipknot-red">STATUS:</td>
                <td className="p-3 text-military-green font-bold">CODING...</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Skills/Tech Section - Raw List Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-slipknot-red p-4 bg-black">
            <h3 className="text-xl font-black text-slipknot-red mb-3 flex items-center gap-2">
              <Code className="h-5 w-5" /> TECH_STACK
            </h3>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2"><span className="text-military-green">▶</span> Linux/Arch</li>
              <li className="flex items-center gap-2"><span className="text-military-green">▶</span> Terminal/Bash</li>
              <li className="flex items-center gap-2"><span className="text-military-green">▶</span> Git Version Control</li>
              <li className="flex items-center gap-2"><span className="text-military-green">▶</span> Open Source</li>
              <li className="flex items-center gap-2"><span className="text-military-green">▶</span> Package Management</li>
            </ul>
          </div>
          
          <div className="border border-military-green p-4 bg-black">
            <h3 className="text-xl font-black text-military-green mb-3 flex items-center gap-2">
              <Music className="h-5 w-5" /> CURRENT_MOOD
            </h3>
            <div className="text-sm">
              <div className="mb-2">♪ Now Playing:</div>
              <div className="text-slipknot-red font-bold mb-2">Nu-Metal Mix 2000s</div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-slipknot-red animate-pulse"></div>
                <div className="w-2 h-2 bg-military-green animate-pulse"></div>
                <div className="w-2 h-2 bg-slipknot-red animate-pulse"></div>
                <span className="ml-2 text-xs">VOLUME: MAX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Web 1.0 Credits */}
        <div className="border-t-2 border-steel-gray pt-6 text-center">
          <div className="text-xs text-silver/70 mb-4">
            <div className="mb-2">
              ★ Best viewed in 1024x768 resolution ★
            </div>
            <div className="mb-2">
              Made with ❤️ and ☕ in the terminal
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <span>HTML/CSS</span>
              <span>•</span>
              <span>React.js</span>
              <span>•</span>
              <span>Powered by Coffee</span>
            </div>
          </div>
          
          <div className="text-military-green text-xs font-mono">
            [END OF TRANSMISSION]
          </div>
        </div>
      </div>

      {/* Floating Elements for that 2000s feel */}
      <div className="fixed top-20 left-4 text-slipknot-red text-2xl animate-bounce opacity-50">★</div>
      <div className="fixed top-40 right-8 text-military-green text-xl animate-pulse opacity-30">●</div>
      <div className="fixed bottom-20 left-8 text-silver text-lg animate-spin opacity-20">▲</div>
    </div>
  );
};

export default Mzz64Homepage;