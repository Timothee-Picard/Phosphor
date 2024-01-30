import FooterCustom from "@/components/footer/footer";
import Image from "next/image";
import styles from "./typiquement-vous.module.css";
import Slider from "@/components/slider/slider";
import Menu from "@/components/menu/menu";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Phosphor | Typiquement vous',
}

export default function TypiquementVous() {
   return (
       <FooterCustom>
           <Menu theme={"dark"} />
           <div className={styles.globalContainer}>
               <section className={styles.hero}>
                   <Image src={"/projects/typiquement-vous/hero.png"} alt={"aaa"} width={2880} height={1030} priority/>
               </section>
               <section className={styles.sectionInfos}>
                   <div className={styles.sectionInfosTitle}>
                       <h1>Typiquement vous</h1>
                       <p>Website / Prints / Charte graphique</p>
                   </div>
                   <div className={styles.sectionInfosGeneral}>
                       <div className={styles.item}>
                           <span>Année</span>
                           <p>2022</p>
                       </div>
                       <div className={styles.item}>
                           <span>Rôle</span>
                           <p>WebDesigner , Développeur</p>
                       </div>
                       <div className={styles.item}>
                           <span>Exploit</span>
                           <p>Awwward</p>
                       </div>
                   </div>
                   <div className={styles.sectionInfosImage}>
                       <Image src={"/projects/typiquement-vous/mockup.png"} alt={"aaa"} width={2224} height={1076} priority />
                   </div>
                   <div className={styles.sectionInfosSubGeneral}>
                       <div className={styles.item}>
                           <span>2</span>
                           <p>Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                       </div>
                       <div className={styles.item}>
                           <span>8</span>
                           <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                       </div>
                       <div className={styles.item}>
                           <span>12</span>
                           <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
                       </div>
                   </div>
               </section>
               <section className={styles.hero}>
                   <Image src={"/projects/typiquement-vous/hero2.png"} alt={"aaa"} width={2880} height={926} />
               </section>
               <section className={styles.sectionContact}>
                   <div className={styles.sectionContactContent}>
                       <p>
                           Lorem ipsum <span>dolor sit amet</span>, consectetur <span>adipiscing</span> elit, sed
                           do eiusmod tempor <span>incididunt</span> ut labore et <span>dolore magna</span> aliqua.
                       </p>
                       <button>Contactez-nous</button>
                   </div>
                   <div className={styles.sectionContactImage}>
                       <Image src={"/projects/typiquement-vous/mockup2.png"} alt={"aaa"} width={1360} height={1490} />
                   </div>
               </section>
               <section className={styles.sectionSlider}>
                   <Slider />
               </section>
           </div>
       </FooterCustom>
   )
}
