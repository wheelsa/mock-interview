import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./Card.styles.scss";

const Card = ({ item: { name, image, description, likes } }) => {
  return (
    <div className="card">
      <img className="card__image" src={`${image}`} alt={`${name}`} />
      <div className="container">
        <h3>{name}</h3>
        <p className="card__description">{description}</p>
        <div>
          {" "}
          {likes} <FontAwesomeIcon icon={faThumbsUp} color={"blue"} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Card;

// 	<div class="card">
// 		<div class="card__thumb">
// 	    <img src="https://nagenomics.files.wordpress.com/2014/08/id-100254315.jpg" >
// 		</div>
// 		<div class="card__date">
// 			<span class="card__date__day">23</span>
// 			<span class="card__date__month">Mai</span>
// 		</div>
// 		<div class="card__body">
// 			<div class="card__category"><a href="#">Category</a></div>
// 			<div class="card__title"><a href="#">Vivamus elementum semper nisivi troscup</a></div>
// 			<div class="card__subtitle">Donec posuere vulputate</div>
// 			<p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente doloremque recusandae, modi dolore velit, illum itaque minus inventore, omnis et nisi rem facere.</p>
// 		</div>
// 		<footer class="card__footer">
// 			<span class="icon icon--time">6 min</span>
// 			<span class="icon icon--comment"><a href="#">2 comments</a></span>
// 		</footer>
// 	</div>
