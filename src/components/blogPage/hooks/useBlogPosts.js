import { useState, useEffect } from "react";
import Post1content from "../posts/post1/Post1content";
import Post2content from "../posts/post2/Post2content";

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Datos de prueba simulados
    const mockPosts = [
      {
        id: 2,
        title: "Why I Deleted My Portfolio Photo",
        excerpt: "For me, caring about details is key to keeping a coherent and authentic design even when the details are just a colour staff...",
        author: "Veronica Sanchez",
        date: "2025-09-25",
        content: <Post2content></Post2content>,
      },
      {
        id: 1,
        title: "Test-Driven Development: Friend or Foe in Your Daily Work?",
        excerpt: "Test-driven development (TDD) is gaining popularity lately, but is it always better than not implementing it?...",
        author: "Veronica Sanchez",
        date: "2025-09-01",
        content: <Post1content></Post1content>,
      },
    ];

    // Simulamos un pequeño retardo como si fueran datos cargados
    setTimeout(() => {
      setPosts(mockPosts);
    }, 500);
  }, []);

  return posts;
}