import { NavLink } from "react-router-dom";

export const Main = (props) => {
    return (
        <div className="main__page">
            <div className="main__page-text">
                <p>Many reasons to get up and start to get back in the business </p>

                <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>

                <NavLink to="/learnmore"><button className="learn__more">LEARN MORE</button></NavLink>
                <NavLink to="/demo"><button className="demo">DEMO</button></NavLink>

                <div className="main__page-video">
                    <iframe src="https://www.youtube.com/embed/QQYgCxu988s" frameborder="0"></iframe>
                    
                    <div className="video__text">
                        <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <p>Watch preview</p>
                    </div>
                </div>
            </div>
        </div>
    )
}