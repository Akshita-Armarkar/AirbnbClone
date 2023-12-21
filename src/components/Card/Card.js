import "./card.css";
import image12 from '../../assests/image12.png'
import star1 from '../../assests/star1.svg'
export default function Card(){
    return (
        <div className="image-container">
        <img src={image12} alt="productimage" className="productimage"/>
        <div className="ratings">
            <img src={star1} alt='rating'/>
            <span>5.0</span>
            <span>(60)</span>
            <span>.USA</span>
        </div>
        <h2 className="title">Life lessons with Katie Zaferes</h2>
        <span className="price">From <b>$136</b> / person</span>
        </div>
    );
}