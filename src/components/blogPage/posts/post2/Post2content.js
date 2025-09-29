
import styles from "./Post2content.module.css";

function Post2content() {

    return (
        <div id="post2content" 
            style={{width:"100%" , display:"flex", flexDirection:"column", alignItems:"center"}}>
            <p className={styles.parag}>
                Recently, I made a curious (and perhaps slightly risky)
                decision: I removed my photo from my online portfolio.
                 It wasn't carelessness or shyness, but something much
                more technical: the page's color palette doesn't 
                match my color scheme.
            </p>
            <p className={styles.parag}>
                My website is designed with cool tones, seeking to 
                convey calm, professionalism, and clarity. However, 
                warm tones suit me much better. The image I had 
                contrasted too much with the rest of the aesthetic, 
                and instead of adding value, it ended up clashing.
            </p>
            <p className={styles.parag}>
                For me, consistency is key. Every detail counts: from the
                typography to the color of a button, including the images. 
                A photograph that doesn't respect that harmony can break 
                the visual experience and distract from what really 
                matters: the content and the projects.
            </p>
            <p className={styles.parag}>
                The first solution that comes to mind is to put the 
                photo in black and white, but I also think, my portfolio
                speaks volumes about me more than my face does. Also, 
                if I put my photo in black and white, I think it should
                at least occupy a closer, more prominent position to 
                counteract the coldness of the gray tones, so I'd have
                to change the design again.
            </p>
            <p className={styles.parag}>
                That's why I decided to remove my photo. It doesn't mean
                it won't come back—I'm looking for a new version that 
                respects both the website's color identity and my personal
                 essence—in the meantime, I want the website to maintain 
                 the coherence I seek to convey.
            </p>
            <p className={styles.parag}>
                In the end, a portfolio isn't just a showcase of what we 
                do, but also of how we think and take care of the details.
                And this decision, although it may seem small, is also 
                part of my creative process.
            </p>
        </div>
    );
}

export default Post2content;