import Articles from "./Articles";
import blogData from "../data/blog";


function ArticleList() {

    const posts = blogData.posts
    
    return (
        <main>
            {posts.map((post) =>(
            <Articles 
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
            />
            ))}
        </main>
    );
}

export default ArticleList;