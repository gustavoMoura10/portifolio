import { useState } from 'react';
import Job from '../Job';

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleExperience = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="experience"
            className="flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm md:flex-row md:max-w-xl"
        >
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Experiência Profissional
                </h2>
                <Job
                    imageSrc="/experiences/superlogica.jpeg"
                    imageAlt="Superlogica"
                    functionJob="Desenvolvedor Back-End Pleno"
                    enterprise="Superlógica Tecnologias"
                    schedule="Tempo integral"
                    from="Dez 2021"
                    to="Presente"
                    place="São Paulo, Brasil"
                    typeJob="Remoto"
                    descritiption={`
                     Gerenciamento de banco de dados e desenvolvimento de automações para integração de dados de serviços de terceiros no sistema. Além disso, implementei funcionalidades no sistema que permitiram aos próprios usuários realizar a implantação desses dados de forma autônoma, reduzindo a dependência de suporte técnico e otimizando o fluxo operacional. Também foi implementada soluções de IA para análise de padrões de sistemas terceiros, mapeando automaticamente esses dados ao nosso padrão e aprimorando a eficiência da integração.    
                    `}
                    toggleExperience={toggleExperience}
                    openIndex={openIndex ?? ''}
                    setOpenIndex={setOpenIndex}
                    slug={'superlogica'}
                />
                <Job
                    imageSrc="/experiences/qualicorp.jpeg"
                    imageAlt="Qualicorp"
                    functionJob="Desenvolvedor Trainee II Fullstack"
                    enterprise="Qualicorp"
                    schedule="Tempo integral"
                    from="Fev 2021"
                    to="Dez 2021"
                    place="São Paulo, Brasil"
                    typeJob="Remoto"
                    descritiption={`
                        Atuação no desenvolvimento full-stack com foco em Node.js e Vue.js, incluindo a criação de telas de serviços para o gerenciamento de planos de saúde, com interface intuitiva e funcional. No backend, desenvolvi microserviços utilizando Node.js, otimizando processos internos e garantindo a escalabilidade e a integração eficiente entre diferentes módulos do sistema.
                    `}
                    toggleExperience={toggleExperience}
                    openIndex={openIndex ?? ''}
                    setOpenIndex={setOpenIndex}
                    slug={'qualicorp'}
                />
                <Job
                    imageSrc="/experiences/brisa.jpeg"
                    imageAlt="Brisa"
                    functionJob="Desenvolvedor Júnior"
                    enterprise="BRISA Sociedade para o Desenvolvimento da Tecnologia da Informação"
                    schedule="Tempo integral"
                    from="Jun 2019"
                    to="Fev 2021"
                    place="São Paulo, Brasil"
                    typeJob="Presencial"
                    descritiption={`
                        Atuação no desenvolvimento de softwares geral para prestação de serviço a terceiros. Desenvolvimento tanto full-stack de frontend e backend utilizando as mais recentes técnologias do mercado como Node.js, Java Spring Boot, Angular, Vue.js, React, React Native entre outras. Também atuei na automação de serviços para o ramo de hotelaria nos Estados Unidos, para disparo de email, web scraping e gerenciamento de sistemas internos.Atuação no desenvolvimento de softwares geral para prestação de serviço a terceiros. Desenvolvimento tanto full-stack de frontend e backend utilizando as mais recentes técnologias do mercado como Node.js, Java Spring Boot, Angular, Vue.js, React, React Native entre outras. Também atuei na automação de serviços para o ramo de hotelaria nos Estados Unidos, para disparo de email, web scraping e gerenciamento de sistemas internos.
                        `}
                    toggleExperience={toggleExperience}
                    openIndex={openIndex ?? ''}
                    setOpenIndex={setOpenIndex}
                    slug={'brisa'}
                />
            </div>
        </section>
    );
};

