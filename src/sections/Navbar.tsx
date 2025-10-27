import Image from "next/image";
import logoImage from "@/assets/images/logo.svg"
import menu from "@/assets/images/menu.svg"
import Button from "@/components/button";


const navLinks = [
    { Label: "Home", href: "#"},
    { Label: "Features", href: "#features"},
    { Label: "Integrations", href: "#integrations"},
    { Label: "FAQs", href: "#faqs"},
];

 export default function Navbar () {


    return (
        <section className="py-4 lg:py-4 w-full flex justify-center items-center">
            <div className="w-full max-w-7xl">
                <div className="flex justify-between items-center gap-24 border pr-2 py-1 border-white/15 mt-3 mx-5 md:pr-2 rounded-full">
                    <div className=" ml-1">
                        <Image src={logoImage} alt="InfraDocs Logo" className="h-8 md:h-10 w-auto ml-2"></Image>
                    </div>
                    <div className="flex justify-center items-center">
                        <nav className=" hidden md:flex gap-9 lg:gap-12   text-md lg:text-lg font-special-gothic">
                           {navLinks.map(link => {
                            return (
                                <a href={link.href} key={link.Label}>{link.Label}</a>
                            );
                           })}
                        </nav>
                    </div>
                    <div className="text-xl md:text-lg">
                       <i className="ri-menu-line md:hidden"></i>
                      <div className="flex gap-2">
                         <Button variant="secondary" className="hidden md:inline-block">Login</Button>
                       <Button variant="primary" className="hidden md:block">Signup</Button>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    )
 }
