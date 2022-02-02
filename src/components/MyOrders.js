import React, { useState, useEffect } from "react";

import LotService from "../services/lot.service";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    LotService.fetchOrdersByUsername().then(
      (response) => {
        setMyOrders(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setMyOrders(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{myOrders.length}</h3> */}
      </header>
      <h2>List of orders</h2>

      <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Nuts
            <span class="badge badge-primary badge-pill bg-danger">50 KG</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Strawberry
            <span class="badge badge-primary badge-pill bg-danger">10 KG</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Blackberry
            <span class="badge badge-primary badge-pill bg-danger">99 KG</span>
          </li>
      </ul>

    </div>
  );
};

export default MyOrders;