import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Browser, Link, NavLink } from 'react-router-dom';

import store from './store';
import { useAtom } from 'jotai';
import { user_status, quiz } from './states/UserAtom';

import Header from './Header';
import Quiz from './Quiz';
import Home from './Home';
import Profile from './Profile';
import Quizzes from './Quizzes';
import SignUp from './SignUp';

function App() {

  return (
    <Browser>
      <Header />
      <Provider store={store}>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path='quizzes' element={<Quizzes />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='quiz' element={<Quiz />}></Route>
        </Routes>
      </Provider>
      {/* <footer className="py-5 w-full px-48">
        
      </footer> */}
      </Browser>
  )
}

export default App
