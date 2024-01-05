"use client"

import Image from "next/image";
import styles from './footer.module.css';
import React, {useEffect, useState} from "react";

export default function FooterCustom(props: { children: React.ReactNode }) {
    const {children} = props;
    const [scrollVertical, setScrollVertical] = useState(0);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrolled = window.scrollY;
        // @ts-ignore
        const scrollableHeight = (scrollHeight - clientHeight) - document.getElementById("footer").offsetHeight
        const percentage = (scrolled / scrollableHeight) * 100;
        setScrollVertical(percentage)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // La dépendance vide indique que cet effet ne s'exécute qu'une seule fois


    return (
        <>
            <main className={(scrollVertical >= 100)? `minMain`: `maxMain`}>
                {children}
            </main>
            <footer className={styles.footer} id="footer">
                <section className={styles.sectionLogo}>
                    <Image src="/logo.png" alt="logo" width={1692} height={834} className={styles.logo}/>
                </section>
                <section className={styles.sectionInfos}>
                    <div className={styles.infosContact}>
                        <div className={styles.containerInfo}>
                            <h6>Adresse</h6>
                            <p>8 Boulevard Berthelot, 34000 Montpellier</p>
                        </div>
                        <div className={styles.containerInfo}>
                            <h6>Email</h6>
                            <p>Contact@phosphor.fr</p>
                        </div>
                        <div className={styles.containerInfo}>
                            <h6>Téléphone</h6>
                            <p>+33 (0)0 00 00 00 00</p>
                        </div>
                    </div>
                    <div className={styles.infosLink}>
                        <a>Contact</a>
                        <a>Projets</a>
                        <a>Tarif</a>
                    </div>
                </section>
                <section className={styles.sectionRs}>
                    <p className={styles.copyrigth}>
                        Phosphor | Copyright © 2023, All Rights Reserved
                    </p>
                    <div className={styles.containerRs}>
                        <div className={styles.rs}>
                            BE INSTA
                        </div>
                        <div className={styles.legal}>
                            <a>easter egg</a>
                            <a>Politiques de confidentialités</a>
                            <a>Mentions légales</a>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}