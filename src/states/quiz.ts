import { createSlice } from "@reduxjs/toolkit";

interface Question {
  answered: number,
  id: number;
  question: string;
  options: string[];
  answer: number;
}

interface QuizState {
  value: Question[];
}
// fetch()
const db = {
  "questions": [
    {
      "answered": 0,
      "id": 1,
      "question": "What is the capital of France?",
      "options": [
        "London",
        "Paris",
        "Berlin",
        "Rome"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Who wrote 'Harry Potter' series?",
      "options": [
        "J.K. Rowling",
        "Stephen King",
        "George R.R. Martin",
        "Tolkien"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 3,
      "question": "Which planet is known as the Red Planet?",
      "options": [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 4,
      "question": "What is the largest mammal in the world?",
      "options": [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Lion"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 5,
      "question": "Who painted the Mona Lisa?",
      "options": [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 6,
      "question": "In which year did World War II end?",
      "options": [
        "1945",
        "1918",
        "1939",
        "1950"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 7,
      "question": "What is the smallest country in the world?",
      "options": [
        "Russia",
        "Vatican City",
        "Monaco",
        "Singapore"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 8,
      "question": "Who discovered penicillin?",
      "options": [
        "Alexander Fleming",
        "Marie Curie",
        "Albert Einstein",
        "Isaac Newton"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 9,
      "question": "What is the longest river in the world?",
      "options": [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 10,
      "question": "Who was the first President of the United States?",
      "options": [
        "George Washington",
        "Thomas Jefferson",
        "Abraham Lincoln",
        "John Adams"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Which animal is known as the 'King of the Jungle'?",
      "options": [
        "Lion",
        "Tiger",
        "Leopard",
        "Elephant"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 12,
      "question": "What is the currency of Japan?",
      "options": [
        "Yuan",
        "Peso",
        "Yen",
        "Dollar"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 13,
      "question": "Who invented the telephone?",
      "options": [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Guglielmo Marconi"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Which country is famous for its tulips?",
      "options": [
        "Netherlands",
        "Italy",
        "France",
        "Germany"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 15,
      "question": "What is the chemical symbol for water?",
      "options": [
        "H2O",
        "CO2",
        "O2",
        "NaCl"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Which is the largest ocean on Earth?",
      "options": [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 18,
      "question": "What is the main ingredient in guacamole?",
      "options": [
        "Avocado",
        "Tomato",
        "Onion",
        "Lime"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 19,
      "question": "Who was the first person to walk on the moon?",
      "options": [
        "Neil Armstrong",
        "Buzz Aldrin",
        "Yuri Gagarin",
        "Alan Shepard"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      "options": [
        "Venus",
        "Mars",
        "Mercury",
        "Jupiter"
      ],
      "answer": 0
    }
  ]
}

function shuffleQuestions(questions: Question[]) {
  for (let i = 0; i < questions.length; i++) {
    const rand = Math.floor(Math.random() * questions.length);
    [ questions[i], questions[rand] ] = [ questions[rand], questions[i] ];
  }
  return questions;
}

function removeDone(questions: Question[], id: number) {
  const remaining_questions = questions.filter(question => {
    question.id !== id;
  });
  return remaining_questions;
}

function markPassed(questions: Question[], id: number, action: number) {
  const remaining_questions = questions.map(question => {
    if(question.id === id) {
      return {
        ...question,
        answered: action,
    };
  }
    return question;
  });
  return remaining_questions;
}

const quiz_slice = createSlice({
  name: "quiz",
  initialState: { value: db.questions },
  reducers: {
    passQuestion: (state, action) => {
      return {
        ...state,
        value: markPassed(state.value, action.payload.id, action.payload.action),
      }
    }
  }
});

export type { QuizState };
export const { passQuestion } = quiz_slice.actions;
export default quiz_slice.reducer;