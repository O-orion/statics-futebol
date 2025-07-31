import { Clock, TrendingUp, Trophy, Users } from "lucide-react";
import StartCard from "./ui/StartCard";


const QuickStarts = () => {

    return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <StartCard
                title="Jogos de Hoje"
                value={12}
                description="Ao vivo e programadas"
                icon={<Clock className="w-4 h-4" />}
                variant="success"
                />

                <StartCard 
                title="Campeonatos"
                value={8}
                description="Ativos na Plataforma"
                icon={<Trophy className="w-4 h-4" />}
                variant="default"
                />
                <StartCard
                    title="Times"
                    value="156"
                    description="Cadastrados"
                    icon={<Users className="w-4 h-4" />}
                    variant="warning"
                />
                <StartCard
                    title="Estatísticas"
                    value="2.4K"
                    description="Atualizadas hoje"
                    icon={<TrendingUp className="w-4 h-4" />}
                    variant="success"
                />

            </div>
    )

}

export default QuickStarts;