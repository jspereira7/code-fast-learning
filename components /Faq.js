"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Como começar ?",
        answer: "Faça nosso trial e escale sua operação sem esforço"
    },
    {
        question: "Porque tão barato?",
        answer: "Pra facilitar o acesso pra mais players"
    },
    {
        question: "Essa ferramenta é unica no mundo?",
        answer: "Sim o visionario Js fez a melhor ferramenta pra trabalhar com TikTokAds"
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow bg-base-200">
                        <input
                            type="checkbox"
                            checked={openIndex === index}
                            onChange={() => toggleFAQ(index)}
                        />
                        <div className="collapse-title text-lg font-medium">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
