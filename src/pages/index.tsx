import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation"
import PlaysToday from "@/components/PlaysToday";
import QuickStarts from "@/components/QuickStarts";
import Button from "@/components/ui/Button";
import { Star, Trophy } from "lucide-react";

const Index = () => {

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <Hero />
            <QuickStarts />
            <PlaysToday />
        </div>
    )

}

export default Index;