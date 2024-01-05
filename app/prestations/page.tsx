"use client";
import FooterCustom from "@/components/footer/footer";
import Menu from "@/components/menu/menu";
import styles from "./prestations.module.css";
import {useEffect, useRef, useState} from "react";
import Contact from "@/components/contact/contact";

export default function Prestations(){
    const containerRef = useRef(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const dynamicStyle: React.CSSProperties = {
        ['--percentage' as any]: `${scrollPercentage}%`
    };

    function handleScroll() {
        if (!containerRef.current) return;
        const element: HTMLDivElement = containerRef.current;
        const ElementDistanceTop = getDistanceFromTop(element);
        const ElementHeightScrollable = element.offsetHeight - window.innerHeight;
        const CurrentScroll = window.scrollY - ElementDistanceTop;
        if(!(!(ElementHeightScrollable > CurrentScroll) || CurrentScroll < 0)){
            const percentage = Math.round((window.scrollY - ElementDistanceTop) / ElementHeightScrollable * 100);
            setScrollPercentage(percentage);
        }
    }

    function getDistanceFromTop(element: HTMLElement | null): number {
        let distance = 0;
        while (element) {
            distance += element.offsetTop;
            element = element.offsetParent as HTMLElement | null;
        }
        return distance;
    }

    useEffect(() => {
        const container = containerRef.current;
        if (container) window.addEventListener('scroll', handleScroll);
        return () => {
            if (container) window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <FooterCustom>
            <Menu />
            <section className={styles.hero}>
                <h1>Choisissez la solution <br /> qui vous <span>convient</span> le mieux</h1>
            </section>
            <section className={styles.sectionContent} style={dynamicStyle}>
                <aside>
                    <h2>Phosphor</h2>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar}>
                            <div className={styles.indicator}></div>
                        </div>
                    </div>
                </aside>
                <main ref={containerRef}>
                    <article>
                        <h2>
                        Conception
                            <br/>
                            site internet
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={styles.links}>
                            <a href={"#contact"}>Contactez-nous</a>
                            <a href={"#contact"}>Contactez-nous</a>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </article>
                    <article>
                        <h2>
                            Conception
                            <br/>
                            site internet
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </article>
                    <article>
                        <h2>
                            Conception
                            <br/>
                            site internet
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </article>
                    <article>
                        <h2>
                            Conception
                            <br/>
                            site internet
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className={styles.container}>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </article>
                </main>
            </section>
            <Contact id="contact"/>
        </FooterCustom>
    )
}