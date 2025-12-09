import { motion, AnimatePresence } from "framer-motion"; // Importe motion e AnimatePresence
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { sendEmail } from "@/actions/sendEmail.action";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const [response, setResponse] = useState<any | null>(null);
    const t = useTranslations("contact");
    useEffect(() => {
        if (response) {
            const timer = setTimeout(() => {
                setResponse(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [response]);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement; // Cast explícito para HTMLFormElement
        const formData = new FormData(form);

        const result = await sendEmail(null, formData);

        form.reset();
        if (result?.success) {
            setResponse({
                success: true,
                message: "Email enviado com sucesso!"
            });
        } else {
            setResponse({
                success: false,
                message: "Ocorreu um erro ao enviar o email."
            });
        }
    };

    return (
        <section id="contact" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4">
            <div>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
                    {t('title')}
                </h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-gray-700 dark:text-gray-300 justify-center">
                    <div className="flex flex-row">
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-emerald-600" />
                        </div>
                        <div>
                            <a href="https://wa.me/5511981214534" target="_blank">
                                <span>+55 (11) 98121-4534</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2 text-emerald-600" />
                        </div>
                        <div>
                            <a href="mailto:gustavomoura.dev@gmail.com"><span>gustavomoura.dev@gmail.com</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex grow-1 flex-col md:flex-row gap-6 mt-4 ">
                <div className="flex-1 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('text1')}</h3>
                    <form className="w-full sm:w-96" onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-400 font-bold mb-2">{t('text2')}</label>
                            <input
                                required
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                name="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-400 font-bold mb-2">{t('text3')}</label>
                            <input
                                required
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                name="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-400 font-bold mb-2">{t('text4')}</label>
                            <textarea
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                rows={4}
                                name="message"
                            ></textarea>
                        </div>
                        <button className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
                            Enviar
                        </button>
                    </form>
                    <AnimatePresence>
                        {response && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={`mt-4 p-2 text-center ${response.success ? 'text-green-600' : 'text-red-600'} bg-gray-100 rounded`}
                            >
                                {response.message}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}