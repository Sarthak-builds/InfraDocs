import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg'
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg'
import Image from "next/image";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center"> 
            <Tag> Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6"> Where power meets <span className="text-lime-400"> simplicity</span>
            </h2>
            <div className="mt-12 grid  grid-cols-1 gap-8 ">
                <FeatureCard title="real-time Collaboration" description=" Work together seamlessly with conflictionediting.">
                <div>
                    <div>
                        <Image src={avatar1} alt='Avatar 1'/>
                    </div>
                    <div>
                        <Image src={avatar2} alt='Avatar 2'/>
                    </div>
                    <div>
                        <Image src={avatar3} alt='Avatar 3'/>
                    </div>
                </div>
                </FeatureCard>
               <FeatureCard title="Interactive Prototyping" description=" Enagage your client with prototypes that require user actions."></FeatureCard>
               <FeatureCard title="Keyboard Wuick Actions" description=" Powerful commands to help you create designs more quickly."></FeatureCard>
            </div>
            <div>
                { features.map(feature => (
                    <div key={feature}>
                        <span></span>
                        <span>{feature}</span>
                        </div>
                ))}
            </div>
        </div>
    </section>;
}
