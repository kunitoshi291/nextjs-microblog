// markdownファイルのデータを取り出す作業
import path from "path";
import fs from "fs";
import matter from "gray-matter";

// process.cwd -> カレントディレクトリを参照し、postsディレクトリをパスとして取得
const postsDirectory = path.join(process.cwd(), "posts");

// ブログ投稿用のデータを取得する関数
export function getPostsData (){
    // ディレクトリ内のファイル一覧を取得
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/, "");// ファイル名（id）

        // マークダウンファイルを文字列として読みとる
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        // ファイルコンテンツのメタデータを取得
        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data,
        };
    });  
    // getPostsDataに対する返り値
    return allPostsData;  
}

// getStaticPathでreturnで使うpathを取得する。
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName)=> {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            },
        };
    });
}
