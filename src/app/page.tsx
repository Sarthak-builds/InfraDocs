import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";


export default function Home() {
    return (
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <LogoTicker></LogoTicker>
        <Introduction></Introduction>
        <Features></Features>
        <Integrations></Integrations>
        </>
    )
}
