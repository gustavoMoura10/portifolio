import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="aboutMe" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800">
      <Image
        src="/about-me-image.jpg"
        alt="Código"
        width={100}
        height={100}
        quality={100}
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sobre mim</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Olá! Sou um Desenvolvedor Full-Stack de São Paulo, Brasil, apaixonado por tecnologia e inovação. Graduado em Ciência da Computação (2021), trabalho com desenvolvimento de software desde 2018, sempre buscando aprimorar minhas habilidades e acompanhar as tendências do mercado.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Ao longo da minha trajetória, desenvolvi soluções que otimizam processos, automatizam integrações e melhoram a experiência do usuário, sempre com foco em performance e escalabilidade. Tenho experiência tanto no back-end, criando APIs robustas e eficientes, quanto no front-end, desenvolvendo interfaces intuitivas e dinâmicas.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Além do desenvolvimento de software, sou um entusiasta das artes e do cinema, sempre buscando novas inspirações dentro e fora da tecnologia.
        </p>
      </div>
    </section>
  );
};