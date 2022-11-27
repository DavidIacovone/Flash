import './App.css';
import { Routes, Route } from "react-router-dom";
import QuizManager from './QuizManager/QuizManager';
import QuizCreator from './QuizCreator/QuizCreator';
import Results from './Results/Results';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<QuizManager />} />
        <Route path='/create' element={<QuizCreator />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
