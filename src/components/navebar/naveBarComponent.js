import "./navebar.css"
import logo from "./logo.png"
function NaveBarComponent() {
    return <div className="nave-bar">
        <div id="left">
            <p><a href="/"><img className="logo" src={logo}/></a></p>
        </div>
        <div id="right">
            <ul >
                <li><a href="fitness">Fitness</a></li>
                <li><a href="nutrition">Nutrition</a></li>
                <li><a href="zyms">Gyms</a></li>
                <li><a href="partners">Become WTF Partner</a></li>
                <li><a href="about">About Us</a></li>
                <li id="login"><span><a href="login">Login</a></span></li>
            </ul>
        </div>
       
    </div>
}

export default NaveBarComponent;