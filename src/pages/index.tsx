import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation"
import PlaysToday from "@/components/PlaysToday";
import QuickStarts from "@/components/QuickStarts";
import Sports from "@/components/Sports";
import Button from "@/components/ui/Button";
import { Star, Trophy } from "lucide-react";

const Index = () => {

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <Hero />
            <section className="container mx-auto px-4 py-16" >
                <QuickStarts />
                <Sports />
            </section>
            <PlaysToday />
        </div>
    )

}

export default Index;