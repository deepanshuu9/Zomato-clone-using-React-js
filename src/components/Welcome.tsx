import React, { useEffect, useState } from "react";
import welcome from "../images/welcome.jpg";
import { Link } from "react-router-dom";
import arrow from "../images/right-arrow.png";
import { json } from "stream/consumers";

function Welcome() {
  const [rest, setRest] = useState([]);

  const getResturants = async () => {
    try {
      await fetch(
        "https://api.spoonacular.com/food/restaurants/search?apiKey=d664523f4ab24f88ac28b6320f0ce8ea"
      )
        .then((res) => res.json())
        .then((json) => setRest(json.restaurants));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResturants();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,.7)), url(${welcome})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className="h-screen text-white text-center "
      >
        <div className="pl-60">
          <Link to="/login">
            {" "}
            <button className="ml-96 text-lg mt-6">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="ml-7 text-lg mt-6">Sign up</button>
          </Link>
        </div>
        <h1 className="text-6xl font-extrabold mt-44 italic">Zomato Clone</h1>
        <h1 className="text-4xl mt-8">
          Find the best resturants, cafes and bars <br />
          around the world
        </h1>
      </div>

      <div>
        <h1 className="text-3xl text-center mt-10">
          Popular locations around the world
        </h1>
        <h1 className="text-xl text-gray-600 text-center mt-10">
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food,
          <br /> Zomato clone covers it all. Explore menus, and millions of
          restaurant photos and reviews from users <br /> just like you, to find
          your next great meal.{" "}
        </h1>
      </div>
      <div className="grid grid-cols-3">
        {rest.map((data: any) => {
          return (
            <>
              <Link to="/main" state={{ city: data.address?.city }}>
                <div className="flex border border-spacing-1 shadow-lg w-80 p-3 rounded-lg ml-16 mt-20">
                  <h1 className="text-lg">{data.address?.city}</h1>
                  <img className="w-2 h-2 ml-40" src={arrow} alt="" />
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Welcome;
