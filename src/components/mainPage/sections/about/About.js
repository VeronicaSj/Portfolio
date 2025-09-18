import  '../../../../index';
import LinkButton from '../../../general/LinkButton';

function About() {
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
        <LinkButton text="Contact" href="#contact"></LinkButton>
    </section>
  );
}

export default About;