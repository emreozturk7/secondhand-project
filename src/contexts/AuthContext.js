import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [score, setScore] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [tour, setTour] = useState(1);

  const [step, setStep] = useState(0);
  const [newQuestion, setNewQuestion] = useState();

  const [resultAnswers, setResultAnswers] = useState([]);

  useEffect(() => {
    const question = generateQuestion();
    setNewQuestion(question);
  }, [step]);


  const generateQuestion = () => {
    const first = Math.floor(Math.random() * 10) + 1;
    const second = Math.floor(Math.random() * 10) + 1;
    const randomLocation = Math.floor(Math.random() * 3) + 1;

    let result1 = [first * second];
    let result2 = first * (second - 1);
    let result3 = first * (second + 1);

    if (randomLocation === 1) {
      result2 = [first * second];
      result3 = first * (second - 1);
      result1 = first * (second + 1);
    }
    else if (randomLocation === 2) {
      result3 = [first * second];
      result1 = first * (second - 1);
      result2 = first * (second + 1);
    }
    return { firstNumber: first, secondNumber: second, result1: result1, result2: result2, result3: result3, randomLocation: randomLocation };
  };

  const addNewResult = (firstNumber, secondNumber, result, isCorrect) => {
    setResultAnswers([...resultAnswers, { 'firstNumber': firstNumber, 'secondNumber': secondNumber, 'result': result, 'isCorrect': isCorrect }]);
  };

  const addScore = (data) => {
    setScore(score + data);
  };

  const addTotalQuestion = (data) => {
    setTotalQuestion(totalQuestion + data);
  };
  const clearResults = () => {
    setTotalQuestion(0);
    setCorrectAnswers(0);
    setScore(0);
    setResultAnswers([]);
  };

  const addCorrectAnswers = (data) => {
    setCorrectAnswers(correctAnswers + data);
  };

  const addTour = () => {
    setTour(tour + 1);
  };

  return (
    <AuthContext.Provider
      value={{
        score,
        totalQuestion,
        correctAnswers,
        tour,
        addScore,
        addTotalQuestion,
        addCorrectAnswers,
        addTour,
        step,
        setStep,
        newQuestion,
        resultAnswers,
        addNewResult,
        clearResults,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, AuthContext, useAuth };