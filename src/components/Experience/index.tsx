import { useState } from 'react';
import Job from '../Job';

import EmblaCarousel from '../Embla/EmblaCarousel';
import { useTranslations } from 'next-intl';

export default function Experience() {
    const jobKeys = ['totvs', 'superlogica', 'qualicorp', 'brisa'] as const;

    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const toggleExperience = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const t = useTranslations("experience");


    return (
        <section
            id="experience"
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-4"
        >
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
                {t('title')}
            </h2>


            <div className='flex flex-col items-center grow-1'>
                <EmblaCarousel
                    slides={jobKeys.map((name: string, index: number) => (
                        <Job
                            key={index}
                            descritiption={t(`${name}.description`)}
                            enterprise={t(`${name}.enterprise`)}
                            functionJob={t(`${name}.function_job`)}
                            schedule={t(`${name}.schedule`)}
                            typeJob={t(`${name}.typeJob`)}
                            slug={`${name}.slug`}
                            imageSrc={t(`${name}.image_src`)}
                            imageAlt={t(`${name}.image_alt`)}
                            from={t(`${name}.from`)}
                            place={t(`${name}.place`)}
                            to={t(`${name}.to`)}
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

