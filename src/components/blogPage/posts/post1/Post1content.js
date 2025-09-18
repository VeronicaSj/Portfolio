import Cycle from "./Cycle";

function Post1content() {

    return (
        <div id="post1content" 
            style={{width:"100%" , display:"flex", flexDirection:"column", alignItems:"center"} }>
            <p>holamundo</p>
            <Cycle></Cycle>
        </div>
    );
}

export default Post1content;