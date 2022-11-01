import './App.css';
import { Routes, Route } from "react-router-dom";
import QuizManager from './QuizManager/QuizManager';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<QuizManager />} />
      </Routes>
    </div>
  );
}

export default App;
