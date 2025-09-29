import Skills from './sections/skills/Skills';
import Education from './sections/education/Education';
import Contact from './sections/contact/Contact';
import Experience from './sections/experience/Experience';
import About from './sections/about/About';
import FiveCircleVenn from './sections/about/FiveCircleVenn';
import MainPageStyles from './MainPage.module.css';
import SubNav from './SubNav/SubNav';

function MainPage() {
  return (
    <div id="mainpage"   style={{width:"100%" , display:"flex", flexDirection:"column", alignItems:"center"} }>
        <SubNav></SubNav>
        <div className={MainPageStyles.aboutDiv}>
          <div className={MainPageStyles.aboutSubDiv}>
            <About id="about"></About>
          </div>
          <div className={MainPageStyles.aboutSubDiv}>
            <FiveCircleVenn ></FiveCircleVenn>
          </div>
        </div>

        <Experience id="experience"></Experience>

        <Skills id="skills"></Skills>
        <Education id="education"></Education>
        <Contact id="contact"></Contact>
    </div>
  );
}

export default MainPage;