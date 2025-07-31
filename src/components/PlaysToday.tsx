import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Clock, Trophy } from "lucide-react";
import StartCard from "./ui/StartCard";
import PlayCard from "./ui/PlayCard";

const PlaysToday = () => {
    const classificacao = [
        { pos: 1, time: "Palmeiras", p: 67, j: 32, v: 20, e: 7, d: 5, gp: 54, gc: 26, sg: 28 },
        { pos: 2, time: "Flamengo", p: 64, j: 32, v: 19, e: 7, d: 6, gp: 58, gc: 31, sg: 27 },
        { pos: 3, time: "Atletico-MG", p: 58, j: 32, v: 17, e: 7, d: 8, gp: 48, gc: 35, sg: 13 },
        { pos: 4, time: "São Paulo", p: 54, j: 32, v: 16, e: 6, d: 10, gp: 43, gc: 32, sg: 11 },
        { pos: 5, time: "Corinthians", p: 51, j: 32, v: 14, e: 9, d: 9, gp: 42, gc: 35, sg: 7 }
    ];

    

    return (
        <div className="min-h-screen bg-background">
            <div className="relative  container mx-auto px-4 py-10" >
                
                <Tabs
                    defaultValue="Brasileirao"
                    className="space-y-6"
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
                                    timeCasa="Corinthians"
                                    timeVisitante="Palmeiras"
                                    />
                                    <PlayCard 
                                    campeonato="Brasileirão"
                                    data="Hoje"
                                    horario="19:00"
                                    timeCasa="Corinthians"
                                    timeVisitante="Palmeiras"
                                    variant="danger"
                                    />
                                    <PlayCard 
                                    campeonato="Brasileirão"
                                    data="Hoje"
                                    horario="19:00"
                                    timeCasa="Corinthians"
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