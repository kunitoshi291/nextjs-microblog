// 任意のURLは、[]をつける
import Layout from '../../compornents/Layout'
import { getAllPostIds, getPostData } from '../../lib/post';

//動的ルーティング設定のための関数。pathsがルーティング設定になっている(開発環境なら毎回リクエスト時に実行される、本番環境ならビルド時だけ実行される。)。
//idがとりうる値のリストを返す
export async function getStaticPaths(){
    const paths = getAllPostIds();

    return{
        paths,
        fallback: false,
    };
}
//SSG(id(ファイル名)に基づいて必要なデータを取得)
export async function getStaticProps({ params }) {
    const postData =  await getPostData(params.id);
    
    console.log(postData);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({postData}) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.date}
            <br/>
            {postData.blogContentHTML}
        </Layout>
    );
}