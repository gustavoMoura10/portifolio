// components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 cursor-pointer right-8 p-2 bg-emerald-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            aria-label="Ir para o topo"
        >
            <div className="ml-2 mr-2">
                <FontAwesomeIcon icon={faArrowUp} size="sm" />
            </div>
        </button>
    );
};

export default ScrollToTopButton;