"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faFile, faGraduationCap, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl"; // Importando o hook de traduções
import "./index.css";

export default function Banner() {
    const [isMobile, setIsMobile] = useState(false);
    const t = useTranslations("banner"); // Usando o hook de traduções

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 1000);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <section id="banner" className="relative w-full min-h-[500px] overflow-hidden flex flex-col sm:flex-row">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/codigo.jpg"
                    alt={t("background_alt")} // Usando a tradução para o texto alt da imagem
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="h-[500px] rounded"
                />
            </div>

            {/* Container */}
            <div>
                {/* Foto animada */}
                <motion.div
                    className="foto-tleft absolute top-1/3 left-0 z-20"
                    initial={isMobile ? { x: "-50%", y: "-50%", opacity: 0 } : { x: "-100%", opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <Image
                        src="/minhafoto1.jpg"
                        alt={t("photo_alt")} // Usando a tradução para o texto alt da foto
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </motion.div>

                {/* Card animado */}
                <motion.div
                    className="card-tright absolute top-1/3 right-0 z-30 bg-white p-6 rounded-lg shadow-lg w-80"
                    initial={isMobile ? { x: "50%", y: "-50%", opacity: 0 } : { x: "100%", opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold mb-4">
                        {t("name")} <small className="text-sm text-gray-500">({t("nickname")})</small>
                    </h2>

                    {/* Informações de contato */}
                    <div className="flex flex-row mb-2 mt-2">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2 text-emerald-600" />
                        <a href={`mailto:${t("email")}`}>
                            <span>{t("email")}</span>
                        </a>
                    </div>
                    <div className="flex flex-row mb-2 mt-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-emerald-600" />
                        <a href="https://wa.me/5511981214534" target="_blank">
                            <span>{t("phone")}</span>
                        </a>
                    </div>
                    <div className="flex flex-row mb-2 mt-2">
                        <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-emerald-600" />
                        <span>{t("degree")}</span>
                    </div>
                    <div className="flex flex-row mb-2 mt-2">
                        <FontAwesomeIcon icon={faHouse} className="mr-2 text-emerald-600" />
                        <span>{t("address")}</span>
                    </div>

                    {/* Ícones sociais */}
                    <div className="flex flex-row mt-10 justify-around">
                        <a href={t("linkedin")} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-3xl text-blue-600" />
                        </a>
                        <a href={t("github")} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl text-dark-900" />
                        </a>
                    </div>
                    <div className="flex flex-row mt-10 justify-center">
                        <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
                            <a href={t("link_cv")} download>
                                <FontAwesomeIcon icon={faFile} className="mr-2 text-1xl" /> {t("download_cv")}
                            </a>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
