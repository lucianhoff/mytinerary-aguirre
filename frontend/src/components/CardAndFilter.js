import React, { useState, useRef, useEffect } from "react";
import CardCities from "./CardCities";
import Title from "./Title";
const CardAndFilter = ({ arrayCities }) => {

  const [cities, setCities] = useState(arrayCities);

  useEffect(() => {
    setCities(arrayCities)
  }, [arrayCities])
  
  const filter = useRef();

  const filtered = () => {
    let value = filter.current.value.toLowerCase().trim();
    let filteredArray = arrayCities.filter((city) =>
      city.cityName.toLowerCase().startsWith(value)
    );
    return setCities(filteredArray);
  };

  const [place, setPlace] = useState("Cities");
  let checkbox = (e) => {
    if (e.target.checked) {
      setPlace("Cities");
    } else {
      setPlace("Cities");
    }
  };

  return (
    <>
      <div className="filter">
        <div className="mt-5 flex items-center justify-center flex-col mb-24">
          <label
            className="rubik block text-purple-600 text-3xl font-bold md:text-right mb-3 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Filter by {place}
          </label>

          <label className="plane-switch">
            <input
              type="checkbox"
              id="aircheck"
              pattern="[^\s]+"
              onChange={checkbox}
              checked
            />

            <div>
              <div>
                <svg viewBox="0 0 13 13">
                  <path
                    fill="currentColor"
                    d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z"
                  ></path>
                </svg>
              </div>
              <span className="street-middle"></span>
              <span className="cloud"></span>
              <span className="cloud two"></span>
            </div>
          </label>
            <input
              type="text"
              name=""
              id=""
              // placeholder={place === "Countries" ? "Country" : "City"}
              placeholder="City"
              ref={filter}
              onChange={filtered}
              className="input rubik text-center mt-4 w-1/8 bg-white appearance-none border-2 border-purple-900 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-600"
            />
        </div>
      </div>

      <div className="flex items-center justify-center mt-12 ">
        {cities.length === 0 ? <Title title="City not found =("/> : <CardCities arrayCitiesCard={cities} />}
      </div>
    </>
  );
};

export default CardAndFilter;
