import "./card.css";
import star1 from '../../assests/star1.svg'
export default function Card() {
    const products = [
        {
          img: "https://unsplash.com/photos/yC-Yzbqy7PY",
          rating: 4.5,
          reviewCount: 120,
          country: "USA",
          title: "Product 1",
          price: { amount: 50, currency: "USD" }
        },
        {
          img: "https://unsplash.com/photos/LNRyGwIJr5c",
          rating: 3.8,
          reviewCount: 85,
          country: "Canada",
          title: "Product 2",
          price: { amount: 65, currency: "CAD" }
        },
        {
          img: "https://unsplash.com/photos/N7XodRrbzS0",
          rating: 4.0,
          reviewCount: 95,
          country: "UK",
          title: "Product 3",
          price: { amount: 40, currency: "GBP" }
        },
        {
          img: "https://unsplash.com/photos/Dl6jeyfihLk",
          rating: 4.2,
          reviewCount: 110,
          country: "Australia",
          title: "Product 4",
          price: { amount: 75, currency: "AUD" }
        },
        {
          img: "https://unsplash.com/photos/y83Je1OC6Wc",
          rating: 3.5,
          reviewCount: 80,
          country: "Germany",
          title: "Product 5",
          price: { amount: 60, currency: "EUR" }
        },
        {
          img: "https://unsplash.com/photos/LF8gK8-HGSg",
          rating: 4.8,
          reviewCount: 150,
          country: "France",
          title: "Product 6",
          price: { amount: 90, currency: "EUR" }
        },
        {
          img: "https://unsplash.com/photos/tAKXap853rY",
          rating: 3.7,
          reviewCount: 92,
          country: "Brazil",
          title: "Product 7",
          price: { amount: 55, currency: "BRL" }
        },
        {
          img: "https://unsplash.com/photos/BbQLHCpVUqA",
          rating: 4.1,
          reviewCount: 105,
          country: "Mexico",
          title: "Product 8",
          price: { amount: 70, currency: "MXN" }
        },
        {
          img: "https://unsplash.com/photos/xII7efH1G6o",
          rating: 4.4,
          reviewCount: 115,
          country: "Japan",
          title: "Product 9",
          price: { amount: 8500, currency: "JPY" }
        },
        {
          img: "https://unsplash.com/photos/ABDTiLqDhJA",
          rating: 3.9,
          reviewCount: 88,
          country: "South Africa",
          title: "Product 10",
          price: { amount: 1200, currency: "ZAR" }
        },
        {
          img: "https://unsplash.com/photos/6J--NXulQCs",
          rating: 4.6,
          reviewCount: 130,
          country: "India",
          title: "Product 11",
          price: { amount: 3500, currency: "INR" }
        },
        {
          img: "https://unsplash.com/photos/Cm7oKel-X2Q",
          rating: 3.6,
          reviewCount: 78,
          country: "Russia",
          title: "Product 12",
          price: { amount: 4500, currency: "RUB" }
        },
        {
          img: "https://unsplash.com/photos/I_9ILwtsl_k",
          rating: 4.2,
          reviewCount: 112,
          country: "China",
          title: "Product 13",
          price: { amount: 300, currency: "CNY" }
        },
        {
          img: "https://unsplash.com/photos/3MtiSMdnoCo",
          rating: 3.3,
          reviewCount: 70,
          country: "South Korea",
          title: "Product 14",
          price: { amount: 55000, currency: "KRW" }
        },
        {
          img: "https://unsplash.com/photos/IQ1kOQTJrOQ",
          rating: 4.7,
          reviewCount: 145,
          country: "Italy",
          title: "Product 15",
          price: { amount: 80, currency: "EUR" }
        },
      ];
      return(
        products.map((el, index) => {
            return(
                <div className="image-container" key={index}>
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