import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { passQuestion } from "./states/quiz"; 

export default function Quiz() {

  const dispatch = useDispatch();
  
  const [answered, setAnswered] = useState(new Array(20).fill(-1));
  const [answer, setAnswer] = useState(0);
  const [result, setResult] = useState<number>();
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [missed, setMissed] = useState<number[]>();
  const [q, setQ] = useState(1); // index of the question
  const question_states = ['', 'step-primary', 'step-error'];


  const submitQuiz = () => {
    const new_missed: number[] = [];
    db.forEach((question, i) => {
      console.log(answered[i]);
      if (answered[i] === -1) {
        setAttempted(true);
        return;
      }
      if (answered[i] !== question.answer) {
        new_missed.push(i+1);
      }
    });
    setMissed(new_missed);
    console.log(missed);
    setSubmitted(true);
    setResult(20-new_missed.length);
  }

  const db = useSelector((state: RootState) => state.quiz.value);

  return (

    <main className="w-full flex flex-col justify-around items-center pt-5">
      {
        submitted ?
        <div>Submitted Successfully
          {
            missed.length === 0 ?
            <div>Congradulations! Your result is {result}/20.</div>
            :
            <div>
              <h3>You have missed the following questions</h3>
              {missed.map(miss => <span>{ miss },</span>)}
            </div>
          }
        </div>
        :
        <div className="flex flex-col rounded-2xl bg-slate-800 px-12 py-8 w-1/2">
          <div className="question text-2xl font-bold px-6">
            { db[q-1].question }
          </div>
          <div className="divider"></div>
          <div className="alternatives place-items-left grid space-y-4 px-8">
            <div className="flex items-center space-x-6 font-semibold">
              <input type="radio" name="radio" className="radio" onClick={() => setAnswer(0)} defaultChecked />
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
            <button className="bg-primary text-gray-900 cursor-pointer" onClick={() => {
              dispatch(passQuestion({ id: q, action: 1, }));
              if (q < 20) {
                setQ(prev => prev + 1);
              }
              setAnswered(answered.map((element: number, i) => i === q-1 ? answer : element ));
              console.log(answered);
            }}>{ db[q-1].answered === 0 ? 'Answer' : 'Change Answer' }</button>
          </div>
          <div className={`navigate-quiz pt-10 flex w-2/3 items-center ${ q > 1 ? 'justify-between' : 'justify-end' }`}>
            { q > 1 ? <button className="bg-gray-300 text-gray-900" onClick={() => setQ(prev => prev - 1)}>Prev</button> : null }
            { q < 20 ? <button className="bg-gray-300 text-gray-900" onClick={() =>  {
              if(db[q-1].answered === 0) { 
                dispatch(passQuestion({ id: q, action: 2,}));
              } 
              setQ(prev => prev + 1);
              console.log(db[q-1].answered) 
              }}>Next</button>
              :
              <button className="bg-gray-300 text-gray-900" onClick={submitQuiz}>Finish</button>
            }
          </div>

          {
            attempted ? <div>Make sure you answered all the questions</div> : null
          }

        </div> 
      }
      <div className="w-full px-24 pb-2 absolute bottom-0">
        <div className="overflow-x-auto">
          <ul className="steps">
          {
            db.map((question, i) => (
              <li key={ `question_${question.id}_status` } className={`step ${ q !== question.id ? question_states[question.answered] : 'step-warning' }`} onClick={() => 
                setQ(i + 1)
              }></li>
            ))
          }
          </ul>
        </div>
      </div>
    </main>
  )
}