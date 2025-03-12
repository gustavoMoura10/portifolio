import Image from "next/image";

export default function ListTech({
    name,
    imagePath,
    alt
}: {
    name: string,
    imagePath: string,
    alt: string
}) {
    return (
        <li className="py-3">
            <div className="flex flex-col items-center sm:flex-row sm:items-center">
                <Image src={imagePath} alt={alt} width={40} height={40} className="mb-2 sm:mb-0 sm:mr-4" />
                <span className="text-sm text-gray-900 dark:text-white">{name}</span>
            </div>
        </li>
    );
}