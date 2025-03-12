import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMe() {
  // Variantes de animação para os cards
  const cardVariants = {
    offscreen: {
      x: -100, // Começa 100px à esquerda
      opacity: 0, // Inicia invisível
    },
    onscreen: {
      x: 0, // Move para a posição original
      opacity: 1, // Torna visível
      transition: {
        type: 'spring', // Tipo de transição suave
        stiffness: 100, // Rigidez da animação
        delay: 0.2, // Pequeno atraso para cada card
      },
    },
  };

  return (
    <section id="aboutMe" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-6">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Sobre Mim
      </h2>

      <div className="flex flex-col gap-8">
        {/* Card de Resumo */}
        <motion.div
          initial="offscreen" // Estado inicial
          whileInView="onscreen" // Animação ao entrar na tela
          viewport={{ once: true, amount: 0.5 }} // Dispara a animação uma vez, quando 50% do card estiver visível
          variants={cardVariants} // Variantes de animação
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="w-full md:w-1/3">
            <Image
              src={'/lamp.webp'}
              alt="Resumo"
              width={520}
              height={520}
              quality={100}
              className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Resumo</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Graduado em Ciências da Computação (2021), com sólida experiência no desenvolvimento de software desde 2018. Ao longo da minha trajetória, desenvolvi habilidades em diversas tecnologias, incluindo Java, JavaScript, TypeScript, React, React Native, Vue.js, Angular, Node.js, Spring Boot, além de bancos de dados como MySQL, PostgreSQL, MongoDB e Neo4j. Tenho experiência com Computação em Nuvem, CI/CD e testes unitários.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Minha experiência inclui o gerenciamento de bancos de dados, desenvolvimento de automações para integrar dados de serviços de terceiros e a implementação de soluções baseadas em IA para otimização de processos e integração de sistemas. Também criei funcionalidades que permitem aos usuários realizarem implantações de dados de forma autônoma, reduzindo a dependência de suporte técnico. Trabalhei no desenvolvimento full-stack, criando microserviços, otimizando processos internos e garantindo a escalabilidade e eficiência dos sistemas. Além disso, implementei soluções de automação de processos para setores como saúde e hotelaria, incluindo disparo de e-mails, web scraping e integração de sistemas internos.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Sou apaixonado por novas tecnologias e estou sempre em busca de aprimorar minhas habilidades para oferecer soluções inovadoras e eficientes. Além disso, tenho um grande interesse pelas artes gerais e pelo cinema.
            </p>
          </div>
        </motion.div>

        {/* Card de Graduação */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          transition={{ delay: 0.4 }} // Atraso maior para o segundo card
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="w-full md:w-1/3">
            <Image
              src={'/graduation.webp'}
              alt="Estudos"
              width={520}
              height={520}
              quality={100}
              className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Graduação</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Sou formado em <strong>Ciência da Computação</strong> pela <strong>Universidade Paulista (UNIP)</strong>, com início em Janeiro de 2017 e conclusão em Dezembro de 2020.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Durante o curso, adquiri conhecimentos em diversas áreas, incluindo:
            </p>
            <ul className="list-disc list-inside mb-3 font-normal text-gray-700 dark:text-gray-400">
              <li>Lógica de Programação</li>
              <li>Desenvolvimento Web</li>
              <li>Banco de Dados</li>
              <li>Matemática Aplicada para Computação</li>
              <li>Estatística</li>
              <li>Inteligência Artificial</li>
              <li>Sistemas Operacionais</li>
              <li>Arquitetura de Software</li>
              <li>Arquitetura Computacional</li>
              <li>Redes de Computadores</li>
            </ul>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Esses conhecimentos me proporcionaram uma base sólida para atuar no desenvolvimento de software, desde a concepção de soluções até a implementação e manutenção de sistemas complexos.
            </p>
          </div>
        </motion.div>

        {/* Card de Línguas */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          transition={{ delay: 0.6 }} // Atraso maior para o terceiro card
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="w-full md:w-1/3">
            <Image
              src={'/languages.avif'}
              alt="Idiomas"
              width={520}
              height={520}
              quality={100}
              className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Línguas</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/br.svg"
                  alt="Bandeira do Brasil"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">Português (Nativo)</p>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/us.svg"
                  alt="Bandeira dos EUA"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">Inglês (Avançado)</p>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/es.svg"
                  alt="Bandeira da Espanha"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">Espanhol (Básico)</p>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/fr.svg"
                  alt="Bandeira da França"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">Francês (Básico)</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}