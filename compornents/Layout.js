import Head from "next/head";
import { children } from "react/cjs/react.development";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Kuni san";
export const siteTitle = "Next.js Blog";
function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href = "/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src = "/images/profile.png" className={utilStyles.borderCircle} />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;