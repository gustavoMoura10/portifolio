import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faGraduationCap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Banner() {
    return (
        <section id="banner" className="relative w-full h-[500px] overflow-hidden flex flex-col sm:flex-row">
            <div className="absolute inset-0 z-10">
                <Image
                    src="/codigo.jpg"
                    alt="Código"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="h-[500px] rounded"
                />
            </div>
            <div>
                <div className="foto-tleft absolute top-1/2 left-0 z-20 -translate-y-1/2 sm:-translate-x-full sm:left-[40%]">
                    <Image
                        src="/minhafoto1.jpeg"
                        alt="Minha foto"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </div>
                <div className="card-tright absolute top-1/2 right-0 z-30 -translate-y-1/2 sm:translate-x-full sm:right-[40%]  bg-white p-6 rounded-lg shadow-lg w-80">
                    <h2 className="text-2xl font-bold mb-4">Gustavo Moura</h2>
                    <div className="flex flex-row">
                        <div>
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2 text-emerald-600" />
                        </div>
                        <div>
                            <a href="mailto:gustavomoura.dev@gmail.com"><span>gustavomoura.dev@gmail.com</span></a>
                        </div>

                    </div>
                    <div className="flex flex-row">
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-emerald-600" />
                        </div>
                        <div>
                            <a href="https://wa.me/5511981214534" target="_blank">
                                <span>+55 (11) 98121-4534</span>
                            </a>
                        </div>

                    </div>
                    <div className="flex flex-row">
                        <div>
                            <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-emerald-600" />
                        </div>
                        <div>
                            <span>Ciências da Computação (2021)</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-10 justify-between">
                        <div>
                            <a href="https://www.linkedin.com/in/gustavo-moura-987137202/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-3xl text-blue-600" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/gustavoMoura10" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl text-dark-900" />
                            </a>
                        </div>
                        <div>
                            <a href="https://gitlab.com/gustavoMoura10" target="_blank">
                                <FontAwesomeIcon icon={faGitlab} className="mr-2 text-3xl text-orange-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}