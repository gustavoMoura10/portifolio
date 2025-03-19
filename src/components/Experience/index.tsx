import { useState } from 'react';
import Job from '../Job';

import EmblaCarousel from '../Embla/EmblaCarousel';
import { useTranslations } from 'next-intl';

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const toggleExperience = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const t = useTranslations("experience");
    const jobs = [
        {
            imageSrc: t('image_src1'),
            imageAlt: t('image_alt1'),
            functionJob: t('function_job1'),
            enterprise: t('enterprise1'),
            schedule: t('schedule1'),
            from: t('from1'),
            to: t('to1'),
            place: t('place1'),
            typeJob: t('typeJob1'),
            descritiption: t('description1'),
            slug: t('slug1')
        },
        {
            imageSrc: t('image_src2'),
            imageAlt: t('image_alt2'),
            functionJob: t('function_job2'),
            enterprise: t('enterprise2'),
            schedule: t('schedule2'),
            from: t('from2'),
            to: t('to2'),
            place: t('place2'),
            typeJob: t('typeJob2'),
            descritiption: t('description2'),
            slug: t('slug2')
        },
        {
            imageSrc: t('image_src3'),
            imageAlt: t('image_alt3'),
            functionJob: t('function_job3'),
            enterprise: t('enterprise3'),
            schedule: t('schedule3'),
            from: t('from3'),
            to: t('to3'),
            place: t('place3'),
            typeJob: t('typeJob3'),
            descritiption: t('description3'),
            slug: t('slug3')
        }
    ]



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

