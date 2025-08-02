import Navigation from "@/components/Navigation";

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
    { nome: "Weverton", time: "Palmeiras", defesas: 87, jogos: 28, media: 3.1 },
    { nome: "Santos", time: "Fortaleza", defesas: 92, jogos: 30, media: 3.1 },
    { nome: "Rossi", time: "Flamengo", defesas: 78, jogos: 25, media: 3.1 },
    { nome: "Rafael", time: "São Paulo", defesas: 85, jogos: 28, media: 3.0 },
    { nome: "Cássio", time: "Corinthians", defesas: 82, jogos: 27, media: 3.0 }
  ];
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
        </div>
    )

}

export default Ranking;
