import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from './components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>description</p>
      </section>
      <section className={utilStyles.headingMd}>
        <Link href='/areas/recommend'>search recommended area</Link>
      </section>
    </Layout>
  )
}
