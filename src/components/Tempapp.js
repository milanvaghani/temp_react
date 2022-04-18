import React, { useEffect, useState } from "react";
import "./css/style.css";
import SearchIcon from "@mui/icons-material/Search";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
//   const [tem, setTem] = useState("");

  useEffect( () => {
    const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c79c46076e3341d05d05378de04f9d4d`;
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main);
    };
    fetchApi();
},[search] );
  //   useEffect(() => {
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c79c46076e3341d05d05378de04f9d4d`
  //     )
  //       .then((response) => response.json())
  //       .then((main) => setCity(main));
  //   }, [search]);

  //   const InputEvent = () => {
  //     setSearch(tem);
  //   };
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            className="inputField"
            type="search"
            value={search}
            onChange={(event) => {
              //   setTem(event.target.value);
              setSearch(event.target.value);
            }}
          />
          {/* <SearchIcon onClick={InputEvent} /> */}
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">Min : {city.temp}°Cel | Max : {city.temp}°Cel</h3>
            </div>
            <div className="wave"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;
