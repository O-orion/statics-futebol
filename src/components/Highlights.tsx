import { Target, TrendingUp, Trophy } from "lucide-react";

const Highlights = () => {

    return (
        <section className="bg-card border-t border-border">
            <div className="container mx-auto py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Destaques Da Rodada</h2>
                    <p className="text-muted-foreground">Os melhores momentos e estatísticas em destaque</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-background border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-victory rounded-full flex items-center justify-center">
                                <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Artilheiros da Rodada</h3>
                                <p className="text-sm text-muted-foreground">Hat-trick impressionante</p>
                            </div>
                        </div>

                        <div className="text-2xl font-bold mb-2">Yuri Alberto</div>
                        <div className="text-sm text-muted-foreground">3 gols em 15 minutos</div>

                    </div>

                    <div className="bg-background border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-court rounded-full flex items-center justify-center">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Triple-Double</h3>
                              <p className="text-sm text-muted-foreground">Performance excepcional</p>
                            </div>
                        </div>

                         <div className="text-2xl font-bold mb-2">Mike Jordan</div>
                         <div className="text-sm text-muted-foreground">28pts, 12reb, 10ast</div>
                    </div>            

                    <div className="bg-background border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Maior Virada</h3>
                                <p className="text-sm text-muted-foreground">Comeback épico</p>
                            </div>
                        </div>

                            <div className="text-2xl font-bold mb-2">3-4</div>
                           <div className="text-sm text-muted-foreground">Time perdendo 0-3</div>
                    </div>   



                </div>

            </div>
        </section>
    )

}

export default Highlights;