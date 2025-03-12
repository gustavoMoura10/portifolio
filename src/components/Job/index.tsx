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
            className={`mb-4 flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${openIndex === slug ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
        >
            {/* Imagem no topo */}
            <div className="w-full flex justify-center p-6">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={120}
                    height={120}
                    quality={100}
                    className="object-cover w-32 h-32 rounded-full"
                />
            </div>

            {/* Texto abaixo da imagem */}
            <div className="flex flex-col justify-between p-6 leading-normal w-full">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">{functionJob}</h3>
                <h4 className="text-xl text-gray-600 dark:text-gray-400 text-center">{enterprise} · {schedule}</h4>
                <h4 className="text-xl text-gray-600 dark:text-gray-400 text-center">{from} - {to}</h4>
                <h4 className="text-xl text-gray-600 dark:text-gray-400 text-center">{place} ({typeJob})</h4>

                {/* Botão "Ver mais" ou "Ver menos" */}
                <button
                    onClick={() => toggleExperience(slug)}
                    className="text-base text-emerald-900 dark:text-emerald-400 mt-4 text-center"
                >
                    {openIndex === slug ? 'Ver menos' : 'Ver mais'}
                </button>

                {/* Descrição (visível apenas se o Job estiver aberto) */}
                <p className={`text-sm text-gray-900 dark:text-gray-300 mt-4 ${openIndex === slug ? 'block' : 'hidden'}`}>
                    {descritiption}
                </p>
            </div>
        </div>
    )
}