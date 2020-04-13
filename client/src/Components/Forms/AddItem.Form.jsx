import React, { useState } from "react";
import axios from "axios";

const AddItem = (props) => {
  const [itemCreate, setItemCreate] = useState({});

  const handleSubmit = (e) => {
    console.log(itemCreate);
    e.preventDefault();
    axios
      .post(`/api/items/`, itemCreate)
      .then((res) => {
        setItemCreate(res.data);
        props.history.goBack();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemCreate({
      ...itemCreate,
      [name]: value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={itemCreate.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            name="image"
            type="url"
            value={itemCreate.url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={itemCreate.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Likes:
          <input
            name="likes"
            type="number"
            value={itemCreate.url}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <button onClick={() => props.history.goBack()}> Back </button>
    </>
  );
};

export default AddItem;
