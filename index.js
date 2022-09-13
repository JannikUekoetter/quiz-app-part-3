import createCard from "./components/card/card.js";

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="card-answer"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

answerButton.addEventListener("click", () => {
  if (answer.classList.contains("card__answer--active")) {
    answer.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  } else {
    answer.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  }
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

//create cards

const cardContainer2 = document.querySelector('[data-js="card-container"]');

const card4 = createCard("question4", "answer4", "tag4");
const card5 = createCard("question5", "answer5", "tag5");
const card6 = createCard("question6", "answer6", "tag6");

cardContainer2.append(card4);
cardContainer2.append(card5);
cardContainer2.append(card6);

const cardObject = [
  { question: "question1", answer: "answer1", tag: "tag1" },
  { question: "question2", answer: "answer2", tag: "tag2" },
  { question: "question3", answer: "answer3", tag: "tag3" },
];

createCard(cardObject)

cardObject.