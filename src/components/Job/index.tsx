import Image from "next/image";

export default function Job(
    {
        imageSrc,
        imageAlt,
        functionJob,
        enterprise,
        schedule,
        from,
        to,
        place,
        typeJob,
        descritiption,
        toggleExperience,
        openIndex,
        setOpenIndex,
        slug
    }
        : {
            imageSrc: string,
            imageAlt: string,
            functionJob: string,
            enterprise: string,
            schedule: string,
            from: string,
            to: string,
            place: string,
            typeJob: string,
            descritiption: string,
            toggleExperience: (index: string) => void,
            openIndex: string,
            setOpenIndex: (index: string) => void,
            slug: string
        }

) {
    return (
        <div
            className={`mb-4 flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm md:flex-row ${openIndex === slug ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={100}
                height={100}
                quality={100}
                className="object-cover mt-2 w-50 h-50 md:max-w-xs md:h-48 rounded-full md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{functionJob}</h3>
                <h4 className="text-gray-600 dark:text-gray-400">{enterprise} · {schedule}</h4>
                <h4 className="text-gray-600 dark:text-gray-400">{from} - {to}</h4>
                <h4 className="text-gray-600 dark:text-gray-400">{place} ({typeJob})</h4>

                <button
                    onClick={() => toggleExperience(slug)}
                    className="text-emerald-900 dark:text-emerald-400 mt-2 md:hidden"
                >
                    {openIndex === slug ? 'Ver menos' : 'Ver mais'}
                </button>

                <p className={`text-gray-900 dark:text-gray-300 mt-3 ${openIndex === slug || 'md:block hidden'}`}>
                    {descritiption}
                </p>
            </div>
        </div>
    )
}