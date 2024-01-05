import styles from './page.module.css'
import Slider from "@/components/slider/slider";
import FooterCustom from "@/components/footer/footer";
import Menu from "@/components/menu/menu";
import Contact from "@/components/contact/contact";

export default function Home() {
    return (
        <FooterCustom>
            <section className={styles.sectionSlider}>
                <Menu />
                <div className={`${styles.corner} ${styles.top} ${styles.right}`}/>
                <div className={`${styles.corner} ${styles.top} ${styles.left}`}/>
                <div className={`${styles.corner} ${styles.bottom} ${styles.right}`}/>
                <div className={`${styles.corner} ${styles.bottom} ${styles.left}`}/>
                <div className={styles.sliderContainer}>
                    <Slider/>
                </div>
            </section>
            <section className={styles.sectionSolution}>
                <div className={`${styles.corner} ${styles.top} ${styles.right} ${styles.borderWhite}`}/>
                <div className={`${styles.corner} ${styles.top} ${styles.left} ${styles.borderWhite}`}/>
                <div className={`${styles.corner} ${styles.bottom} ${styles.right} ${styles.borderWhite}`}/>
                <div className={`${styles.corner} ${styles.bottom} ${styles.left} ${styles.borderWhite}`}/>
                <h1>Phosphor</h1>
                <div className={styles.sectionContent}>
                    <div className={styles.test2}>
                        <div className={styles.miaou}>
                            <div className={`${styles.content1} ${styles.colored}`}/>
                            <div className={`${styles.content2} ${styles.colored}`}/>
                            <div className={`${styles.content3} ${styles.colored}`}/>
                        </div>
                        <h2>Choisissez la solution<br/> qui vous <span>convient</span> le mieux</h2>
                        <div className={styles.test3}>
                            <div className={styles.content1}>
                                <h3>Conception site internet</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                                <button>Decouvrir</button>
                            </div>
                            <div className={styles.content2}>
                                <h3>Application mobile </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                            <div className={styles.content3}>
                                <h3>Identité graphique</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </FooterCustom>
    )
}
