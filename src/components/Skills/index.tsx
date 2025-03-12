import { useState } from 'react';
import ListTech from '../ListTech';

export default function Skills() {
    const [defaultOpen, setDefaultOpen] = useState(null);

    const toggleSection = (section: any) => {
        setDefaultOpen(section)
    };

    return (
        <section id="skills" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4">
            <div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Habilidades</h2>
            </div>
            <div className="w-full justify-self-center">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Linguagens</h5>
                    <button
                        className="sm:hidden p-2 bg-emerald-600 text-white rounded"
                        onClick={() => toggleSection("language")}
                    >
                        {defaultOpen === "language" ? '-' : '+'}
                    </button>
                </div>
                <div className={`${defaultOpen === "language" ? 'block' : 'hidden'} sm:block`}>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                            <ListTech name="Javascript" imagePath="/skills/javascript-js.svg" alt="Javascript" />
                            <ListTech name="HTML" imagePath="/skills/file-type-html.svg" alt="HTML" />
                            <ListTech name="CSS" imagePath="/skills/file-type-css.svg" alt="CSS" />
                            <ListTech name="Typescript" imagePath="/skills/typescript-icon.svg" alt="Typescript" />
                            <ListTech name="Java" imagePath="/skills/java.svg" alt="Java" />
                            <ListTech name="Python" imagePath="/skills/python.svg" alt="Python" />
                            <ListTech name="PHP" imagePath="/skills/php.svg" alt="PHP" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full justify-self-center mt-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Frameworks Backend | ORMs</h5>
                    <button
                        className="sm:hidden p-2 bg-emerald-600 text-white rounded"
                        onClick={() => toggleSection("backend")}
                    >
                        {defaultOpen === "backend" ? '-' : '+'}
                    </button>
                </div>
                <div className={`${defaultOpen === "backend" ? 'block' : 'hidden'} sm:block`}>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                            <ListTech name="Node.js" imagePath="/skills/nodejs.svg" alt="Node.js" />
                            <ListTech name="Express" imagePath="/skills/express-original.svg" alt="Express" />
                            <ListTech name="NextJS" imagePath="/skills/next-js.svg" alt="NextJS" />
                            <ListTech name="NestJS" imagePath="/skills/nestjs.svg" alt="NestJS" />
                            <ListTech name="Sequelize" imagePath="/skills/sequelize.svg" alt="Sequelize" />
                            <ListTech name="TypeORM" imagePath="/skills/typeorm.svg" alt="TypeORM" />
                            <ListTech name="Electron" imagePath="/skills/electron.svg" alt="Electron" />
                            <ListTech name="Socket.io" imagePath="/skills/socket-io.svg" alt="Socket.io" />
                            <ListTech name="Spring Boot" imagePath="/skills/spring-boot-1.svg" alt="Spring Boot" />
                            <ListTech name="Spring MVC" imagePath="/skills/spring.svg" alt="Spring MVC" />
                            <ListTech name="JSF" imagePath="/skills/jsf.svg" alt="JSF" />
                            <ListTech name="Hibernate" imagePath="/skills/hibernate.svg" alt="Hibernate" />
                            <ListTech name="Flask" imagePath="/skills/flask.svg" alt="Flask" />
                            <ListTech name="Zend" imagePath="/skills/zend-framework.svg" alt="Zend" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full justify-self-center mt-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Frameworks Frontend</h5>
                    <button
                        className="sm:hidden p-2 bg-emerald-600 text-white rounded"
                        onClick={() => toggleSection("frontend")}
                    >
                        {defaultOpen === "frontend" ? '-' : '+'}
                    </button>
                </div>
                <div className={`${defaultOpen === "frontend" ? 'block' : 'hidden'} sm:block`}>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                            <ListTech name="Angular" imagePath="/skills/file-type-angular.svg" alt="Angular" />
                            <ListTech name="Vue" imagePath="/skills/vue.svg" alt="Vue" />
                            <ListTech name="React" imagePath="/skills/react.svg" alt="React" />
                            <ListTech name="Bootstrap" imagePath="/skills/bootstrap.svg" alt="Bootstrap" />
                            <ListTech name="Tailwind" imagePath="/skills/tailwind-css.svg" alt="Tailwind" />
                            <ListTech name="Redux" imagePath="/skills/redux-original.svg" alt="Redux" />
                            <ListTech name="Expo" imagePath="/skills/expo.svg" alt="Expo" />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full justify-self-center mt-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Testes</h5>
                    <button
                        className="sm:hidden p-2 bg-emerald-600 text-white rounded"
                        onClick={() => toggleSection("testing")}
                    >
                        {defaultOpen === "testing" ? '-' : '+'}
                    </button>
                </div>
                <div className={`${defaultOpen === "testing" ? 'block' : 'hidden'} sm:block`}>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                            <ListTech name="JUnit" imagePath="/skills/junit.svg" alt="JUnit" />
                            <ListTech name="Jest" imagePath="/skills/file-type-jest.svg" alt="Jest" />
                            <ListTech name="PHPUnit" imagePath="/skills/file-type-phpunit.svg" alt="PHPUnit" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full justify-self-center mt-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Automação</h5>
                    <button
                        className="sm:hidden p-2 bg-emerald-600 text-white rounded"
                        onClick={() => toggleSection("automation")}
                    >
                        {defaultOpen === "automation" ? '-' : '+'}
                    </button>
                </div>
                <div className={`${defaultOpen === "automation" ? 'block' : 'hidden'} sm:block`}>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                            <ListTech name="Selenium" imagePath="/skills/selenium.svg" alt="Selenium" />
                            <ListTech name="Puppeteer" imagePath="/skills/puppeteer.svg" alt="Puppeteer" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full justify-self-center mt-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Infraestrutura</h5>
                    <button
                        className="sm:hidden p-2 bg-emerald-600 text-white rounded"
                        onClick={() => toggleSection("infrastructure")}
                    >
                        {defaultOpen === "infrastructure" ? '-' : '+'}
                    </button>
                </div>
                <div className={`${defaultOpen === "infrastructure" ? 'block' : 'hidden'} sm:block`}>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-3 gap-4">
                            <ListTech name="Linux" imagePath="/skills/linux.svg" alt="Linux" />
                            <ListTech name="Docker" imagePath="/skills/docker.svg" alt="Docker" />
                            <ListTech name="Nginx" imagePath="/skills/file-type-nginx.svg" alt="Nginx" />
                            <ListTech name="Apache" imagePath="/skills/apache.svg" alt="Apache" />
                            <ListTech name="Git" imagePath="/skills/git.svg" alt="Git" />
                            <ListTech name="AWS" imagePath="/skills/aws.svg" alt="AWS" />
                            <ListTech name="Google Cloud" imagePath="/skills/google-cloud.svg" alt="Google Cloud" />
                            <ListTech name="Postgre SQL" imagePath="/skills/postgresql.svg" alt="Postgre SQL" />
                            <ListTech name="MySQL" imagePath="/skills/file-type-mysql.svg" alt="MySQL" />
                            <ListTech name="SQL Server" imagePath="/skills/microsoft-sql-server-logo-svgrepo-com.svg" alt="SQL Server" />
                            <ListTech name="MongoDB" imagePath="/skills/mongodb-original.svg" alt="MongoDB" />
                            <ListTech name="Neo4j" imagePath="/skills/neo4j.svg" alt="Neo4j" />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
