// 任意のURLは、[]をつける
import Layout from '../../compornents/Layout'
import { getAllPostIds } from '../../lib/post';

export async function getStaticPaths(){
    const paths = getAllPostIds();

    return{
        paths,
        fallback: false,
    }
}

export function getaStaticProps({ params }) {
    
}

export default function Post() {
    return (
        <Layout>
            動的ルーティング設定
        </Layout>
    );
}