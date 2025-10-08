import Image from "next/image";
import logoImage from "@/assets/images/logo.svg"
import menu from "@/assets/images/menu.svg"


const navLinks = [
    { Label: "Home", href: "#"},
    { Label: "Features", href: "#features"},
    { Label: "Integrations", href: "#integrations"},
    { Label: "FAQs", href: "#faqs"},
];

 export default function Navbar () {


    return (
        <section>
            <div className="">
                <div className="flex justify-between items-center  border pr-2 py-1 border-white/15 mt-3 mx-5 rounded-full">
                    <div className="">
                        <Image src={logoImage} alt="InfraDocs Logo" className="h-8 w-auto ml-2"></Image>
                    </div>
                    <div className="text-xl">
                       <i className="ri-menu-line"></i>
                    </div>
                </div>
            </div>
        </section>
    )
 }
