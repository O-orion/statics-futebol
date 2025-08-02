import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import StartCard from "@/components/ui/StartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { BarChart3, ShieldCheck, Target, Trophy, Zap } from "lucide-react";

const Ranking = () => {
  const artilheirosFutebol = [
    { nome: "Pedro", time: "Flamengo", gols: 18, jogos: 25, media: 0.72 },
    { nome: "Raphael Veiga", time: "Palmeiras", gols: 16, jogos: 28, media: 0.57 },
    { nome: "Hulk", time: "Atletico-MG", gols: 15, jogos: 26, media: 0.58 },
    { nome: "Calleri", time: "São Paulo", gols: 14, jogos: 30, media: 0.47 },
    { nome: "Yuri Alberto", time: "Corinthians", gols: 12, jogos: 27, media: 0.44 }
  ];

  const pontuadoresBasquete = [
    { nome: "Giannis", time: "Bucks", pts: 31.1, jogos: 40, efg: "61.3%" },
    { nome: "Stephen Curry", time: "Warriors", pts: 30.2, jogos: 38, efg: "58.2%" },
    { nome: "Joel Embiid", time: "76ers", pts: 29.8, jogos: 35, efg: "48.9%" },
    { nome: "LeBron James", time: "Lakers", pts: 28.5, jogos: 42, efg: "54.7%" },
    { nome: "Jayson Tatum", time: "Celtics", pts: 26.8, jogos: 41, efg: "45.8%" }
  ];

  const assistenciasFutebol = [
    { nome: "Arrascaeta", time: "Flamengo", assists: 12, jogos: 28 },
    { nome: "Raphael Veiga", time: "Palmeiras", assists: 11, jogos: 28 },
    { nome: "Éverton Ribeiro", time: "Bahia", assists: 10, jogos: 25 },
    { nome: "Wesley", time: "Corinthians", assists: 9, jogos: 26 },
    { nome: "Ganso", time: "Fluminense", assists: 8, jogos: 22 }
  ];

  const assistenciasBasquete = [
    { nome: "Chris Paul", time: "Warriors", assists: 8.9, jogos: 35 },
    { nome: "LeBron James", time: "Lakers", assists: 7.8, jogos: 42 },
    { nome: "Trae Young", time: "Hawks", assists: 7.5, jogos: 38 },
    { nome: "Stephen Curry", time: "Warriors", assists: 6.4, jogos: 38 },
    { nome: "Russell Westbrook", time: "Clippers", assists: 6.1, jogos: 40 }
  ];

  const goleiros = [
    { nome: "Hugo Souza", time: "Corinthians", defesas: 87, jogos: 28, media: 3.1 },
    { nome: "Santos", time: "Fortaleza", defesas: 92, jogos: 30, media: 3.1 },
    { nome: "Rossi", time: "Flamengo", defesas: 78, jogos: 25, media: 3.1 },
    { nome: "Rafael", time: "São Paulo", defesas: 85, jogos: 28, media: 3.0 },
    { nome: "Cássio", time: "Cruzeiro", defesas: 82, jogos: 27, media: 3.0 }
  ];
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-gradient victory opacity-10"></div>
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center space-x-4 animate-fade-in">
                        <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <div className="text-4xl font-bold">Rankings</div>
                        <div className="text-muted-foreground">Os melhores do Futebol e Basquete</div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StartCard
                    title="Artilheiro"
                    value="Pedro"
                    description="18 gols (Futebol)"
                    icon={<Trophy className="w-4 h-4" />}
                    variant="success"
                    />
                    <StartCard
                        title="Pontuador"
                        value="Giannis"
                        description="31.1 pts (Basquete)"
                        icon={<Target className="w-4 h-4" />}
                        variant="warning"
                    />
                    <StartCard
                        title="Assistente"
                        value="Arrascaeta"
                        description="12 assists (Futebol)"
                        icon={<Zap className="w-4 h-4" />}
                        variant="default"
                    />
                    <StartCard
                        title="Defensor"
                        value="Weverton"
                        description="87 defesas"
                        icon={<ShieldCheck className="w-4 h-4" />}
                        variant="success"
                    />
                </div>
                <Tabs defaultValue="futebol-gols" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="futebol-gols">⚽ Artilheiros</TabsTrigger>
                <TabsTrigger value="futebol-assists">⚽ Assistências</TabsTrigger>
                <TabsTrigger value="futebol-goleiros">⚽ Goleiros</TabsTrigger>
                <TabsTrigger value="basquete-pontos">🏀 Pontos</TabsTrigger>
                <TabsTrigger value="basquete-assists">🏀 Assistências</TabsTrigger>
            </TabsList>

            <TabsContent value="futebol-gols" className="space-y-6">
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5" />
                    <span>Artilheiros do Brasileirão 2024</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {artilheirosFutebol.map((jogador, index) => (
                        <div 
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all"
                        >
                        <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-gradient-victory text-white' : 
                            index === 1 ? 'bg-secondary text-secondary-foreground' :
                            index === 2 ? 'bg-quaternary text-quaternary-foreground' :
                            'bg-muted text-muted-foreground'
                            }`}>
                            {index + 1}
                            </div>
                            <div>
                            <div className="font-semibold text-lg">{jogador.nome}</div>
                            <div className="text-sm text-muted-foreground">{jogador.time}</div>
                            </div>
                            {index === 0 && (
                            <Badge variant="secondary" className="bg-gradient-victory text-white">
                                <Award className="w-3 h-3 mr-1" />
                                Artilheiro
                            </Badge>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold">{jogador.gols}</div>
                            <div className="text-sm text-muted-foreground">
                            {jogador.jogos} jogos • {jogador.media.toFixed(2)}/jogo
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="futebol-assists" className="space-y-6">
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Assistências do Brasileirão 2024</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {assistenciasFutebol.map((jogador, index) => (
                        <div 
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all"
                        >
                        <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-gradient-primary text-white' : 
                            index === 1 ? 'bg-secondary text-secondary-foreground' :
                            index === 2 ? 'bg-quaternary text-quaternary-foreground' :
                            'bg-muted text-muted-foreground'
                            }`}>
                            {index + 1}
                            </div>
                            <div>
                            <div className="font-semibold text-lg">{jogador.nome}</div>
                            <div className="text-sm text-muted-foreground">{jogador.time}</div>
                            </div>
                            {index === 0 && (
                            <Badge variant="secondary" className="bg-gradient-primary text-white">
                                <Zap className="w-3 h-3 mr-1" />
                                Garçom
                            </Badge>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold">{jogador.assists}</div>
                            <div className="text-sm text-muted-foreground">
                            {jogador.jogos} jogos
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="futebol-goleiros" className="space-y-6">
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Melhores Goleiros - Defesas</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {goleiros.map((goleiro, index) => (
                        <div 
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all"
                        >
                        <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-gradient-secondary text-white' : 
                            index === 1 ? 'bg-secondary text-secondary-foreground' :
                            index === 2 ? 'bg-quaternary text-quaternary-foreground' :
                            'bg-muted text-muted-foreground'
                            }`}>
                            {index + 1}
                            </div>
                            <div>
                            <div className="font-semibold text-lg">{goleiro.nome}</div>
                            <div className="text-sm text-muted-foreground">{goleiro.time}</div>
                            </div>
                            {index === 0 && (
                            <Badge variant="secondary" className="bg-gradient-secondary text-white">
                                <ShieldCheck className="w-3 h-3 mr-1" />
                                Muralha
                            </Badge>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold">{goleiro.defesas}</div>
                            <div className="text-sm text-muted-foreground">
                            {goleiro.jogos} jogos • {goleiro.media}/jogo
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="basquete-pontos" className="space-y-6">
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Maiores Pontuadores NBA 2024</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {pontuadoresBasquete.map((jogador, index) => (
                        <div 
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all"
                        >
                        <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-gradient-victory text-white' : 
                            index === 1 ? 'bg-secondary text-secondary-foreground' :
                            index === 2 ? 'bg-quaternary text-quaternary-foreground' :
                            'bg-muted text-muted-foreground'
                            }`}>
                            {index + 1}
                            </div>
                            <div>
                            <div className="font-semibold text-lg">{jogador.nome}</div>
                            <div className="text-sm text-muted-foreground">{jogador.time}</div>
                            </div>
                            {index === 0 && (
                            <Badge variant="secondary" className="bg-gradient-victory text-white">
                                <Target className="w-3 h-3 mr-1" />
                                Scorer
                            </Badge>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold">{jogador.pts}</div>
                            <div className="text-sm text-muted-foreground">
                            {jogador.jogos} jogos • {jogador.efg} EFG
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="basquete-assists" className="space-y-6">
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Líderes em Assistências NBA 2024</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {assistenciasBasquete.map((jogador, index) => (
                        <div 
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-glow transition-all"
                        >
                        <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-gradient-primary text-white' : 
                            index === 1 ? 'bg-secondary text-secondary-foreground' :
                            index === 2 ? 'bg-quaternary text-quaternary-foreground' :
                            'bg-muted text-muted-foreground'
                            }`}>
                            {index + 1}
                            </div>
                            <div>
                            <div className="font-semibold text-lg">{jogador.nome}</div>
                            <div className="text-sm text-muted-foreground">{jogador.time}</div>
                            </div>
                            {index === 0 && (
                            <Badge variant="secondary" className="bg-gradient-primary text-white">
                                <Zap className="w-3 h-3 mr-1" />
                                Playmaker
                            </Badge>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold">{jogador.assists}</div>
                            <div className="text-sm text-muted-foreground">
                            {jogador.jogos} jogos
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
            </div>

        </div>
    )

}

export default Ranking;
