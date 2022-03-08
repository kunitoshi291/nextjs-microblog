import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../compornents/Layout'
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  //ブログ構成のレイアウト
  return <Layout>
    <section className = {utilStyle.headingMd}>
      <p>
        趣味のプログラミングを通して、学んだことをアウトプットします。
      </p>
    </section>
    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
      <article>
        <Link href="/" passHref>
        <img src="/images/thumbnail01.jpg" 
        className={styles.thumbnailImage}
        />
        </Link>
        <Link href="/" passHref>
          <a className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </a>
        </Link>
        <br />
        <small className={utilStyle.lightText}>March 9, 2022</small>
      </article>
      <article>
        <Link href="/" passHref>
        <img src="/images/thumbnail01.jpg" 
        className={styles.thumbnailImage}
        />
        </Link>
        <Link href="/" passHref>
          <a className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </a>
        </Link>
        <br />
        <small className={utilStyle.lightText}>March 9, 2022</small>
      </article>
      <article>
        <Link href="/" passHref>
        <img src="/images/thumbnail01.jpg" 
        className={styles.thumbnailImage}
        />
        </Link>
        <Link href="/" passHref>
          <a className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </a>
        </Link>
        <br />
        <small className={utilStyle.lightText}>March 9, 2022</small>
      </article>
      <article>
        <Link href="/" passHref>
        <img src="/images/thumbnail01.jpg" 
        className={styles.thumbnailImage}
        />
        </Link>
        <Link href="/" passHref>
          <a className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </a>
        </Link>
        <br />
        <small className={utilStyle.lightText}>March 9, 2022</small>
      </article>
    </div>
    </section>
    
  </Layout>
}
