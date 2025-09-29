import Styles from './BlogPage.module.css';
import { useBlogPosts } from "./hooks/useBlogPosts";
import BlogPreview from "./components/BlogPreviewCard";

function BlogPage() {
    const posts = useBlogPosts();

    return (
        <div id="blog"   style={{width:"100%" , display:"flex", flexDirection:"column", alignItems:"center"} }>
            <h2>Blog</h2>
            <div className={Styles.postlist}>
                {posts.map((post) => (
                    <BlogPreview
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        author={post.author}
                        date={post.date}
                        />
                ))}
            </div>
        </div>
    );
}

export default BlogPage;