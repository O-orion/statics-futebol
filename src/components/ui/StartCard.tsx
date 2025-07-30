import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { cn } from "@/lib/utils";

interface StartCardProps {
    title: string;
    value: string | number;
    description?: string;
    icon?: ReactNode;
    variant?: "default" | "success" | "warning" | "danger";
    trend?: "up" | "down" | "stable"
    className?: string;
}

const StartCard = ({
    title,
    value,
    description,
    icon,
    trend,
    variant = "default",
    className
}: StartCardProps) => {
    const getVariantStyles = () => {
        switch(variant) {
            case "success":
                return "border-secondary bg-secondary/5";
            case "warning":
                return "border-tertiart bg-tertiary/5";
            case "danger":
                return "border-destructive bg-destructive/5";
            default:
                return "border-primary bg-primary/5"
        }
    }

    const getTrendIcon = () => {
        if (trend === "up") return "📈"
        if (trend === "down") return "📉"
        return "➡️";
    }

    return (
        <Card
        className={cn(
            "hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-scale-in",
            getVariantStyles(),
            className
        )}
        >
            <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            >
                <CardTitle className="text-sm font-medium text-muted-foreground" >
                    {title}
                </CardTitle>
                {
                    icon && (
                        <div className="text-muted-foreground">
                            {icon}
                        </div>
                    )
                }
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline space-x-2">
                    <div className="text-2xl font-bold text-card-foreground">
                        {value}
                    </div>
                    {
                        trend && (
                            <span className="text-sm">
                                {
                                    getTrendIcon()
                                }
                            </span>
                        )
                    }
                </div>
                {
                    description && (
                        <p className="text-xs text-muted-foreground mt-1">
                            {
                                description
                            }
                        </p>
                    )
                }
            </CardContent>
        </Card>
    )

}

export default StartCard;