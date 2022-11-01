import './App.css';
import { Routes, Route } from "react-router-dom";
import QuizManager from './QuizManager/QuizManager';
import QuizCreator from './QuizCreator/QuizCreator';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<QuizManager />} />
        <Route path='/create' element={<QuizCreator />} />
      </Routes>
    </div>
  );
}

export default App;
