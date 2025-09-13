import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import FloatingContactBar from './FloatingContactBar';
import Experience from './Experience';
import About from './About';
import FiveCircleVenn from './FiveCircleVenn';
import MainPageStyles from '../../styles/MainPage.module.css';

function MainPage() {
  return (
    <div id="mainpage"   style={{width:"100%" , display:"flex", flexDirection:"column", alignItems:"center"} }>
        <div className={MainPageStyles.navHeaderPlaceholder}></div>
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
        <FloatingContactBar></FloatingContactBar>
    </div>
  );
}

export default MainPage;