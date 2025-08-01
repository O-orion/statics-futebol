import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import StartCard from "@/components/ui/StartCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/Tabs";
import { ArrowDown, ArrowUp, Clock, Target, TrendingUp, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import classificacao from '../data/brasileirao.json'

const Futebol = () => {
    const [ classificacaoData, setClassificacaoData ] = useState([]);
    
      const jogosHoje = [
    { time1: "Palmeiras", time2: "Flamengo", horario: "16:00", status: "live" },
    { time1: "Corinthians", time2: "São Paulo", horario: "18:30", status: "scheduled" },
    { time1: "Santos", time2: "Grêmio", horario: "20:00", status: "scheduled" }
  ];

  const artilheiros = [
    { nome: "Yuri Alberto", time: "Corinthians", gols: 25 },
    { nome: "Pedro", time: "Flamengo", gols: 18 },
    { nome: "Raphael Veiga", time: "Palmeiras", gols: 16 },
    { nome: "Hulk", time: "Atletico-MG", gols: 15 },
    { nome: "Calleri", time: "São Paulo", gols: 14 },
  ];

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

            <Tabs defaultValue="classificacao" className="p-4 space-v-6"  >
                <TabsList className="mb-3 grid w-full grid-cols-4"  >
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
                            <div className="mt-4 flex flw-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-secondary rounded-full" />
                                        <span>Libertadores</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-destructive rounded-full" />
                                    <span>Rebaixamento</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="jogos" className="space-y-6" >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2" >
                                <Clock className="w-5 h-5"  />
                                <span>Jogos de Hoje</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {
                                    jogosHoje.map((jogo,index) => (
                                        <div  
                                        key={index}
                                        className="flex items-center justify-between p-4 border-border rounded-lg hover:shadow-glow transition-all"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="text-center">
                                                    <div className="font-semibold">{jogo.time1}</div>
                                                </div>
                                                <div className="text-2xl font-bold text-muted-foreground">VS</div>
                                                <div className="text-center">
                                                    <div className="font-semibold">{jogo.time2}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                {
                                                    jogo.status === 'live' && (
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-red-500 rounded-full animated-pulse"></div>
                                                            <span className="text-sm font-medium text-red-500" >AO VIVO</span>
                                                        </div>
                                                    )}
                                                    <div className="text-lg-font-semilbold">
                                                        {jogo.horario}
                                                    </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="estatisticas" className="space-y-6" >
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2" >
                                    <TrendingUp className="w-5 h-5" />
                                    <span>Times em Alta</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <ArrowUp className="w-4 h-4 text-secondary" />
                                            <span className="font-medium" >Corinthians</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">5 Vitórias Seguidas</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3  bg-secondary/20 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <ArrowUp className="w-4 h-4 text-secondart" />
                                            <span className="font-medium">Flamengo</span>
                                        </div>
                                     <span className="text-sm text-muted-foreground">4 Vitórias Seguidas</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2" >
                                    <ArrowDown className="h-5 w-5" />
                                    <span>Time em Baixa</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-destructive/20 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <ArrowDown className="w-4 h-4 text-destructive" />
                                            <span className="font-medium">Santos</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">4 Derrotas seguidas</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-destructive/20 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <ArrowDown className="w-4 h-4 text-destructive" />
                                            <span className="font-medium">Sport</span>
                                        </div>
                                        <span className="font-sm text-muted-foreground">3 Empates seguidos</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="artilheiros" className="space-y-6" >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2" >
                                <Target className="w-5 h-5" />
                                <span>Artilheiros do Brasileirão 2025</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent >
                            <div className="space-y-3">
                                {
                                    artilheiros.map((jogador, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                                index === 0 ? 'bg-gradient-victory text-white' : 
                                                index === 1 ? 'bg-secondary text-secondary-foreground' :
                                                index === 2 ? 'bg-quaternary text-quaternary-foreground' :
                                                'bg-muted text-muted-foreground'
                                                }`}>
                                                {index + 1}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{jogador.nome}</div>
                                                    <div className="text-sm text-muted-foreground">{jogador.time}</div>
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold">{jogador.gols}</div>
                                        </div>
                                    ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>

        </div>
    )

}

export default Futebol;