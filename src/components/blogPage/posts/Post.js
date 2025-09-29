import LinkButton from "../../general/LinkButton";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useParams } from "react-router-dom";

import Style from './Post.module.css';

function Post({key}) {
    const { id } = useParams();
    const posts = useBlogPosts();
    
    const post = posts.find((p) => p.id.toString() === id);

    if (!post) {
        return <p>Post no encontrado</p>;
    }

    return (
        <article className={Style.article}>
        <h2>{post.title}</h2>
        <p className={Style.meta}>
            <strong>{post.author}</strong> •{" "}
            {new Date(post.date).toLocaleDateString()}
        </p>
        <p className={Style.excerpt} >{post.excerpt}</p>
        <div>
            {post.content}
        </div>
        <LinkButton text="Return to blog" href={"/portfolio/blog"} ></LinkButton>
        </article>
    );
}

export default Post;