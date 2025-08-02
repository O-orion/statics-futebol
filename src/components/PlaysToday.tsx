import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Clock, Swords, Trophy } from "lucide-react";
import PlayCard from "./ui/PlayCard";
import { cn } from "@/lib/utils";

const PlaysToday = () => {

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-10" >
                <div className="flex items-center gap-3 mb-10" >
                    <div className={cn("p-3 rounded-lg", 'bg-gradient-court')}>
                        <Swords className="h-6 w-7 text-white"  />
                    </div>
                    <h3 className="text-4xl font-bold text-card-foreground" >Jogos de Hoje</h3>
                </div>
                <Tabs
                    defaultValue="Brasileirao"
                    className="space-y-6 "
                >
                    <TabsList className="grid w-full grid-cols-4" >
                        <TabsTrigger value="Brasileirao" >Brasileirão 2025</TabsTrigger>
                        <TabsTrigger value="Basquete" >NBA 2025</TabsTrigger>
                    </TabsList>

                    <TabsContent className="space-y-6" value="Brasileirao" >
                        <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                            <Trophy className="w-5 h-5" />
                            <span>Brasileirão Série A - 2025</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto p-4">
                                <div className="grid grid-cols-3 gap-2" >
                                    <PlayCard 
                                    campeonato="Brasileirão"
                                    data="Hoje"
                                    horario="19:00"
                                    timeCasa="Corinthians"
                                    timeVisitante="Palmeiras"
                                    variant="success"
                                    />
                                    <PlayCard 
                                    campeonato="Brasileirão"
                                    data="Hoje"
                                    horario="19:00"
                                    timeCasa="Flamengo"
                                    timeVisitante="Palmeiras"
                                    variant="danger"
                                    />
                                    <PlayCard 
                                    campeonato="Brasileirão"
                                    data="Hoje"
                                    horario="19:00"
                                    timeCasa="Gremio"
                                    timeVisitante="Palmeiras"
                                    variant="success"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-secondary rounded-full" />
                                <span>AO VIVO</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-destructive rounded-full" />
                                <span>ENCERRADO</span>
                            </div>
                            </div>
                        </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>

        </div>
    );

}

export default PlaysToday;