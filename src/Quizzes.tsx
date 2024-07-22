import { titles, getQuiz } from "./states/quiz";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { quiz } from './states/UserAtom';

export default function Quizzes() {
  const [ on_quiz, setOnQuiz ] = useAtom(quiz);
  const dispatch = useDispatch();
  

  return (
    <main className="mx-20 py-12 px-16 bg-slate-700 mt-8">
      <div className="text-3xl font-bold">Quizzes</div>
      <div className="titles flex flex-col gap-2 mt-5 w-full">
      {
        titles.map((title, i) => (
          <div className="title flex gap-10 justify-start w-full py-4" key={`title-${i}`} onClick={() => {
            setOnQuiz(true);
            dispatch(getQuiz({subject: title}));
            console.log(title);
          }}>
            <Link to='/quiz' className="text-xl font-semibold w-80"> { title } </Link>
            <p className="flex items-end">Test your knowledge on the fundamentals of { title }</p>
          </div>
        ))
      }
      </div>
    </main>
  )
}
