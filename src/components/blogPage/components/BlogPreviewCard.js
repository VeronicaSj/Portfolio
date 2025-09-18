import React from "react";
import styles from "./BlogPreviewCard.module.css";
import LinkButton from "../../general/LinkButton";

export default function BlogPreviewCard({ id, title, excerpt, author, date }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <p className={styles.meta}>
          {author} • {new Date(date).toLocaleDateString()}
        </p>
      </header>
      <p>{excerpt}</p>
      <LinkButton text="Read more" href={"/portfolio/post/"+id}></LinkButton>
    </article>
  );
}