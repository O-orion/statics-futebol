import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import StartCard from "@/components/ui/StartCard";
import { Tabs, TabsList } from "@/components/ui/Tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { Clock, Target, TrendingUp, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import classificacao from '../data/brasileirao.json'

const Futebol = () => {
    const [ classificacaoData, setClassificacaoData ] = useState([]);
    
    useEffect(()=> {
        setClassificacaoData(classificacao.classificacao)
    }, [classificacao])

    return (
        <div className="h-min-screen bg-background">
            <Navigation />

            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-gradient-field opacity-10" />
                    <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center space-x-4 animate-fade-in">
                        <div className="w-16 h-16 bg-gradient-field rounded-xl flex items-center justify-center">
                                <Trophy  className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">Futebol</h1>
                            <p className="text-muted-foreground">Acompanhe os campeonatos brasileiros</p>

                        </div>
                    </div>
                </div>
            </section>

            <div className="container-mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StartCard 
                        title="Jogos Hoje"
                        value="7"
                        description="3 ao vivo"
                        icon={<Clock className="w-4 h-4" />}
                        variant="success"                    
                    />
                    <StartCard
                        title="Artilheiro"
                        value="Pedro"
                        description="18 gols"
                        icon={<Target className="w-4 h-4" />}
                        variant="warning"
                    />
                    <StartCard
                        title="Líder"
                        value="Palmeiras"
                        description="67 pontos"
                        icon={<Trophy className="w-4 h-4" />}
                        variant="default"
                    />
                    <StartCard
                        title="Média Gols"
                        value="2.8"
                        description="Por partida"
                        icon={<TrendingUp className="w-4 h-4" />}
                        variant="success"
                    />
                </div>
            </div>

            <Tabs defaultValue="classificacao" className="space-v-6"  >
                <TabsList className="grid w-full grid-cols-4"  >
                    <TabsTrigger value="classificacao" >Classificação</TabsTrigger>
                    <TabsTrigger value="jogos" >Jogo</TabsTrigger>
                    <TabsTrigger value="estatisticas" >Estatisticas</TabsTrigger>
                    <TabsTrigger value="artilheiros" >Artilheiros</TabsTrigger>
                </TabsList>

                <TabsContent value="classificacao" className="space-y-6" >
                    <Card>
                        <CardHeader  >
                            <CardTitle className="flex items-center space-x-2">
                                <Trophy className="w-5 h-5" />
                                <span>Brasileirão Série A - 2025</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="text-left p-2">Pos</th>
                                            <th className="text-left p-2">Time</th>
                                            <th className="text-center p-2">P</th>
                                            <th className="text-center p-2">J</th>
                                            <th className="text-center p-2">V</th>
                                            <th className="text-center p-2">E</th>
                                            <th className="text-center p-2">GP</th>
                                            <th className="text-center p-2">GC</th>
                                            <th className="text-center p-2">SG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            classificacaoData.map((time, index) => (
                                                <tr
                                                key={time.pos}
                                                className={`border-b border-border/50 hover:bg-muted/50 transition-colors ${
                                                    index < 4 ? 'bg-secondary/20' : index >= classificacaoData.length - 4 ? 'bg-destructive/10' : ''
                                                }`}
                                                >   
                                                    <td className="p-2 font-semibold">
                                                        <div className="flex items-center space-x-2">
                                                            <span>{time.pos}</span>
                                                            {index < 4 && <div className="w-2 h-2 bg-secondary rounded-full" />}
                                                            {  index >= classificacaoData.length - 4 && <div className="w-2 h-2 bg-destructive rounded-full" />}
                                                        </div>
                                                    </td>
                                                    <td className="p-2 font-medium">{time.time}</td>
                                                    <td className="p-2 text-center font-bold">{time.p}</td>
                                                    <td className="p-2 text-center">{time.j}</td>
                                                    <td className="p-2 text-center">{time.v}</td>
                                                    <td className="p-2 text-center">{time.e}</td>
                                                    <td className="p-2 text-center">{time.d}</td>
                                                    <td className="p-2 text-center">{time.gp}</td>
                                                    <td className="p-2 text-center">{time.gc}</td>
                                                    <td className="p-2 text-center">{time.sg > 0 ? `+${time.sg}`: time.sg}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>

        </div>
    )

}

export default Futebol;