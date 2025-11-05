import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    const selectedindex = 0;
    return <section className="py-24">
        <div className="container">
           <div className="flex justify-center">
               <Tag>Faqs</Tag>
           </div>
            <div className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                <h2> Questions? We've got <span className="text-lime-400">answers</span></h2>
            </div>
            <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
               {faqs.map((faq, faqIndex)=> (
                <div key={faq.question} className="bg-neutral-900 rounded-2xl border bprder-white/10 p-6">
                    <div className="flex gap-2 justify-between items-center">
                        <h3 className="font-medium">{faq.question}</h3>
                       <svg className={twMerge("text-lime-400 size-6 flex-shrink-0",selectedindex===faqIndex && "rotate-45")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(163,230,53,1)"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                       </div> 
                       <div className={twMerge("mt-6",selectedindex!== faqIndex && "hidden" )}>
                        <p className="text-white/50">{faq.answer}</p></div>
                       
                    </div>
               ))} 
            </div>
        </div>
    </section>;
}
