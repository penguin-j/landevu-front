import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

const name = 'landevu'
export const siteTitle = 'landevu'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        {
          <>
            <Image priority src='/logo.jpg' height={144} width={144} alt={name} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        }
      </header>
      <main>{children}</main>
    </div>
  )
}
