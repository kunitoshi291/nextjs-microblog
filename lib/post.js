// markdownファイルのデータを取り出す作業
import path from "path";
import fs from "fs";
// process.cwd -> カレントディレクトリを参照し、postsディレクトリをパスとして取得
const postsDirectory = path.join(process.cwd(), "posts");

// ブログ投稿用のデータを取得する関数
export function getPostsData (){
    const fileNames = fs.readSync(postsDirectory);


    
}