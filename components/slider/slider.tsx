"use client";

import Link from 'next/link';
import Image from "next/image";
import {useEffect, useRef} from "react";

import Swiper from "swiper/bundle";
import 'swiper/swiper-bundle.css';

import './slider.css'

export default function Slider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const mySwiper = new Swiper(swiperRef.current, {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                loop: true,
                slidesPerView: 1,
                lazyPreloadPrevNext: 1,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    426: {
                        slidesPerView: 2,
                        coverflowEffect: {
                            stretch: -43,
                        }
                    },
                    769: {
                        slidesPerView: 5,
                        coverflowEffect: {
                            stretch: -43,
                        }
                    },
                    1025: {
                        slidesPerView: 5,
                        coverflowEffect: {
                            stretch: -60,
                        }
                    },
                    1440: {
                        slidesPerView: 5,
                        coverflowEffect: {
                            stretch: -80,
                        }
                    },
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: -80,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
            });

            return () => {
                if (mySwiper) {
                    mySwiper.destroy();
                }
            };
        }
    }, []);


    return (
        <section id="tranding">
            <div>
                <div className="swiper tranding-slider" ref={swiperRef}>
                    <div className="swiper-wrapper">
                    {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/typiquement-vous`}>
                                    <Image
                                        src="/projects/typiquement-vous/img.png"
                                        width={788}
                                        height={1064}
                                        alt="Tranding"
                                        priority />
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <Link href={`/realisation/typiquement-vous`}>
                                    <h2>Typiquement vous</h2>
                                </Link>
                            </div>
                        </div>
                        {/* Slide-end */}
                        {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/sas-sahin`}>
                                    <Image
                                        src="/projects/sas-sahin/img.png"
                                        width={842}
                                        height={1112}
                                        alt="Tranding"
                                        loading="lazy" />
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <Link href={`/realisation/sas-sahin`}>
                                    <h2>SAS Sahin</h2>
                                </Link>
                            </div>
                        </div>
                        {/* Slide-end */}
                        {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/sas-sahin`}>
                                <Image
                                    src="/projects/sas-sahin/img.png"
                                    width={842}
                                    height={1112}
                                    alt="Tranding"
                                    loading="lazy" />
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <Link href={`/realisation/sas-sahin`}>
                                    <h2>SAS Sahin</h2>
                                </Link>
                            </div>
                        </div>
                        {/* Slide-end */}
                        {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/sas-sahin`}>
                                    <Image
                                        src="/projects/sas-sahin/img.png"
                                        width={842}
                                        height={1112}
                                        alt="Tranding"
                                        loading="lazy" />
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <Link href={`/realisation/sas-sahin`}>
                                    <h2>SAS Sahin</h2>
                                </Link>
                            </div>
                        </div>
                        {/* Slide-end */}
                        {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/sas-sahin`}>
                                    <Image
                                    src="/projects/sas-sahin/img.png"
                                    width={842}
                                    height={1112}
                                    alt="Tranding"
                                    loading="lazy" />
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <h2>SAS Sahin</h2>
                            </div>
                        </div>
                        {/* Slide-end */}
                        {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/sas-sahin`}>
                                    <Image
                                        src="/projects/sas-sahin/img.png"
                                        width={842}
                                        height={1112}
                                        alt="Tranding"
                                        loading="lazy"/>
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <Link href={`/realisation/sas-sahin`}>
                                    <h2>SAS Sahin</h2>
                                </Link>
                            </div>
                        </div>
                        {/* Slide-end */}
                        {/* Slide-start */}
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <Link href={`/realisation/prenom`}>
                                    <Image
                                        src="/projects/prenom/img.png"
                                        width={840}
                                        height={1112}
                                        alt="Tranding"
                                        loading="lazy" />
                                </Link>
                            </div>
                            <div className="tranding-slide-content">
                                <Link href={`/realisation/prenom`}>
                                    <h2>Prénom</h2>
                                </Link>
                            </div>
                        </div>
                        {/* Slide-end */}
                    </div>

                    {/*<div className="tranding-slider-control">
                        <div className="swiper-button-prev slider-arrow"></div>
                        <div className="swiper-button-next slider-arrow"></div>
                        <div className="swiper-pagination"></div>
                    </div>*/}

                </div>
            </div>
        </section>
    )
}