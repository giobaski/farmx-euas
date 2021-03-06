import React, { useState, useEffect } from "react";

import LotService from "../services/lot.service";

const Home = () => {
  const [lots, setLots] = useState([]);
  const [amount, setAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);



  const handleAmountChange = (val) =>{
    setAmount(val.target.value);
    console.log(val.target.value);
  }

  const placeOrder = (lotId) =>{
    LotService.placeOrder(lotId, amount)
    setOrderPlaced(true);
    console.log(lotId);
  }
  

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


  
  
  let myLotCard = (lot) => {
    return <div class="card bg-secondary text-white ">
    { }
    
    <div class="card-body fw-bold">
      <h5 class="card-title text-info"> {lot.productName}</h5>
    
      <div class="d-flex align-items-stretch">
        <p>Available Amount: {lot.initAmount} Kg</p>
      </div>
      <div class="d-flex align-items-stretch">
        <p>Opening Price: {lot.openingPrice}$</p>
      </div>
      <div class="d-flex align-items-stretch">
        <p>Closing Price: {lot.closingPrice}$</p>
      </div>
      <div class="d-flex align-items-stretch">
        <p>Closing Date: {lot.closingDate}</p>
      </div>
     
       <input type="text" onChange={handleAmountChange} placeholder="type amount (KG)"></input>
          
      <a onClick={()=>placeOrder(lot.id)} class="btn btn-success m-lg-2">Buy</a>
     
    </div>
  </div>
  }

  

  return (
          <div class="p-3 mb-2" >
            
            
          <div class="container">
            <header className="jumbotron">
                <h2>Available lots</h2>
                {
                orderPlaced?
                <div class="alert alert-success">
                <strong>Success!</strong> Your order has been placed
               </div> 
                : null
                }


           
            </header> 
            <div class="row">
                <div class="col-lg-10">
                
                  {lots.map((lot, key)  => myLotCard(lot))}

                  <ul class="pagination pagination-lg">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </div>

                <div class="col-lg-2 text-center text-dark">
                  <h2>Category </h2>

                  <ul class="list-group">
                  <li class="list-group-item">Terrace Cultivation</li>
                  <li class="list-group-item">Mixed and Multiple Agriculture</li>
                  <li class="list-group-item">Dry Agriculture</li>
                  <li class="list-group-item">Plantation Agriculture </li>
                  <li class="list-group-item">Intensive Farming </li>
                </ul>
                  
                  

                </div>
                {/* <div class="col-lg-4 d-flex align-items-stretch">
                    CARD HERE
                </div>
                <div class="col-lg-4 d-flex align-items-stretch">
                    CARD HERE
                </div> */}
            </div>

            <div>
           <footer class="page-footer font-small blue mt-1">
            <div class="footer-copyright text-center py-3 " >?? 2022 Copyright:
              <a href="https://farmx.ee/"> farmx.ee</a>
            </div>
            </footer>
        </div>
        </div>
        </div>
    

        
  );
};

export default Home;