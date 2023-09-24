import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Footer from "../components/Footer";

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Smek-one';
export const siteTitle = 'Un simple blog photos';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favico.ico" />
        <meta
          name="description"
          content="Un blog photos d'un passionné"
          lang='fr'
        />
        
        <meta name="og:title" content={siteTitle} />
        
      </Head>
      <Script
        src="https://connect.facebook.net/fr_FR/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/logo2.png"
              className={utilStyles.borderCircle}
              height={150}
              width={400}
              alt={name}
            />
            
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/logo.png"
                className={utilStyles.borderCircle}
                height={200}
                width={400}
                alt={name}
              />
            </Link>
            
          </>
        )}
      </header>
      <main>{children}
      <div className='divide-y divide-black'></div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Retour à l'accueil</Link>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
