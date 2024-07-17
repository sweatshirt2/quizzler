import Quiz from './Quiz'
import { Provider } from 'react-redux'
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  )
}

export default App
