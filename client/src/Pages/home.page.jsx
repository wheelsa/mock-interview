import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.styles.scss";

import Card from "../Components/Card.component";
import { Button } from "../Components/Button.component";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [sortAsc, setSort] = useState(false);
  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const renderItems = () => {
    if (sortAsc) {
      items.sort((a, b) => a.likes - b.likes);
    } else {
      items.sort((a, b) => b.likes - a.likes);
    }
    return items.map((item) => (
      <div key={`item-${item.id}`}>
        <Card item={item} />
      </div>
    ));
  };

  const toggleSort = () => setSort(!sortAsc);

  const sortButton = () => {
    if (!sortAsc) {
      return <Button onClick={toggleSort}> Sort Asc </Button>;
    } else {
      return <Button onClick={toggleSort}> Sort Desc </Button>;
    }
  };

  return (
    <div className="containerHome">
      <header>
        <div className="title">
          <h1> Here Are Your Items!</h1>
        </div>
        <div className="btn-container">
          <Link
            to={{ pathname: "/addItem" }}
            style={{ textDecoration: "none" }}
          >
            <Button> Add Item </Button>
          </Link>
          {sortButton()}
        </div>
      </header>
      <br />
      <div className="cards">{renderItems()}</div>
    </div>
  );
};

export default HomePage;
