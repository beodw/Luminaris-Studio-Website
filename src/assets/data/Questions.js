import HandShake from "../images/handshake.png";
import Rocket from "../images/rocket.png";
import Scale from "../images/scale.png";
import USA from "../images/USAFlag.png";
import Canada from "../images/canadaFlag.png";
import Others from "../images/OtherFlag.png";

const questions = {
  1: {
    question: "What best describes your business?",
    options: [
      {
        name: "I want to sell my business",
        type: "Mcq",
        img: HandShake,
        id: 1,
      },
      { name: "I want to start my business", type: "Mcq", img: Scale, id: 2 },
      { name: "I want to scale my business", type: "Mcq", img: Rocket, id: 3 },
    ],
    next: {
      1: 2, // Leads to question 2 if selected option 1
      2: 4, // Leads to question 3 if selected option 2
      3: 2, // Leads to question 4 if selected option 3
    },
    previous: null,
  },
  2: {
    question: "Where is your business based?",
    options: [
      { name: "USA", type: "Mcq", img: USA, id: 1 },
      { name: "Canada", type: "Mcq", img: Canada, id: 2 },
      { name: "Other", type: "Mcq", img: Others, id: 3 },
    ],
    next: {
      1: 5,
      2: 5,
      3: 5,
    },
    previous: 1,

  },

  4: {
    question: "Do you want to start your business now or later?",
    type: "Mcq",
    options: [
      { name: "Now", type: "Mcq", id: 1 },
      { name: "Later", type: "Mcq", id: 2 },
    ],
    next: {
      1: 19,
      2: 19,
    },
    previous: 1,
  },
  5: {
    question: "What type of business do you have?",
    type: "Mcq",
    options: [
      { name: "Service", type: "Mcq", id: 1 },
      { name: "Brick & Mortar", type: "Mcq", id: 2 },
      { name: "Eccomerece", type: "Mcq", id: 3 },
      { name: "Software", type: "Mcq", id: 4 },
      { name: "E-Learning", type: "Mcq", id: 5 },
      { name: "Other", type: "Mcq", id: 6 },
    ],
    next: {
      1: 6,
      2: 6,
      3: 6,
      4: 6,
      5: 6,
      6: 6,
    },
    previous: 2,
  },
  6: {
    question: "Please describe your business in 1- 3 sentences MAX",
    type: "text",
    options: [{ name: "Decription", type: "textarea", id: 1 }],
    next: {
      1: 7,
    },
    previous: 5,
  },
  7: {
    question: "Annual Revenue?",
    type: "Mcq",
    options: [
      { name: "$0 - $1M", type: "Mcq", id: 1 },
      { name: "$1M - $3M", type: "Mcq", id: 2 },
      { name: "$3M - $5M", type: "Mcq", id: 3 },
      { name: "$5M - $10M", type: "Mcq", id: 4 },
      { name: "$10M - $20M", type: "Mcq", id: 5 },
      { name: "$20M+", type: "Mcq", id: 6 },
    ],
    next: {
      1: 9,
      2: 8,
      3: 8,
      4: 8,
      5: 8,
      6: 8,
    },
    previous: 6,
  },
  8: {
    question:
      "How much profit (EBITDA) did your business earn over the past 12 months?",
    type: "Mcq",
    options: [
      { name: "$0 - $1M", type: "Mcq", id: 1 },
      { name: "$1M - $2M", type: "Mcq", id: 2 },
      { name: "$2M - $3M", type: "Mcq", id: 3 },
      { name: "$3M - $5M", type: "Mcq", id: 4 },
      { name: "$10M+", type: "Mcq", id: 5 },
    ],
    next: {
      1: 9,
      2: 9,
      3: 9,
      4: 9,
      5: 9,
    },
    previous: 7,
  },
  9: {
    question: "(2/2) Annual Revenue?",
    type: "Mcq",
    options: [
      { name: "$0 - $250K", type: "Mcq", id: 1 },
      { name: "$250K - $500K", type: "Mcq", id: 2 },
      { name: "$500K - $750K", type: "Mcq", id: 3 },
      { name: "$750K - $1M", type: "Mcq", id: 4 },
    ],
    next: {
      1: 10,
      2: 10,
      3: 10,
      4: 10,
    },
    previous: 8,
  },
  10: {
    question:
      "(2/2) How much profit (EBITDA) did your business earn over the past 12 months?*",
    type: "Mcq",
    options: [
      { name: "$0 - $250K", type: "Mcq", id: 1 },
      { name: "$250K - $500K", type: "Mcq", id: 2 },
      { name: "$500K - $750K", type: "Mcq", id: 3 },
      { name: "$750K - $1M", type: "Mcq", id: 4 },
    ],
    next: {
      1: 11,
      2: 11,
      3: 11,
      4: 11,
    },
    previous: 9,
  },
  11: {
    question:
      "How much profit (EBITDA) did your business earn over the past 3 months?*",
    type: "Mcq",
    options: [
      { name: "$0 - $250K", type: "Mcq", id: 1 },
      { name: "$250K - $500K", type: "Mcq", id: 2 },
      { name: "$500K - $750K", type: "Mcq", id: 3 },
      { name: "$750K - $1.25M", type: "Mcq", id: 4 },
      { name: "$1.25M - $2.5M", type: "Mcq", id: 5 },
      { name: "$2.5M+", type: "Mcq", id: 6 },
    ],
    next: {
      1: 12,
      2: 12,
      3: 12,
      4: 12,
      5: 12,
      6: 12,
    },
    previous: 10,
  },
  12: {
    question: "Where did you FIRST hear of LS?*",
    type: "Mcq",
    options: [
      { name: "Instagram", type: "Mcq", id: 1 },
      { name: "Facebook", type: "Mcq", id: 2 },
      { name: "Twitter", type: "Mcq", id: 3 },
      { name: "LinkedIn", type: "Mcq", id: 4 },
      { name: "TikTok", type: "Mcq", id: 5 },
      { name: "Youtube", type: "Mcq", id: 6 },
      { name: "Books", type: "Mcq", id: 7 },
      { name: "Podcast", type: "Mcq", id: 8 },
      { name: "Other Peoples show", type: "Mcq", id: 9 },
    ],
    next: {
      1: 13,
      2: 13,
      3: 13,
      4: 13,
      5: 13,
      6: 13,
      7: 13,
      8: 13,
      9: 13,
    },
    previous: 11,
  },
  13: {
    question:
      "Are you a full or part owner of the company and can you decide how to allocate equity?*",
    type: "Mcq",
    options: [
      { name: "Yes", type: "Mcq", id: 1 },
      { name: "No", type: "Mcq", id: 2 },
    ],
    next: {
      1: 14,
      2: 14,
      3: 14,
      4: 14,
    },
    previous: 12,
  },
  14: {
    question: "First & Last Name?",
    type: "text",
    options: [
      { name: "First Name", type: "text", id: 1 },
      { name: "Last Name", type: "text", id: 2 },
    ],
    next: {
      1: 15,
      2: 15,
    },
    previous: 13,
  },
  15: {
    question: "Company Website URL?",
    type: "text",
    options: [{ name: "Url", type: "text", id: 1 }],
    next: {
      1: 16,
    },
    previous: 14,
  },
  16: {
    question: "What's Your Phone Number?",
    type: "text",
    options: [{ name: "Num", type: "text", id: 1 }],
    next: {
      1: 17,
    },
    previous: 15,
  },
  17: {
    question: "What's Your Best Email?",
    type: "text",
    options: [{ name: "email", type: "text", id: 1 }],
    next: {
      1: true,
    },
    previous: 16,
  },

  19: {
    question: "(2/2) Annual Revenue?",
    type: "Mcq",
    options: [
      { name: "$0 - $250K", type: "Mcq", id: 1 },
      { name: "$250K - $500K", type: "Mcq", id: 2 },
      { name: "$500K - $750K", type: "Mcq", id: 3 },
      { name: "$750K - $1M", type: "Mcq", id: 4 },
    ],
    next: {
      1: 20,
      2: 20,
      3: 20,
      4: 20,
    },
    previous: 4,
  },
  20: {
    question: "What's Your Best Email?",
    type: "text",
    options: [{ name: "email", type: "text", id: 1 }],
    next: {
      1: true,
    },
    previous: 19,
  },
};

export default questions;
