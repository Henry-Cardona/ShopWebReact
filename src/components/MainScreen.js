
import "./components-css/MainScreen.css";
import { Component } from "react";

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Container-Screen">
                <div className="Screen-Text">
                    <h2>Digital<br/>Evidence</h2>
                    <h5>Desing by Henry Cardona</h5>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters, as opposed to using 
                        'Content here, content here', making it look like readable English.
                    </p>
                </div>
                <div className="Screen-Image">
                    <div className="Image-Box">
                        <img src="" alt="ImagePresentation"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScreen;