
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react";


const pricingPlans = [
    {
        feature: "Basic features",
        personal: "✓",
        business: "✓",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Users",
        personal: "10",
        business: "20",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Individual data",
        personal: "20GB",
        business: "40GB",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Support",
        personal: "✗",
        business: "✓",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Automated workflows",
        personal: "✗",
        business: "✓",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "200+ integrations",
        personal: "✗",
        business: "✓",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Analytics",
        personal: "Basic",
        business: "Advanced",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Export reports",
        personal: "✓",
        business: "✓",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "API access",
        personal: "✗",
        business: "✓",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Audit log",
        personal: "✗",
        business: "✗",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
    {
        feature: "Data history",
        personal: "✗",
        business: "✗",
        description: "Datavi syncs your data with your CRM, email, advertising tools, and more. No engineering, no manual work, no expensive CDPs.",
    },
];



const PricePlans = () => {

    return (
        <div className=" bg-white">
            <div className="flex flex-col items-center py-16 md:p-6 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row max-w-screen-lg justify-around md:gap-10 px-4">
                    <h3 className='text-3xl md:text-5xl mb-5 font-semibold text-custom-black-colour'>Plans for every budget</h3>
                    <p className='max-w-2xl m-auto text-lg text-secondary-colour'>Whether you’re a small business, or a large corporation, we have a plan that’s right for you.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row w-full max-w-screen-lg">
                    <div className="w-full mt-16 px-4">
                        <Accordion type="single" collapsible className="w-full">
                            <div className="flex justify-between text-primary-colour text-lg font-bold mb-4">
                                <p className="pl-5">Feature</p>
                                <div className="w-1/2 flex justify-around">
                                    <p>Personal</p>
                                    <p>Business</p>
                                </div>
                            </div>
                            {pricingPlans.map((plan, index) => (
                                <AccordionItem key={index} value={"item" + index} className="mb-4 py-0">
                                    <AccordionTrigger
                                        style={{ fontSize: "16px", fontWeight: "500", }}
                                    >
                                        <div className="flex items-center gap-3 md:gap-6">
                                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                                            {plan.feature}
                                        </div>
                                        <div className="w-1/2 flex items-center justify-around gap-10">
                                            <p>{plan.personal}</p>
                                            <p>{plan.business}</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">
                                            {plan.description}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricePlans;