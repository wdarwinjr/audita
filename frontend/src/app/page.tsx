import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import SignupForm from "../ui/signup-form";

export default function Home() {
  return (

    <SignupForm/>

    // <div className={styles.container}>

    //   <Image src="/audita_mkt.jpg" alt="AuditaMkt Logo" width={'200'} height={'80'} />

    //   <Head>
    //     <title>AUDITA</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>

    //     <h1 className={styles.title}>
    //       Bem-vindo à AUDITA!
    //     </h1>

    //     <p className={styles.description}>
    //       Comece colaborando na revisão do nosso ESTATUTO. <b>Associe-se!</b>
    //     </p>

    //     <SignupForm/>

    //     <div className={styles.grid}>

    //       <a href="https://docs.google.com/document/d/1Cu9XCsepyb-BiC49xfWTM2aJjFYNbgGVDyj59TBugZg/edit?usp=sharing" target="_blank" className={styles.card}>
    //         <h3>Estatuto &rarr;</h3>
    //         <p>Entre no documento, leia e colabore com suas ideias.</p>
    //       </a>

    //       <a href="https://docs.google.com/document/d/1axuWYM4h6ydFJLCVoftHtb2QqJwYTCNConIQJQqHlGk/edit?usp=sharing" target="_blank" className={styles.card}>
    //         <h3>Nossos Valores e Objetivos &rarr;</h3>
    //         <p>Saiba mais sobre a criação da nossa associação e seus valores e objetivos.</p>
    //       </a>

    //     </div>

    //   </main>

    //   <footer className={styles.footer}>
    //       Powered by{" "}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //   </footer>

    // </div>
  );
}

{/* "https://docs.google.com/document/d/12XlGqGr2FrzR3HzDow_KjovoYrwbEgUUf_ybAoaRqNE/edit?usp=sharing" */}
