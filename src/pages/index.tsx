import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Battleship</title>
        <meta
          name="description"
          content="Un jeu de bataille navale"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Pour commencer à coder, rendez-vous ici:&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/ships/croiseur-min.jpg"
            alt="Croiseur"
            width={246}
            height={74}
            priority
          />

          <Alert status="info">
            <AlertIcon />
            <AlertTitle>Bienvenue sur le frontend</AlertTitle>
            <AlertDescription>
              Ici, tu vas pouvoir développer une interface.
            </AlertDescription>
          </Alert>
        </div>

        <div className={styles.grid}>
          <a
            href="https://react.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs React<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Retouve toute la documentation officielle de React.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs/routing/introduction"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Routage <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Documentation officielle de Next.js
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
