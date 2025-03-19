import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations("about_me");
  const cardVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="aboutMe" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-6">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
        {t("title")}
      </h2>

      <div className="flex flex-col gap-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
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
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white"> {t("resume.title")}</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {t("resume.text1")}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {t("resume.text2")}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {t("resume.text3")}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.4 }}
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
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{t("degree.title")}</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {t("degree.text1")} <strong>{t("degree.text2")}</strong> {t("degree.text3")} <strong>{t("degree.text4")}</strong>{t("degree.text5")}.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {t("degree.text6")}
            </p>
            <ul className="list-disc list-inside mb-3 font-normal text-gray-700 dark:text-gray-400">
              <li>{t("degree.text7")}</li>
              <li>{t("degree.text8")}</li>
              <li>{t("degree.text9")}</li>
              <li>{t("degree.text10")}</li>
              <li>{t("degree.text11")}</li>
              <li>{t("degree.text12")}</li>
              <li>{t("degree.text13")}</li>
              <li>{t("degree.text14")}</li>
              <li>{t("degree.text15")}</li>
              <li>{t("degree.text16")}</li>
            </ul>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            {t("degree.text17")}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.6 }}
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
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{t("languages.title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/br.svg"
                  alt="Bandeira do Brasil"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">{t("languages.text1")}</p>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/us.svg"
                  alt="Bandeira dos EUA"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">{t("languages.text2")}</p>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/es.svg"
                  alt="Bandeira da Espanha"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">{t("languages.text3")}</p>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://flagcdn.com/fr.svg"
                  alt="Bandeira da França"
                  width={24}
                  height={18}
                  className="mr-2"
                />
                <p className="font-normal text-gray-700 dark:text-gray-400">{t("languages.text4")}</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}