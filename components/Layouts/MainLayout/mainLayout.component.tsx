import { FC, ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

import styles from "./mainLayout.module.css";
import Navbar from "../../Modules/Navbar/navbar.component";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Angel</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};

export default MainLayout;
