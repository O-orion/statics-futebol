/* eslint-disable @typescript-eslint/no-require-imports */
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import cor from "@/assets/escudos/cor.png";
import pal from "@/assets/escudos/pal.png";
import fla from "@/assets/escudos/fla.png";
import vas from "@/assets/escudos/vas.png";
import gre from "@/assets/escudos/gre.png";
import inter from "@/assets/escudos/inter.png";
import { useEffect, useState } from "react";

interface StatCardProps {
    campeonato: string;
    data: string;
    horario: string;
    timeCasa: string;
    timeVisitante: string;
    variant?: 'default' | 'success' | 'warning' | 'danger',
    className?: string
}


const PlayCard = ({
    campeonato,
    data,
    horario,
    timeCasa,
    timeVisitante,
    variant = 'default',
    className
}: StatCardProps) => {

    const [ imgCasa, setImgCasa ] = useState(null)
    const [ imgVisi, setImgVisi] = useState(null)
    useEffect(() => {
        switch(timeCasa){
            case "Corinthians":
                setImgCasa(cor)
                setImgVisi(pal)
                break;
            case "Flamengo":
                setImgCasa(fla)
                setImgVisi(vas)
                break;
            default:
                setImgCasa(gre)
                setImgVisi(inter)
        }
    }, [])

    const getVariantStyles = () => {
        switch (variant) {
        case "success":
            return "border-secondary bg-secondary/5";
        case "warning":
            return "border-tertiary bg-tertiary/5";
        case "danger":
            return "border-destructive bg-destructive/5";
        default:
            return "border-primary bg-primary/5";
        }
    };

    return (
        <Card 
        className={
            cn(
                "hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-scale-in",
                getVariantStyles(),
                className
            )
        }
        >
            <CardHeader className="flex" >
                <CardTitle className="text-sm text-center text-muted-foreground">
                    {campeonato} - {data} - {horario}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <div className="text-sm text-gray-400 mb-2">Brasileirão - Hoje, 19:00</div>
            <div className="flex items-center justify-between">
                <img src={imgCasa} alt="Corinthians Logo" className="w-16 h-16 object-contain" />
                <div className="flex-1 text-center">
                <div className="text-2xl font-bold">Corinthians x Palmeiras</div>
                </div>
                <img src={imgVisi} alt="Palmeiras Logo" className="w-16 h-16 object-contain" />
            </div>
            </CardContent>
        </Card>
    )


}

export default PlayCard;
