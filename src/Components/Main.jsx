import { useEffect, useState } from "react";
import "../Styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [imageArr, setImageArr] = useState([
    {
      image_url: "Hypoclorous_Acid.jpg",
      name: "Hypochlorous Acid Skin Relief Spray 150 ppm",
      discription:
        "Introducing our new spray toner powered by hypochlorous acid that supports the skin barrier and helps fight acne, eczema, redness",
    },
    {
      image_url: "Artboard_1_2_1600x.jpg",
      name: "Anti Dandruff Shampoo 3.5%",
      discription:
        "An advanced anti-dandruff shampoo with clinically proven actives to eliminate flakes, soothe irritation, and restore scalp balance from the first wash.",
    },
  ]);

  const [index, setInd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInd((prevIndex) => (prevIndex + 1) % imageArr.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageArr.length]);

  return (
    <main>
      <section className="hero-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 hero-btn hero-left"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <div className="hero-content">
          <img
            className="hero-image"
            src={imageArr[index].image_url}
            alt={imageArr[index].name}
          />
          <div className="hero-information">
            <dev className="launch">New Launch</dev>
            <h1 className="hero-name">{imageArr[index].name}</h1>
            <p className="hero-description">{imageArr[index].discription}</p>
            <button className="btn hero-info-button">Shop Now</button>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 hero-btn hero-right"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </section>

      <section className="bestSeller-section">
        <h2 className="bestSeller-heading">Our Best Sellers</h2>
      </section>
      <section className="shopByCategory-section">
        <h2  className="shopByCategory-heading">Shop by Category</h2>
      </section>
      <section className="shopByConcerns-section">
        <h2 className="shopByConcerns-heading">Shop by Concerns</h2>
      </section>
      <section className="newLaunches-section">
        <h2 className="newLaunches-heading">New Launches</h2>
      </section>
      <section className="minimalist-Advantages">
        <h1 className="min-Adv-heading">The future of personal care is here</h1>
        <p className="min-Adv-para">Embrace Minimalist, where each element is chosen for its scientific merit, offering you authentic, effective skincare solutions.</p>
        <ul className="min-Adv-items">
          <li>
            <img  className="item-img item" src="" alt="" />
            <h2 className="item-heading item">Transparency</h2>
            <p className="item-description item">Full disclosure of ingredients used & their concentration</p>
          </li>
          <li>
            <img  className="item-img item" src="" alt="" />
            <h2 className="item-heading item">Efficacy</h2>
            <p className="item-description item">Formulations developed in our in-house laboratories</p>
          </li>
          <li>
            <img  className="item-img item" src="" alt="" />
            <h2 className="item-heading item">Affordable</h2>
            <p className="item-description item">Skincare, accessible to all</p>
          </li>
          <li>
            <img  className="item-img item" src="" alt="" />
            <h2 className="item-heading item">Only the best</h2>
            <p className="item-description item">Ingredients sourced from across the world</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
