import { useState } from "react"


export default function Quiz() {

  const [ answer, setAnswer ] = useState(1);
  const [ result, setResult ] = useState(false);

  const db = {
    "questions": [
      {
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

  return (
    <div className="content flex flex-col items-center justify-between min-h-screen w-full">
      <header className="w-full">
        <div className="navbar bg-slate-400">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Quiz Id: xxxxxx</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-5">
              <li>
                <details>
                  <summary>Options</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                  </ul>
                </details>
              </li>
              <li><section className="font-semibold bg-slate-300">Hints: xx</section></li>
              <li><section className="font-semibold">xx minutes left</section></li>
              <li><a className="bg-warning text-gray-100">Pause</a></li>
              <li><a className="bg-error text-gray-100">Quit</a></li>
              <li><a className="bg-primary text-gray-100">Finish</a></li>
            </ul>
          </div>
        </div>
      </header>

      <main className="w-full flex justify-center">
        <div className="flex flex-col rounded-2xl bg-slate-100 px-12 py-12 w-1/2">
          <div className="question text-2xl font-bold px-6">
            { db.questions[1].question }
          </div>
          <div className="divider"></div>
          <div className="alternatives place-items-left grid space-y-4 px-8">
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(0)} />
              <span>{ db.questions[1].options[0] }</span>
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(1)} />
              <span>{ db.questions[1].options[1] }</span>
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(2)} />
              <span>{ db.questions[1].options[2] }</span>
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(3)} />
              <span>{ db.questions[1].options[3] }</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-5">
        <div className="overflow-x-auto">
          <ul className="steps">
            <li className="step step-primary"></li>
            <li className="step">start</li>
            <li className="step step-secondary">2</li>
            <li className="step">3</li>
            <li className="step step-accent">4</li>
            <li className="step">5</li>
            <li className="step step-error">6</li>
            <li className="step">7</li>
            <li className="step step-warning">8</li>
            <li className="step">9</li>
            <li className="step step-neutral">10</li>
            <li className="step step-neutral">end</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}