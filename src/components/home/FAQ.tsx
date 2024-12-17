
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
    {
        question: 'What is Finzo?',
        answer: 'Finzo is payment institution that helps millions of people and businesses manage their money across the world. Finzo helps you get more from your money.',
    },
    {
        question: 'How do I send money to a bank account?',
        answer: 'Finzo is payment institution that helps millions of people and businesses manage their money across the world. Finzo helps you get more from your money.',
    },
    {
        question: 'How do I verify my identity?',
        answer: 'Finzo is payment institution that helps millions of people and businesses manage their money across the world. Finzo helps you get more from your money.',
    },
    {
        question: 'What happens when I go over the block limit on my Free plan?',
        answer: 'You can still read your existing content as usual, but you won’t be able to add new content. However, you can delete existing blocks to free up space.',
    },

];


const FAQ = () => {

    return (
        <div className=" bg-white">
            <div className="flex flex-col items-center py-20 p-6 max-w-screen-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-medium mb-2 ">FAQ</h2>
                <div className="flex flex-col md:flex-row w-full max-w-screen-lg">
                    <div className="w-full mt-16 px-4">
                        <Accordion type="single" collapsible>
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-4">
                                    <AccordionItem value={"item" + index}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQ;