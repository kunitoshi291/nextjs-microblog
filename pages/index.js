import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../compornents/Layout'
import utilStyle from "../styles/utils.module.css";
import {getSortedPostsData} from  "../lib/post";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();// id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData, 
    },
  };
}

// // SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({allPostsData}) {
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
        {allPostsData.map(({id, title, date, thumbnail})=>(
          <article key={id}>
            <Link href={`/posts/${id}`} passHref>
              <img 
              src={`${thumbnail}`}  alt="" className={styles.thumbnailImage}
              />
            </Link>
            <Link href={`/posts/${id}`} passHref>
              <a className={utilStyle.boldText}>
                {title}
              </a>
            </Link>
           <br />
            <small className={utilStyle.lightText}>{date}</small>
         </article>
        ))}
    </div>
    </section>
  </Layout>
}
