import React, { useState, useEffect } from "react";

import LotService from "../services/lot.service";

const Home = () => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    LotService.fetchAlllots().then(
      (response) => {
        console.log(response.data);
        setLots(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setLots(_content);
      }
    );
  }, []);

  let lotCards = (lot) => {
    return <div class="card">
    <img class="card-img-top" src="" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title"> {lot.productName}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="d-flex align-items-stretch">
        <p>Available amount: {lot.initAmount}</p>
        <p>opening price: {lot.openingPrice}</p>
        <p>closing price: {lot.closingPrice}</p>
        <p>closing date: {lot.closclosingDateingPrice}</p>
      </div>
      <input></input>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>
  }

  

  return (
        <div class="container">
            <header className="jumbotron">
                <h2>Available lots</h2>
            </header> 
            <div class="row">
                <div class="col-lg-6">
                {lots.map((lot, key) => lotCards(lot))}
                </div>
                {/* <div class="col-lg-4 d-flex align-items-stretch">
                    CARD HERE
                </div>
                <div class="col-lg-4 d-flex align-items-stretch">
                    CARD HERE
                </div> */}
            </div>
        </div>
  );
};

export default Home;