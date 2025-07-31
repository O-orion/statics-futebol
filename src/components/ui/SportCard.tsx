import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { Card, CardContent } from "./Card";

interface SportCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  gradient: string;
  stats: { label: string; value: string }[];
  liveMatches?: number;
}

const SportCard = ({ 
  title, 
  description, 
  icon, 
  href, 
  gradient, 
  stats, 
  liveMatches 
}: SportCardProps) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-[1.02] animate-fade-in">
      <div className={cn("absolute inset-0 opacity-10", gradient)} />
      
      <CardContent className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={cn("p-3 rounded-lg", gradient)}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
              {liveMatches && (
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    {liveMatches} jogos ao vivo
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <Link to={href}>
          <Button 
            variant="sport" 
            className="w-full group-hover:shadow-glow"
            size="lg"
          >
            Explorar {title}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SportCard;