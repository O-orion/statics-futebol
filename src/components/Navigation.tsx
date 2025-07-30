import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BarChart3, Home, Target, Trophy, Menu, X, Icon } from 'lucide-react';
import { cn } from '../lib/utils'
import Button from './ui/Button';

const Navigation = () => {

    const location = useLocation();
    const [ isMobileOpen, setIsMobileOpen ] = useState(false);

    const navItems = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/futebol', label: 'Futebol', icon: Trophy },
        { href: '/basquete', label: 'Basquete', icon: Target },
        { href: '/ranking', label: 'Rankings', icon: BarChart3 },
        
    ]

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md' >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link 
                    to="/"
                    className='flex items-center space-x-3 font-bold text-xl bg-gradient-primary bg-clip-text  text-transparent hover:animate-glow-pulse transition-all'
                    >
                        <div className="w-8 mr-2 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Trophy className='w-5 h-5 text-white' />
                        </div>
                        Stats-Play
                    </Link>


                    {/* Menu Navegação Desktop */}
                    <div className="hidden md:flex items-center space-x-1 ">
                        {
                            navItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link key={item.href} to={item.href} >
                                        <Button
                                        variant={isActive(item.href) ? "sport": "ghost"}
                                        size="sm"
                                        className={
                                            cn(
                                                "flex items-center space-x-2 transition-all duration-300",
                                                isActive(item.href) && "shadow-glow"
                                            )}
                                        >
                                            <Icon className='w-4 -h4' />
                                            <span>{item.label}</span>
                                        </Button>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {
                            isMobileOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />
                        }
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {
                    isMobileOpen && (
                        <div className="md:hidden py-4 border-t border-border animate-slide-up">
                            <div className="flex felx-col space-y-2">
                                {
                                    navItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                            to={item.href}
                                            key={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            >
                                                <Button 
                                                variant={isActive(item.href) ? "sport": "ghost"}
                                                className="w-full justify-start space-x-3"
                                                >
                                                    <Icon className='w-4 h-4' />
                                                    <span>{item.label}</span>
                                                </Button>
                                            </Link>
                                        )

                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )

}

export default Navigation;