import HandShake from "../images/handshake.png";
import Rocket from "../images/rocket.png";
import Scale from "../images/scale.png";
import USA from "../images/USAFlag.png";
import Canada from "../images/canadaFlag.png";
import Others from "../images/OtherFlag.png";
import Store from "../images/store.png";
import CommercialBuilding from "../images/commercial-building.png";
import Startup from "../images/startup.png";

const questions = {
  1: {
    question: "Would you need an NDA signed before the project starts?",
    type: "SingleSelect",
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 24,
      2: 24,
    },
    previous: 0,
  },
  24:{
    question: "What is your best email?",
    type: "text",
    required: true,
    options: [ { name: "JohnDoe@gmail.com", required: true, type: "email", id: 1 } ],
    next: {
      1: 2,
    },
    previous: 1,
  },
  2: {
    question: "What platform will it run on?",
    type: "MultipleSelect",
    options: [
      { name: "Mobile", required: true, type: "text", id: 1 },
      { name: "Website", required: true, type: "text", id: 2 },
    ],
    next: {
      1: 3,
      2: 3,
    },
    previous: 24,
  },
  3: {
    question: "What best describes your company size?",
    type: "SingleSelect",
    required: true,
    options: [
      { name: "500+ employees", type: "Mcq", img: CommercialBuilding, id: 1 },
      { name: "20 - 500 employees", type: "Mcq", img: Store, id: 2 },
      { name: "1 - 10 employees", type: "Mcq", img: Startup, id: 3 },
    ],
    next: {
      1: 4,
      2: 4,
      3: 4,
    },
    previous: 2,
  },
  4: {
    question: "Describe the software or idea in 3 sentences MAX",
    type: "text",
    options: [{ name: "Description", type: "textarea", id: 1 }],
    next: {
      1: 5,
    },
    previous: 3,
  },
  5: {
    question: "Do you need help creating high quality logos and images for you idea?",
    type: "SingleSelect",
    required: true,
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 6,
      2: 22,
    },
    previous: 4,
  },
  6: {
    question: "Do you already have a logo or brand images?",
    type: "SingleSelect",
    required: true,
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 23,
      2: 23,
    },
    previous: 5,
  },
  // 7: {
  //   question: "Please attach any pictures or logos that you may have",
  //   type: "file",
  //   options: [{ name: "Upload Logo", required: true, type: "file", id: 1 }],
  //   next: {
  //     1: 23,
  //   },
  //   previous: 6,
  // },
  // 6: {
  //   question: "What platform will it run on?",
  //   type: "MultipleSelect",
  //   options: [
  //     { name: "Mobile", required: true, type: "text", id: 1 },
  //     { name: "Website", required: true, type: "text", id: 2 },
  //   ],
  //   next: {
  //     1: 23,
  //     2: 23,
  //   },
  //   previous: 4,
  // },
  // Form checks for answer to question 22 or 23 as final questions.
  22: {
    question: "Would you like us to store your information?*",
    type: "Mcq",
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      // { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 24,
      // 2: true,
    },
    previous: 5,
  },
  23: {
    question: "Would you like us to store your information?*",
    type: "Mcq",
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      // { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 25,
      // 2: true,
    },
    previous: 6,
  }
};

export default questions;