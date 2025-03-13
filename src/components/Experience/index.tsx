import { useState } from 'react';
import Job from '../Job';

import EmblaCarousel from '../Embla/EmblaCarousel';

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const toggleExperience = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const jobs = [
        {
            imageSrc: "/experiences/superlogica.jpeg",
            imageAlt: "Superlogica",
            functionJob: "Desenvolvedor Back-End Pleno",
            enterprise: "Superlógica Tecnologias",
            schedule: "Tempo integral",
            from: "Dez 2021",
            to: "Presente",
            place: "São Paulo, Brasil",
            typeJob: "Remoto",
            descritiption: `
                Gerenciamento de banco de dados e desenvolvimento de automações para integração de dados de serviços de terceiros no sistema. Além disso, implementei funcionalidades no sistema que permitiram aos próprios usuários realizar a implantação desses dados de forma autônoma, reduzindo a dependência de suporte técnico e otimizando o fluxo operacional. Também foi implementada soluções de IA para análise de padrões de sistemas terceiros, mapeando automaticamente esses dados ao nosso padrão e aprimorando a eficiência da integração.
            `,
            slug: 'superlogica'
        },
        {
            imageSrc: "/experiences/qualicorp.jpeg",
            imageAlt: "Qualicorp",
            functionJob: "Desenvolvedor Trainee II Fullstack",
            enterprise: "Qualicorp",
            schedule: "Tempo integral",
            from: "Fev 2021",
            to: "Dez 2021",
            place: "São Paulo, Brasil",
            typeJob: "Remoto",
            descritiption: `
                Atuação no desenvolvimento full-stack com foco em Node.js e Vue.js, incluindo a criação de telas de serviços para o gerenciamento de planos de saúde, com interface intuitiva e funcional. No backend, desenvolvi microserviços utilizando Node.js, otimizando processos internos e garantindo a escalabilidade e a integração eficiente entre diferentes módulos do sistema.
            `,
            slug: 'qualicorp'
        },
        {
            imageSrc: "/experiences/brisa.jpeg",
            imageAlt: "Brisa",
            functionJob: "Desenvolvedor Júnior",
            enterprise: "BRISA Tecnologia",
            schedule: "Tempo integral",
            from: "Jun 2019",
            to: "Fev 2021",
            place: "São Paulo, Brasil",
            typeJob: "Presencial",
            descritiption: `
                Atuação no desenvolvimento de softwares geral para prestação de serviço a terceiros. Desenvolvimento tanto full-stack de frontend e backend utilizando as mais recentes técnologias do mercado como Node.js, Java Spring Boot, Angular, Vue.js, React, React Native entre outras. Também atuei na automação de serviços para o ramo de hotelaria nos Estados Unidos, para disparo de email, web scraping e gerenciamento de sistemas internos.
            `,
            slug: 'brisa'
        }
    ];

    return (
        <section
            id="experience"
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4"
        >
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
                Experiência Profissional
            </h2>


            <div className='flex flex-col items-center grow-1'>
                <EmblaCarousel
                    slides={jobs.map((job, index) => (
                        <Job
                            key={index}
                            {...job}
                            toggleExperience={toggleExperience}
                            openIndex={openIndex ?? ''}
                            setOpenIndex={setOpenIndex}
                        />

                    ))}
                    options={{
                        loop: true,
                        align: 'center', // Centraliza o slide ativo
                        slidesToScroll: 1,
                        inViewThreshold: 0.5, // Define a quantidade do slide que deve estar visível
                    }}
                    onSlideChange={() => setOpenIndex(null)}
                />
            </div>

        </section>
    );
}

