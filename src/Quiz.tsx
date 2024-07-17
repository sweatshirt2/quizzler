import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { passQuestion } from "./states/quiz"; 

export default function Quiz() {

  const dispatch = useDispatch();

  const [ answer, setAnswer ] = useState(1);
  const [ result, setResult ] = useState(false);
  const [ q, setQ ] = useState(1); // index of the question
  const question_states = ['', 'step-primary', 'step-error'] 

  const db = useSelector((state: RootState) => state.quiz.value);

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
            { db[q-1].question }
          </div>
          <div className="divider"></div>
          <div className="alternatives place-items-left grid space-y-4 px-8">
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(0)} />
              <span>{ db[q-1].options[0] }</span>
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(1)} />
              <span>{ db[q-1].options[1] }</span>
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(2)} />
              <span>{ db[q-1].options[2] }</span>
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(3)} />
              <span>{ db[q-1].options[3] }</span>
            </div>

            <button className="bg-primary" onClick={() => {
              dispatch(passQuestion({ id: q, action: 1, }));
              if (q < 20) {
                setQ(prev => prev + 1);
              }
            }}>Answer</button>
          </div>
        </div>
      </main>

      <div className={`navigate-quiz flex w-2/3 items-center ${ q > 1 ? 'justify-between' : 'justify-end' }`}>
        { q > 1 ? <button className="bg-gray-300" onClick={() => setQ(prev => prev - 1)}>Prev</button> : null }
        { q < 20 ? <button className="bg-gray-300" onClick={() => {

          if(db[q-1].answered === 0) { 
            dispatch(passQuestion({ id: q, action: 2,}));
          };

          setQ(prev => prev + 1);
          console.log(db[q-1].answered);

          }}>Next</button> : null}
          
      </div>
      <footer className="py-5 w-full px-48">
        <div className="overflow-x-auto">
          <ul className="steps">
            {
              db.map((question, i) => (
                <li className={`step ${ q !== question.id ? question_states[question.answered] : 'step-warning' }`} onClick={() => setQ(i)}></li>
              ))
            }
          </ul>
        </div>
      </footer>
    </div>
  )
}