import { Target, Trophy } from "lucide-react"
import SportCard from "./ui/SportCard"

const Sports = () => {
    return (
 
        <div className="grid md:grid-cols-2 gap-8">
            <SportCard 
                title="Futebol"
                description="Acompanhe os campeonatos de futebol, estatísticas dos times e jogadores, tabelas de classificação e muito mais."
                icon={<Trophy className="w-6 h-6 text-white" />}
                href="/futebol"
                gradient="bg-gradient-field"
                liveMatches={7}
                stats={[
                { label: "Campeonatos", value: "5" },
                { label: "Times", value: "80" },
                { label: "Jogadores", value: "1.2K" },
                { label: "Jogos Hoje", value: "7" }
                ]}
            />
            <SportCard 
                title="Basquete"
                description="Explore as ligas de basquete, estatísticas detalhadas, rankings de jogadores e análises de performance."
                icon={<Target className="w-6 h-6 text-white" />}
                href="/basquete"
                gradient="bg-gradient-court"
                liveMatches={5}
                stats={[
                { label: "Ligas", value: "3" },
                { label: "Times", value: "36" },
                { label: "Jogadores", value: "450" },
                { label: "Jogos Hoje", value: "5" }
                ]}
            />
        </div>

    )
}

export default Sports;
