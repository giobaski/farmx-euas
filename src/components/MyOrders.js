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
        <h3>{myOrders.length}</h3>
      </header>
    </div>
  );
};

export default MyOrders;