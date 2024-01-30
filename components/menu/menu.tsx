"use client"
import Link from 'next/link'
import styles from './menu.module.css'
import {useEffect, useState} from "react";
import Image from "next/image";

type MenuProps = {
    theme?: string
}
export default function Menu(props: MenuProps){
    const {theme = "none"} = props;
    const [scrollVertical, setScrollVertical] = useState(0);
    const [openedMenu, setOpenedMenu] = useState(false);

    const [menu, setMenu] = useState([
        {
            name: "Réalisations",
            link: "/"
        },
        {
            name: "Prestations",
            link: "/prestations"
        },/*
        {
            name: "Services",
            link: "/services"
        },
        {
            name: "Thèmes",
            link: "/themes"
        },
        {
            name: "Typographies",
            link: "/typographies"
        }*/
    ]);

    function stateMenu(){
        setOpenedMenu((prevState) => !prevState);
    }

    const handleScroll = () => {
        const scrolled = window.scrollY;
        setScrollVertical(scrolled)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        // <header className={`${styles.header} ${(scrollVertical > 50) ? styles.sticky : ""}`}>
        <header className={`${styles.header} ${(theme === "dark")? styles.dark : ""}`}>
             <div className={styles.names}>
                 <p><b>Derny</b> Enzo</p>
                 <p><b>Picard</b> Timothée</p>
             </div>
            <nav>
                <ul>
                    {
                        menu.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link href={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className={styles.icon}>
                <Image src={"/ico-info.svg"} alt={"aaa"} width={34} height={34} onClick={() => stateMenu()} />
            </div>
            <div className={`${styles.openedMenu} ${openedMenu? styles.isOpen : styles.isClose}`}>
                <div className={styles.openedMenuNoContent} onClick={() => stateMenu()}></div>
                <div className={styles.openedMenuContent}>
                    <div className={styles.close} onClick={() => stateMenu()}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="16.5" stroke="white"/>
                            <g>
                                <path
                                    d="M17.0238 17.8894C16.9384 17.97 16.8862 18.0174 16.8368 18.0669C15.6123 19.2914 14.3871 20.5145 13.1639 21.7411C12.9613 21.9444 12.7377 22.0603 12.4463 21.9667C12.0187 21.8299 11.8615 21.3237 12.138 20.9692C12.182 20.913 12.2342 20.8635 12.285 20.8127C13.5 19.597 14.7151 18.382 15.9314 17.1677C15.9816 17.1175 16.0426 17.0789 16.1124 17.0233C16.0324 16.9393 15.9816 16.883 15.9274 16.8295C14.6981 15.6003 13.4702 14.371 12.2396 13.1431C12.0512 12.9547 11.9503 12.7426 12.0235 12.475C12.1475 12.0237 12.6699 11.8529 13.0365 12.1436C13.0975 12.1917 13.1517 12.2493 13.2066 12.3042C14.4176 13.5145 15.6278 14.7254 16.8388 15.9357C16.8883 15.9852 16.9404 16.0319 17.0421 16.1268C17.0909 16.0523 17.1241 15.9764 17.1783 15.9221C18.4008 14.6956 19.6266 13.4731 20.8491 12.2466C21.0544 12.0406 21.2835 11.9396 21.5708 12.0386C21.9781 12.1782 22.1298 12.6667 21.8737 13.0137C21.8235 13.0815 21.7619 13.1404 21.7022 13.2001C20.4967 14.4063 19.2912 15.6125 18.0836 16.8173C18.0287 16.8715 17.9589 16.9108 17.881 16.9678C17.9684 17.0599 18.0199 17.1162 18.0735 17.1697C19.298 18.3942 20.5211 19.6194 21.747 20.8425C21.9455 21.0404 22.056 21.26 21.9686 21.5439C21.8337 21.983 21.3201 22.1422 20.9616 21.8556C20.8904 21.7987 20.8281 21.7316 20.7637 21.6672C19.5711 20.4752 18.3791 19.2833 17.1878 18.0899C17.1329 18.035 17.0882 17.9693 17.0224 17.8894H17.0238Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath>
                                    <rect width="10" height="10" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <Image src={"/arrowDown.png"} alt={""} width={204} height={156} className={styles.openedMenuContentImage}/>
                    <h2>Discuton<span>s</span></h2>
                    <p>Entrer en contact : <a>contact@phosphor.fr</a></p>
                    <p>Rester en contact : <a>@phosphor</a></p>
                    <button>Contactez-nous</button>
                </div>
            </div>
        </header>
    )

}