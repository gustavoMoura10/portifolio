import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
const Map = dynamic(() => import('../Map'), {
    ssr: false, // Isso garante que o componente será renderizado apenas no lado do cliente
});
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { sendEmail } from "@/actions/sendEmail.action";
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState<string | null>(null);
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const result = await sendEmail(null, formData);
        console.log(result)
        if (result?.success) {
            setMessage('Email enviado com sucesso!');
        } else {
            setMessage('Erro ao enviar o email. Tente novamente mais tarde.');
        }
    };

    return (
        <section id="contact" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4">
            <div>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Contato
                </h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-gray-700 dark:text-gray-300">
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
                <div className="flex-1 mt-5 flex flex-col justify-center items-center">
                    <Map />
                </div>
                <div className="flex-1 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Fale comigo</h3>
                    <form className="w-full sm:w-96" onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-400 font-bold mb-2">Nome</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-400 font-bold mb-2">E-mail</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-400 font-bold mb-2">Mensagem</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} name="message"></textarea>
                        </div>
                        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
                            Enviar
                        </button>
                    </form>
                    {message && (
                        <div className={`mt-4 p-2 text-center ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'} bg-gray-100 rounded`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
