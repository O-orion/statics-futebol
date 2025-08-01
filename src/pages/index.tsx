import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navigation from "@/components/Navigation"
import PlaysToday from "@/components/PlaysToday";
import QuickStarts from "@/components/QuickStarts";
import Sports from "@/components/Sports";

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
            <Highlights />
        </div>
    )

}

export default Index;