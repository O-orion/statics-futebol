import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation"
import QuickStarts from "@/components/QuickStarts";
import Button from "@/components/ui/Button";
import { Star, Trophy } from "lucide-react";

const Index = () => {

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <Hero />
            <QuickStarts />
        </div>
    )

}

export default Index;