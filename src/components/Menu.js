import React, { useState } from "react";
import "../styles/App.css";

export default function Menu() {
  const recipes = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const [category, setCategory] = useState("all");

  function filterData(category) {
    if (category === "all") {
      return recipes;
    } else {
      const filtered = recipes.filter((dish) => dish.category === category);

      return filtered;
    }
  }
  return (
    <>
      <div className="main-container">
        <h2>Our Menu</h2>

        <div className="container">
          <button id="main" onClick={() => setCategory("all")}>All</button>
          <button id="filter-btn-1" data-test-id="menu-item-breakfast" onClick={() => setCategory("breakfast")}>BreakFast</button>
          <button id="filter-btn-2" data-test-id="menu-item-lunch" onClick={() => setCategory("launch")}>Lunch</button>
          <button id="filter-btn-3" data-test-id="menu-item-shakes" onClick={() => setCategory("shakes")}>Shakes</button>
        </div>

        <div className="recipes-container">
          {filterData(category).map((recipe, index) => (
            <div key={index} className="dish">
              <img src={recipe.img} alt={recipe.title} />

              <div className="dishInfo">
                <div className="top-section">
                  <h3>{recipe.title}</h3>
                  <p>${recipe.price.toFixed(2)}</p>
                </div>

                <div className="dish-desc">
                  <p>{recipe.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
