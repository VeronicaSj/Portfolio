import { useState, useEffect } from "react";
import Post1content from "../posts/post1/Post1content";

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Datos de prueba simulados
    const mockPosts = [
      {
        id: 1,
        title: "Cómo empezar con React",
        excerpt: "React es una librería de JavaScript muy popular para construir interfaces de usuario. En esta guía te muestro los primeros pasos...",
        author: "Veronica Sanchez",
        date: "2023-09-01",
        content: <Post1content></Post1content>,
      },
      {
        id: 2,
        title: "Guía de CSS Modular",
        excerpt: "El uso de CSS modular ayuda a mantener los estilos organizados y evita conflictos en aplicaciones grandes...",
        author: "María Gómez",
        date: "2023-09-05",
      },
      {
        id: 3,
        title: "Mejores prácticas en JavaScript",
        excerpt: "JavaScript está en constante evolución. Aquí repasamos algunas buenas prácticas para escribir código más limpio y mantenible...",
        author: "Carlos Ruiz",
        date: "2023-09-10",
      },
    ];

    // Simulamos un pequeño retardo como si fueran datos cargados
    setTimeout(() => {
      setPosts(mockPosts);
    }, 500);
  }, []);

  return posts;
}