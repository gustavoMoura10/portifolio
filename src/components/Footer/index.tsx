import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-10 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    © {new Date().getFullYear()} Gustavo Moura. {t("text1")}
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/gustavoMoura10" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/gustavo-moura-987137202/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}