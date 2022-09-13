import createCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

const card1 = createCard("question1", "answer1", "tag1");
const card2 = createCard("question2", "answer2", "tag2");
const card3 = createCard("question3", "answer3", "tag3");

cardContainer.append(card1);
cardContainer.append(card2);
cardContainer.append(card3);
