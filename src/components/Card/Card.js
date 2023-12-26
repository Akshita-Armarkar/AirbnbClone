import "./card.css";
import star1 from '../../assests/star1.svg';
import { products } from "./products";
export default function Card() {
   
      return(
        products.map((el, index) => {
            return(
                <div className="image-container" key={index}>
                {el.openspots === 0 && <span className="soldout">Sold Out</span>}
                <img src={`https://picsum.photos/id/${10 + index}/200/300`} alt={el.title} className="productimage"/>
                <div className="ratings">
                    <img src={star1} alt='rating'/>
                    <span>{el.rating}</span>
                    <span>{el.reviewCount}</span>
                    <span>{el.country}</span>
                </div>
                <h2 className="title">{el.title}</h2>
                <span className="price">From <b>{el.price.currency}{el.price.amount}</b> / person</span>
                </div>
            ) 
        })
      );
}