import { useState } from 'react';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { PlayerContent } from '../contexts/PlayerContent';

import { PlayerContentProvider } from '../contexts/PlayerContent';

import '../styles/global.scss';
import  styles from '../styles/app.module.scss';



function MyApp({ Component, pageProps }) {
  return (
    <PlayerContentProvider>

      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
      
    </PlayerContentProvider>
  )
}

export default MyApp
