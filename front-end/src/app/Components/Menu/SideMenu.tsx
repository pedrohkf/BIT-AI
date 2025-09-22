"use client"
import styles from './SideMenu.module.css'

import HelpIcon from "../Icons/Help"
import DashboardIcon from "../Icons/Dashboard"
import CalendarIcon from "../Icons/Calendar"
import IAsIcon from "../Icons/Ias";
import FavoritosIcon from "../Icons/Favorite";
import MetricasIcon from "../Icons/Metrics";
import PagesIcon from "../Icons/Pages";
import LeadsIcon from "../Icons/Leads";
import FunilIcon from "../Icons/Funel";
import MenuIcon from "../Icons/menu";

import Link from 'next/link';
import { useEffect, useState } from 'react'

const menuItems = [
    { to: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
    { to: "ias", label: "Todas as IA's", icon: <IAsIcon /> },
    { to: "favoritos", label: "Favoritos", icon: <FavoritosIcon /> },
    { to: "metricas", label: "Métricas", icon: <MetricasIcon /> },
    { to: "ladingPages", label: "Lading Pages", icon: <PagesIcon /> },
    { to: "calendar", label: "Calendário", icon: <CalendarIcon /> },
    { to: "leads", label: "Leads", icon: <LeadsIcon /> },
    { to: "funis", label: "Funil", icon: <FunilIcon /> },
    { to: "help", label: "Ajuda", icon: <HelpIcon /> },
];

export default function SideMenu() {
    const [activeLink, setActiveLink] = useState<string>("/dashboard");
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 500);

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [])


    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault()
        const clickedPath = event.currentTarget.getAttribute("href");

        if (clickedPath) setActiveLink(clickedPath);
    };

    return (
        <div className={styles.container}>
            <div onClick={() => setIsSmallScreen(!isSmallScreen)}>
                <MenuIcon className={isSmallScreen ? styles.menuBarDesactived : styles.menuBarActived} />
            </div>

            <div className={isSmallScreen ? styles.menuLayoutDesactived : styles.menuLayout}>

                <h2 data-text="Awesome">
                    <span className="actual-text">&nbsp;BIT.AI&nbsp;</span>
                    <span aria-hidden="true" className={styles.hoverText}>&nbsp;BIT.AI&nbsp;</span>
                </h2>
                <ul className={styles.menu}>
                    {menuItems.map((item) => (
                        <li
                            key={item.to}
                            className={activeLink === item.to ? styles.active : ""}
                            onClick={handleClick}
                        >
                            <Link href={"/bit-ai/" + item.to}>{item.icon}</Link>
                            <Link href={"/bit-ai/" + item.to} className={styles.text}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li>Sair</li>
                </ul>
            </div>
        </div >
    );
}
