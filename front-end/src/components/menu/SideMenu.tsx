"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import DashboardIcon from "../Icons/Dashboard"
import IAsIcon from "../Icons/Ias";
import LeadsIcon from "../Icons/Leads";
import MenuIcon from "../Icons/menu";
import Exit from '../Icons/Exit';

import { logout } from '@/services/auth';

import styles from './SideMenu.module.css'

const menuItems = [
    { to: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
    { to: "ias", label: "Todas as IA's", icon: <IAsIcon /> },
    { to: "leads", label: "Leads", icon: <LeadsIcon /> },
];

export default function SideMenu() {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>("/dashboard");
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 500);

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [])


    const handleLogout = () => {
        logout();
        router.push('/auth');
    };

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
                            <Link href={"/bit-ai/" + item.to} className={styles.icon}>{item.icon}</Link>
                            <Link href={"/bit-ai/" + item.to} className={styles.text}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={styles.exit} onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <Exit />
                    <li>Sair</li>
                </ul>
            </div>
        </div >
    );
}
