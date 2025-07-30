import { Star, Trophy } from "lucide-react";
import Button from "./ui/Button";

const Hero = () => {

    return (
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                <div className="container mx-auto px-4 py-20">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                            STATS-PLAY
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Acompanhe estatísticas, rankings e jogos dos seus esportes favoritos em tempo real
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="sport" size="xl" className="animate-glow-pulse">
                            <Trophy className="w-5 h-5 mr-2" />
                            Explorar Agora
                        </Button>
                        <Button variant="outline" size="xl">
                            <Star className="w-5 h-5 mr-2" />
                            Ver Rankings
                        </Button>
                        </div>
                    </div>
                </div>
            
            </section>
    )

}

export default Hero;