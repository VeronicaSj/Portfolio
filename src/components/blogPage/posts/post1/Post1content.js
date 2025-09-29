import ProsConsComp from "../../../general/prosConsComp/ProsConsComp";
import styles from "./Post1content.module.css";

function Post1content() {

    return (
        <div id="post1content" 
            style={{width:"100%" , display:"flex", flexDirection:"column", alignItems:"center"} }>
            <p className={styles.parag}>
                For some time now, Test-Driven Development (TDD) 
                has gone from being an experimental technique to 
                becoming a standard in many development teams. 
                The idea is simple:
            </p>
            <ol className={styles.list}>
                <li>
                    You choose a <b className={styles.highlight}> functionality </b>
                </li>
                <li>
                    You write automated <b className={styles.highlight}>tests</b> for that functionality
                </li>
                <li>
                    You write the minimum <b className={styles.highlight}>code</b> necessary for them to pass
                </li>
                <li>
                    <b className={styles.highlight}>Refactor</b>
                </li>
                <li>
                    <b className={styles.highlight}>Repeat</b> until your functionality is complete.
                </li>
            </ol>
            <p className={styles.parag}>
                It sounds clean, structured, and even elegant...
                but like everything in life, it's neither black
                nor white. That's why I want to share my experience
                and reflections on the pros and cons of applying 
                TDD in your daily work.
            </p>

            <ProsConsComp 
                prosListTitle="The Good Thing About TDD" 
                prosList={[
                    {title: 'Clearer Design from the Start', 
                        expl: "Writing tests first forces you to think "+
                            "about how the code should behave before "+
                            "implementing it. This leads to simpler APIs"+
                            "and a design more focused on real-world use."},
                    {title: "Confidence When Changing Code", 
                        expl: "Refactoring is no longer scary. Just running "+
                            "the tests lets you know if you've broken "+
                            "something. This is golden when the project "+
                            "starts to grow."},
                    {title: "Fewer Bugs in Production", 
                        expl: "Although it doesn't eliminate errors 100%, "+
                            "writing tests first reduces forgotten or "+
                            "poorly considered cases. You often find "+
                            "inconsistencies before failures occur."},
                    ]}
                consListTitle="The Not-So-Good Thing About TDD"
                consList={[
                    {title: 'Learning Curve', 
                        expl: "Adopting TDD isn't intuitive at first. It requires" +
                        " discipline and breaking the habit of \"writing code and then seeing if it works.\""},
                    {title: "Initial Slowness", 
                        expl: "Writing tests before programming can make "+
                            "progress seem slower, especially in the "+
                            "early stages. Sometimes you need to validate "+
                            "an idea quickly, and TDD can feel like a "+
                            "hindrance."},
                    {title: "Test Maintenance", 
                        expl: "Tests are code too. When requirements change "+
                            "a lot, maintaining them can be cumbersome and "+
                            "even counterproductive."},
                    {title: "False Sense of Security", 
                        expl: "Having many tests doesn't guarantee that the "+
                            "software will work perfectly. If the tests "+
                            "don't cover real-world cases or are poorly "+
                            "designed, they can create false confidence."},
                ]}></ProsConsComp>

            <h3>
                My Experience
            </h3>
            <p className={styles.parag}>
                One of the requirements for my final project was to
                implement well-structured tests. I decided to apply 
                TDD because my final project was built with Spring, 
                and the Spring training platform recommends using it.
            </p>
            <p className={styles.parag}>
                The benefits I found were that once the test was 
                written, code development became much faster. I didn't
                have to worry about previous features when writing a
                new feature.
            </p>
            <p className={styles.parag}>
                The problem was, it was the first project I used this 
                methodology on. When a test failed, I didn't know if 
                the failure came from the functionality or the test. 
                So I had to validate all the automated tests with 
                manual tests. 
            </p>
            <p className={styles.parag}>
                Testing logical java code is kind of easy but testing 
                an API was harder than I thought. It was too much 
                time spent on testing for very little code produced. 
                I finally had to abandon the practice of TDD to apply 
                the classic structure of code-test.
            </p>
            <h3>
                My conclusion
            </h3>
            <p className={styles.parag}>
                TDD isn't a silver bullet. For large, projects, I 
                think the benefits clearly outweigh the drawbacks: 
                better design, fewer bugs, and more confidence when 
                working with the code. But for small projects, rapid 
                prototypes, or experiments, it can be an excess of 
                rigor that slows things down more than it helps.
            </p>
            <p className={styles.parag}>
                In my case, I still apply the classical code-test 
                development and sometimes I dare to reverse the order.
                My recommendation is: Practice testing code that you
                already know works. Once you know you can trust your 
                tests, Test-Driven Development can be your best 
                friend on medium and large projects.
            </p>
        </div>
    );
}

export default Post1content;