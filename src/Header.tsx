import { useAtom } from "jotai";
import { quiz, user_status } from "./states/UserAtom";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  const [ on_quiz, setOnQuiz] = useAtom(quiz);
  const [ logged_in, setLoggedIn] = useAtom(user_status);

  return (
    <header className="w-full pb-6">
        {on_quiz ?
        <div className="navbar bg-slate-800 px-8">
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
              <li><section className="font-semibold bg-slate-300 text-gray-900">Hints: 3</section></li>
              <li><section className="font-semibold">13 minutes left</section></li>
              <li><a className="bg-warning text-gray-900">Pause</a></li>
              <li onClick={() => {
                setOnQuiz(false);
              }}><Link className="bg-error text-gray-900" to='/quizzes'>Quit</Link></li>
              <li onClick={() => {
                setOnQuiz(false);
              }}><Link className="bg-primary text-gray-900" to='/quizzes'>Finish</Link></li>
            </ul>
          </div>
        </div>
        :
        <div className="navbar bg-slate-800 px-8">
          <div className="flex-1">
            <a className="ml-2 btn btn-ghost text-3xl font-extrabold">Quizzler</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-5 flex items-center">
              {
              logged_in
              ?
              <li>
                <details>
                  <summary>Username & Passwords</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>username: bekur<br/>password: bekur1</li>
                    <li>username: abel<br/>password: abel2</li>
                    <li>username: ziyad<br/>password: ziyad3</li>
                  </ul>
                </details>
              </li>
              :
              <li><section className="font-semibold text-xl">UserName</section></li>
              }
              <ul className='flex gap-2'>
                <li onClick={() => setOnQuiz(false)}><NavLink to='/' className='text-gray-200'>Home</NavLink></li>
                <li onClick={() => setOnQuiz(false)}><NavLink to='/quizzes' className='text-gray-200'>Quizzes</NavLink></li>
                <li onClick={() => setOnQuiz(false)}><NavLink to='/profile' className='text-gray-200'>Profile</NavLink></li>
              </ul>
              <li><a className="bg-primary text-gray-100">Log Out</a></li>
            </ul>
          </div>
        </div>
        }
      </header>
  )
}
