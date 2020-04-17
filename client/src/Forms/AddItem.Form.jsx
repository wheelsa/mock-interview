import React, { useState } from "react";
import axios from "axios";

import { Form, FormInput, FormContainer } from "./Form.styles";
import { Button } from "../Components/Button.component";

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
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          required
          autoFocus
          name="name"
          type="text"
          label="Name*"
          value={itemCreate.name}
          onChange={handleChange}
        />

        <FormInput
          required
          label="Image Url*"
          name="image"
          type="url"
          value={itemCreate.url}
          onChange={handleChange}
        />

        <FormInput
          required
          label="Description*"
          name="description"
          type="text"
          value={itemCreate.description}
          onChange={handleChange}
        />

        <FormInput
          required
          label="Number of Likes*"
          name="likes"
          type="number"
          value={itemCreate.url}
          onChange={handleChange}
        />
        <div className="btn-container">
          <Button type="submit"> Submit </Button>{" "}
          <Button onClick={() => props.history.goBack()}> Back </Button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default AddItem;
