import React, { useCallback, useEffect, useRef, useMemo } from 'react';
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../EmblaCarouselDotButton';
import { NextButton, PrevButton, usePrevNextButtons } from '../EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import './index.css';

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

type PropType = {
    slides: React.ReactNode[];
    options?: EmblaOptionsType;
    onSlideChange?: () => void;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options, onSlideChange }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
    const tweenFactor = useRef<number>(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    const handlePrevButtonClick = () => {
        onSlideChange?.();
        onPrevButtonClick();
    };

    const handleNextButtonClick = () => {
        onSlideChange?.();
        onNextButtonClick();
    };

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__number') as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === 'scroll';

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();
                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);
                            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                        }
                    });
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                const scale = numberWithinRange(tweenValue, 0, 1).toString();
                const tweenNode = tweenNodes.current[slideIndex];
                tweenNode.style.transform = `scale(${scale})`;
            });
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenScale(emblaApi);

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale);
    }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

    const renderedSlides = useMemo(() => slides.map((slide, index) => (
        <div className="embla__slide" key={index}>
            <div className="embla__slide__number">{slide}</div>
        </div>
    )), [slides]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">{renderedSlides}</div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={handlePrevButtonClick} disabled={prevBtnDisabled} aria-label="Previous Slide" />
                    <NextButton onClick={handleNextButtonClick} disabled={nextBtnDisabled} aria-label="Next Slide" />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;