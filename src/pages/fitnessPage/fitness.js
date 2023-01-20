import "./fitness.css";
import image from "./logo.png";

function Fitness(){
    return <div className="container">
        <p>
        <h1>Have <br/> Knowledge<br/> <span>We will Acknowledge!</span></h1>
        Join the growing team of GURUS at WTF and share your experience and knowledge to the world full  of opporstunities and earn 3X more.
        <div className="btn">
        <button> Know More</button>
        </div>
        </p>
        <div>
            <img src={image}/>
        </div>
    </div>
}
export default Fitness;