import { useState, useEffect } from 'react';
import ListTech from '../ListTech';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
export default function Skills() {
    const [defaultOpen, setDefaultOpen] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const t = useTranslations("skills");
    const checkIsMobile = () => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 640);
        }
    };
    useEffect(() => {
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    const toggleSection = (section: any) => {
        if (defaultOpen == section) {
            setDefaultOpen(null);
        } else {
            setDefaultOpen(section);
        }
    };
    const sections = [
        {
            name: "language",
            title: t("text1"),
            list: [
                { name: "Javascript", imagePath: "/skills/javascript-js.svg", alt: "Javascript" },
                { name: "HTML", imagePath: "/skills/file-type-html.svg", alt: "HTML" },
                { name: "CSS", imagePath: "/skills/file-type-css.svg", alt: "CSS" },
                { name: "Typescript", imagePath: "/skills/typescript-icon.svg", alt: "Typescript" },
                { name: "Java", imagePath: "/skills/java.svg", alt: "Java" },
                { name: "Python", imagePath: "/skills/python.svg", alt: "Python" },
                { name: "PHP", imagePath: "/skills/php.svg", alt: "PHP" }
            ]
        },
        {
            name: "backend",
            title:t("text2"),
            list: [
                { name: "Node.js", imagePath: "/skills/nodejs.svg", alt: "Node.js" },
                { name: "Express", imagePath: "/skills/express-original.svg", alt: "Express" },
                { name: "NextJS", imagePath: "/skills/next-js.svg", alt: "NextJS" },
                { name: "NestJS", imagePath: "/skills/nestjs.svg", alt: "NestJS" },
                { name: "Sequelize", imagePath: "/skills/sequelize.svg", alt: "Sequelize" },
                { name: "TypeORM", imagePath: "/skills/typeorm.svg", alt: "TypeORM" },
                { name: "Electron", imagePath: "/skills/electron.svg", alt: "Electron" },
                { name: "Socket.io", imagePath: "/skills/socket-io.svg", alt: "Socket.io" },
                { name: "Spring Boot", imagePath: "/skills/spring-boot-1.svg", alt: "Spring Boot" },
                { name: "Spring MVC", imagePath: "/skills/spring.svg", alt: "Spring MVC" },
                { name: "JSF", imagePath: "/skills/jsf.svg", alt: "JSF" },
                { name: "Hibernate", imagePath: "/skills/hibernate.svg", alt: "Hibernate" },
                { name: "Flask", imagePath: "/skills/flask.svg", alt: "Flask" },
                { name: "Zend", imagePath: "/skills/zend-framework.svg", alt: "Zend" }
            ]
        },
        {
            name: "frontend",
            title: t("text3"),
            list: [
                { name: "Angular", imagePath: "/skills/file-type-angular.svg", alt: "Angular" },
                { name: "Vue", imagePath: "/skills/vue.svg", alt: "Vue" },
                { name: "React", imagePath: "/skills/react.svg", alt: "React" },
                { name: "Bootstrap", imagePath: "/skills/bootstrap.svg", alt: "Bootstrap" },
                { name: "Tailwind", imagePath: "/skills/tailwind-css.svg", alt: "Tailwind" },
                { name: "Redux", imagePath: "/skills/redux-original.svg", alt: "Redux" },
                { name: "Expo", imagePath: "/skills/expo.svg", alt: "Expo" }
            ]
        },
        {
            name: "testing",
            title: t("text4"),
            list: [
                { name: "JUnit", imagePath: "/skills/junit.svg", alt: "JUnit" },
                { name: "Jest", imagePath: "/skills/file-type-jest.svg", alt: "Jest" },
                { name: "PHPUnit", imagePath: "/skills/file-type-phpunit.svg", alt: "PHPUnit" }
            ]
        },
        {
            name: "automation",
            title: t("text5"),
            list: [
                { name: "Selenium", imagePath: "/skills/selenium.svg", alt: "Selenium" },
                { name: "Puppeteer", imagePath: "/skills/puppeteer.svg", alt: "Puppeteer" }
            ]
        },
        {
            name: "infrastructure",
            title: t("text6"),
            list: [
                { name: "Linux", imagePath: "/skills/linux.svg", alt: "Linux" },
                { name: "Docker", imagePath: "/skills/docker.svg", alt: "Docker" },
                { name: "Nginx", imagePath: "/skills/file-type-nginx.svg", alt: "Nginx" },
                { name: "Apache", imagePath: "/skills/apache.svg", alt: "Apache" },
                { name: "Git", imagePath: "/skills/git.svg", alt: "Git" },
                { name: "AWS", imagePath: "/skills/aws.svg", alt: "AWS" },
                { name: "Google Cloud", imagePath: "/skills/google-cloud.svg", alt: "Google Cloud" },
                { name: "PostgreSQL", imagePath: "/skills/postgresql.svg", alt: "PostgreSQL" },
                { name: "MySQL", imagePath: "/skills/file-type-mysql.svg", alt: "MySQL" },
                { name: "SQL Server", imagePath: "/skills/microsoft-sql-server-logo-svgrepo-com.svg", alt: "SQL Server" },
                { name: "MongoDB", imagePath: "/skills/mongodb-original.svg", alt: "MongoDB" },
                { name: "Neo4j", imagePath: "/skills/neo4j.svg", alt: "Neo4j" }
            ]
        }
    ];
    return (
        <section id="skills" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
                {t("title")}
            </h2>
            <div className='grow-1 flex flex-col justify-between'>
                {sections.map((section, indexSection) => {
                    return (
                        <div className="w-full justify-self-center" key={indexSection}>
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{section.title}</h5>
                                <span
                                    className="sm:hidden p-2"
                                    onClick={() => toggleSection(section.name)}
                                >
                                    {defaultOpen === section.name ? (
                                        <FontAwesomeIcon className='text-emerald-600' icon={faClose} size="lg" />
                                    ) : (
                                        <FontAwesomeIcon className='text-emerald-600' icon={faPlusCircle} size="lg" />
                                    )}
                                </span>
                            </div>
                            <AnimatePresence>
                                {(defaultOpen === section.name || !isMobile) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="sm:block"
                                    >
                                        <div className="flow-root">
                                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                                                {section.list.map((tech, indexTech) => {
                                                    return (
                                                        <ListTech alt={tech.alt} imagePath={tech.imagePath} name={tech.name} key={indexTech} />
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
