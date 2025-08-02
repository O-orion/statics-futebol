import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import StartCard from "@/components/ui/StartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Clock, Star, Target, TrendingUp, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";
import classificacao from '@/data/brasileirao.json'

const Basquete = () => {

    const [basquete, setBasquete] = useState([]);

    const jogosHoje = [
    { time1: "Lakers", time2: "Warriors", horario: "22:00", placar: "108-105", status: "live" },
    { time1: "Celtics", time2: "Heat", horario: "23:30", status: "scheduled" },
    { time1: "Bucks", time2: "Nets", horario: "01:00", status: "scheduled" }
  ];

  const estatisticasJogadores = [
    { nome: "LeBron James", time: "Lakers", pts: 28.5, reb: 8.2, ast: 7.8 },
    { nome: "Stephen Curry", time: "Warriors", pts: 30.2, reb: 5.1, ast: 6.4 },
    { nome: "Jayson Tatum", time: "Celtics", pts: 26.8, reb: 7.9, ast: 4.3 },
    { nome: "Giannis", time: "Bucks", pts: 31.1, reb: 12.1, ast: 5.7 },
    { nome: "Jimmy Butler", time: "Heat", pts: 22.4, reb: 6.8, ast: 5.9 }
  ];

    const timeDaSemana = [
    { nome: "Stephen Curry", pos: "PG", time: "Warriors", pts: 35.7, efg: "58.2%" },
    { nome: "Devin Booker", pos: "SG", time: "Suns", pts: 32.3, efg: "52.1%" },
    { nome: "LeBron James", pos: "SF", time: "Lakers", pts: 28.5, efg: "54.7%" },
    { nome: "Giannis", pos: "PF", time: "Bucks", pts: 31.1, efg: "61.3%" },
    { nome: "Joel Embiid", pos: "C", time: "76ers", pts: 29.8, efg: "48.9%" }
  ];

    useEffect(() => {
        setBasquete(classificacao.basquete)
    }, classificacao.basquete)

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <section className="relative overflow-hidden border-border border-b">
                <div className="absolute inset-0 bg-gradient-court opacity-10"></div>
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center space-x-4 animate-fade-in">
                        <div className="w-16 h-16 bg-gradient-court rounded-xl flex items-center justify-center">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">Basquete</h1>
                            <p className="text-muted-foreground">Acompanhe a NBA e ligais nacionais</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StartCard
                        title="Jogos Hoje"
                        value="5"
                        description="1 ao vivo"
                        icon={<Clock className="w-4 h-4" />}
                        variant="success"
                    />
                    <StartCard
                        title="Maior Pontuador"
                        value="Giannis"
                        description="31.1 pts/jogo"
                        icon={<Target className="w-4 h-4" />}
                        variant="warning"
                    />
                    <StartCard
                        title="Líder"
                        value="Lakers"
                        description="28-12"
                        icon={<Trophy className="w-4 h-4" />}
                        variant="default"
                    />
                    <StartCard
                        title="Média Pontos"
                        value="112.4"
                        description="Por jogo"
                        icon={<TrendingUp className="w-4 h-4" />}
                        variant="success"
                    />           
                </div>

                <Tabs defaultValue="classificacao" className="space-y-6" >
                    <TabsList className="grid w-full grid-cols-4" >
                        <TabsTrigger value="classificacao" >Classificação</TabsTrigger>
                        <TabsTrigger value="jogos" >Jogos</TabsTrigger>
                        <TabsTrigger value="estatisticas" >Estatísticas</TabsTrigger>
                        <TabsTrigger value="time-semana" >Time da Semana</TabsTrigger>
                    </TabsList>

                    <TabsContent value="classificacao" className="space-y-6" >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2" >
                                    <Trophy className="w-5 h-5" />
                                    <span>NBA - Conferência Oeste</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left p-2">Pos</th>
                                                <th className="text-left p-2">Time</th>
                                                <th className="text-center p-2">V</th>
                                                <th className="text-center p-2">D</th>
                                                <th className="text-center p-2">Apr</th>
                                                <th className="text-center p-2">PF</th>
                                                <th className="text-center p-2">PS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                basquete.map((time,index) => (
                                                    <tr
                                                    key={time.Pos} 
                                                        className={`border-b border-border/50 hover:bg-muted/50 transition-colors ${
                                                            index < 3 ? 'bg-secondary/20' : ''
                                                        }`}
                                                    >
                                                        <td className="p-2 font-semibold">
                                                            <div className="flex items-center space-x-2">
                                                                <span>{time.Pos}</span>
                                                                {index < 3 && <div className="w-2 h-2 bg-secondary rounded-full" />}
                                                            </div>
                                                        </td>
                                                        <td className="p-2 font-medium">{time.Time}</td>
                                                        <td className="p-2 text-center font-bold">{time.V}</td>
                                                        <td className="p-2 text-center">{time.D}</td>
                                                        <td className="p-2 text-center">{time.Apr}</td>
                                                        <td className="p-2 text-center">{time.PF}</td>
                                                        <td className="p-2 text-center">{time.PS}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-secondary rounded-full">
                                        </div>
                                        <span>Playoffs</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="jogos" className="space-y-6" >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2" >
                                    <Clock className="w-5 h-5" />
                                    <span>Jogos de Hoje</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent  >
                                <div className="space-y-4">
                                    {
                                      jogosHoje.map((jogo,index) => (
                                        <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all">
                                            <div className="flex items-center space-x-4">
                                                <div className="text-center">
                                                    <div className="font-semibold">{jogo.time1}</div>
                                                </div>
                                                <div className="text-2xl font-bold text-muted-foreground">
                                                    {jogo.placar || "VS"}
                                                </div>
                                                <div className="text-center">
                                                    <div className="font-semibold">{jogo.time2}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                               {
                                                jogo.status === "live" && (
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                        <span className="text-sm font-medium text-red-500">AO VIVO</span>
                                                    </div>
                                                )}
                                                <div className="text-lg font-semibold">{jogo.horario}</div>
                                            </div>
                                        </div>
                                      ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="estatisticas" className="space-y-6" >
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2" >
                                        <Target className="w-5 h-5" />
                                        <span>Líderes em Pontos</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {
                                            estatisticasJogadores.slice(0,3).map((player,index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg  hover:shadow-glow transition-all">
                                                    <div>
                                                        <div className="font-medium">{player.nome}</div>
                                                        <div className="text-sm text-muted-foreground">{player.time}</div>
                                                    </div>
                                                    <div className="text-xl font-bold">{player.pts}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Users className="w-5 h-5" />
                                    <span>Líderes em Rebotes</span>
                                </CardTitle>
                                </CardHeader>
                                <CardContent>
                                <div className="space-y-3">
                                    {estatisticasJogadores.slice(0, 3).map((jogador, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg  hover:shadow-glow transition-all">
                                        <div>
                                        <div className="font-medium">{jogador.nome}</div>
                                        <div className="text-sm text-muted-foreground">{jogador.time}</div>
                                        </div>
                                        <div className="text-xl font-bold">{jogador.reb}</div>
                                    </div>
                                    ))}
                                </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="time-semana" className="space-y-6" >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2" >
                                    <Star  className="h-5 w-5" />
                                    <span>Time da Semana</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {
                                        timeDaSemana.map((time, index) => (
                                            <div
                                            key={index}
                                            className="flex items-center justify-between  p-4 border border-border rounded-lg hover:shadow-glow transition-all bg-gradient-to-r from-tertiary/10 to-quaternary/10"
                                            >

                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-victory rounded-full flex items-center justify-center text-white font-bold">
                                                        { time.pos}
                                                    </div>
                                                    <div className="font-semibold">{time.nome}</div>
                                                    <div className="text-sm text-muted-foreground">{time.time}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-lg font-bold">{time.pts}</div>
                                                    <div className="text-sm text-muted-foreground">{time.efg}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>

        </div>
    )
}

export default Basquete;
