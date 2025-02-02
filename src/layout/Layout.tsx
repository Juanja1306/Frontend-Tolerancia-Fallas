import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./Layout.module.css";

export default function Layout() {
    return (
        <>
            <Header />
            <main className={styles.main__background__form}>
                <Outlet />
            </main>            
        </>
    )
}