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
            functionJob: "Analista Desenvolvedor Pleno",
            enterprise: "Superlógica Tecnologias",
            schedule: "Tempo integral",
            from: "Dez 2021",
            to: "Presente",
            place: "São Paulo, Brasil",
            typeJob: "Remoto",
            descritiption: `
                Gerenciei bancos de dados e desenvolvi automações para integração de dados de serviços de terceiros, utilizando Node.js (JavaScript, TypeScript) e Python para extrair informações em XML, SQL, Excel e JSON, adaptando-as a um formato padronizado. Para otimizar a importação, implementei um fluxo baseado em AWS (EC2, Lambdas e SQS), permitindo processamento em lote e execuções paralelas, garantindo eficiência e evitando gargalos no banco de dados. No front-end, utilizei Angular para criar interfaces intuitivas que facilitam a visualização e o gerenciamento dos formatos de importação.
                
                Além disso, implementei soluções de IA para analisar e mapear automaticamente padrões nos dados externos, ajustando-os ao modelo interno para garantir consistência e eficiência na integração. Para suporte aos consultores, utilizei SGBDs (DBeaver), permitindo fluxos ágeis de atualização, inserção, deleção e consulta de dados. Com atalhos internos, foi possível realizar operações em massa sem a necessidade de escrever queries complexas manualmente, tornando o processo mais rápido e seguro. Essas soluções reduziram a necessidade de suporte técnico, otimizaram o fluxo operacional e aprimoraram a escalabilidade do sistema.
            `,
            slug: 'superlogica'
        },
        {
            imageSrc: "/experiences/qualicorp.jpeg",
            imageAlt: "Qualicorp",
            functionJob: "Analista Desenvolvedor Trainee II Fullstack",
            enterprise: "Qualicorp",
            schedule: "Tempo integral",
            from: "Fev 2021",
            to: "Dez 2021",
            place: "São Paulo, Brasil",
            typeJob: "Remoto",
            descritiption: `
                Atuei como Analista Desenvolvedor Trainee II Fullstack em um projeto terceirizado para a Qualicorp, focado no desenvolvimento de soluções para o gerenciamento de planos de saúde. Utilizei Vue.js para criar dashboards interativos, permitindo a visualização de contratos, histórico de atualizações da ANS, uso do plano em diferentes períodos e funcionalidades administrativas, como atualização de cadastros, disparo de mensagens e gestão de dados.

                No backend, desenvolvi microserviços em Node.js, estruturando APIs que gerenciavam fluxos específicos do sistema, garantindo escalabilidade e integração eficiente entre módulos. Para armazenar e gerenciar as relações entre os dados, utilizei Neo4J, permitindo atualizações massivas e otimização na gestão das informações dos planos de saúde.
            `,
            slug: 'qualicorp'
        },
        {
            imageSrc: "/experiences/brisa.jpeg",
            imageAlt: "Brisa",
            functionJob: "Analista Desenvolvedor Júnior",
            enterprise: "BRISA Tecnologia",
            schedule: "Tempo integral",
            from: "Jun 2019",
            to: "Fev 2021",
            place: "São Paulo, Brasil",
            typeJob: "Presencial",
            descritiption: `
                Atuei como Analista Desenvolvedor Júnior em uma Fábrica de Software que prestava serviços a terceiros, desenvolvendo soluções full-stack para diferentes setores. Utilizei Node.js, Java Spring Boot, Angular, Vue.js, React e React Native para criar sistemas personalizados, além de automações para otimizar operações administrativas.

                No setor de hotelaria, implementei Angular para boilerplates de templates, Vue.js para telas administrativas e Java Spring Boot para APIs de gerenciamento de imóveis. Utilizei Node.js e Express para disparo massivo de e-mails e Selenium e Puppeteer para automações em ERPs e CRMs. Desenvolvi interfaces interativas em React para totens de check-in e aplicativos mobile em React Native para check-in remoto dos clientes.

                No setor de shopping centers, desenvolvi dashboards em React para monitoramento de fluxo de pessoas via câmeras com IA. Criei APIs em Node.js com Express para exibir esses dados e utilizei MongoDB para armazenamento e formatação das informações. Para gerenciar o grande volume de dados captados, implementei um fluxo baseado em AWS (SQS, Lambda), garantindo eficiência no processamento e integração
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

