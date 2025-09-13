import  '../../styles/index.css';
import  '../../styles/sectionFirst.css';

function About() {
  const buttonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "var(--clr-funct-high-light-1)",
    color: "var(--clr-funct-font)",
    fontWeight: "600",
    textDecoration: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <section id="about">
        <h2>
            About Me
        </h2>
        <p>
            Full Stack Developer with experience in backend (Java, Python, Django 
            REST, Spring Boot) and frontend (ReactJS, Angular, Drupal). Expert in 
            infrastructure and DevOps (Docker, Linux, Azure), with knowledge of 
            technical SEO and best practices such as Clean Code and TDD. Passionate
            about creating scalable, efficient solutions that focus on user 
            experience.
        </p>
        <a
            href="#contact"
            style={buttonStyle}
            onMouseEnter={hoverEffect}
            onMouseLeave={leaveEffect}
          >
            Contact
        </a>
    </section>
  );
}

export default About;