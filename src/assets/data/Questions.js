import HandShake from "../images/handshake.png";
import Rocket from "../images/rocket.png";
import Scale from "../images/scale.png";
import USA from "../images/USAFlag.png";
import Canada from "../images/canadaFlag.png";
import Others from "../images/OtherFlag.png";

const questions = {
  1: {
    question: "Would you need an NDA signed before the project starts?",
    type: "SingleSelect",
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 2,
      2: 2,
    },
    previous: null,
  },
  2: {
    question: "What Best Describes Your Company Size?",
    type: "SingleSelect",
    required: true,
    options: [
      { name: "500+ employees", type: "Mcq", img: USA, id: 1 },
      { name: "20 - 500 employees", type: "Mcq", img: Canada, id: 2 },
      { name: "1 - 10 employees", type: "Mcq", img: Others, id: 3 },
    ],
    next: {
      1: 3,
      2: 3,
      3: 3,
    },
    previous: 1,
  },
  3: {
    question: "Describe the software or idea in 3 sentences MAX",
    type: "text",
    options: [{ name: "Description", type: "textarea", id: 1 }],
    next: {
      1: 4,
    },
    previous: 2,
  },
  4: {
    question: "Do you need help creating high quality logos and images for you idea?",
    type: "SingleSelect",
    required: true,
    options: [
      { name: "Yes", type: "Mcq", img: USA, id: 1 },
      { name: "No", type: "Mcq", img: Canada, id: 2 },
    ],
    next: {
      1: 6,
      2: 7,
    },
    previous: 1,
  },
  7: {
    question: "Do you already have a logo or brand images?",
    type: "SingleSelect",
    required: true,
    options: [
      { name: "Yes", type: "Mcq", img: USA, id: 1 },
      { name: "No", type: "Mcq", img: Canada, id: 2 },
    ],
    next: {
      1: 5,
      2: 6,
    },
    previous: 1,
  },
  5: {
    question: "Please attach any pictures or logos that you may have",
    type: "file",
    options: [{ name: "Upload Logo", required: true, type: "file", id: 1 }],
    next: {
      1: 6,
    },
    previous: 4,
  },
  6: {
    question: "What platform will it run on?",
    type: "MultipleSelect",
    options: [
      { name: "Mobile", required: true, type: "text", id: 1 },
      { name: "Website", required: true, type: "text", id: 2 },
    ],
    next: {
      1: 23,
      2: 23,
    },
    previous: 4,
  },
  // Form checks for answer to question 22 or 23 as final questions.
  23: {
    question: "Would you like us to store your information?*",
    type: "Mcq",
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      // { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: true,
      // 2: true,
    },
    previous: 6,
  }
};

export default questions;