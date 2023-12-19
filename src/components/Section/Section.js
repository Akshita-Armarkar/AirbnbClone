import photogrid from "../../assests/photoGrid.svg"
import "./section.css"
export default function Section() {
    return (
        <div className="section">
        <img src={photogrid} alt="photogrid" className="photogrid"/>
        <h2 className="heading">Online Experiences</h2>
        <p className="info">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}