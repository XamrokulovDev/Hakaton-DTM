import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchApi } from "../../Redux/fetchApi";
import { motion } from "framer-motion";

const SeniorPage = () => {
  const dispatch = useDispatch();
  const fetch = useSelector((state) => state.api.api);
  const fetchStatus = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (fetchStatus === "idle") {
      dispatch(fetchApi());
    }
  }, [fetchStatus, dispatch]);

  useEffect(() => {
    if (fetchStatus === "succeeded") {
      calculateTotalQuestions();
    }
  }, [fetchStatus]);

  const handleOptionChange = (questionId, selectedOption) => {
    const updatedAnswers = {
      ...selectedAnswers,
      [questionId]: selectedOption,
    };
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    const test = currentTest();
    if (test && selectedAnswers[test.id]) {
      if (currentQuestionIndex + 1 < totalQuestions) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateScore();
        setShowScore(true);
      }
    } else {
      alert("Iltimos, variantni tanlang!");
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    fetch.forEach((item) => {
      if (item.title === "senior" && item.tests) {
        item.tests.forEach((test) => {
          if (selectedAnswers[test.id] === test.correct_option) {
            correctAnswers++;
          }
        });
      }
    });
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    setScore(scorePercentage);
  };

  const calculateTotalQuestions = () => {
    let total = 0;
    fetch.forEach((item) => {
      if (item.title === "junior" && item.tests) {
        total = item.tests.length;
      }
    });
    setTotalQuestions(total);
  };

  const currentTest = () => {
    if (fetchStatus === "succeeded" && Array.isArray(fetch)) {
      const juniorItems = fetch.filter((item) => item.title === "junior");
      if (juniorItems.length > 0 && juniorItems[0].tests.length > 0) {
        return juniorItems[0].tests[currentQuestionIndex];
      }
    }
    return null;
  };

  const test = currentTest();

  return (
    <div className="container mt-36 px-4">
      {fetchStatus === "loading" && <p>Loading...</p>}
      {fetchStatus === "succeeded" && !showScore && test ? (
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 border-2 p-5 max-md:p-3 my-10 shadow-tests rounded-xl overflow-auto"
        >
          <p className="text-2xl text-[#03346E] font-medium mb-5 break-words">
            {currentQuestionIndex + 1}. {test.question}
          </p>
          <div className="flex flex-col gap-2">
            {["A", "B", "C", "D"].map((option) => (
              <label
                key={option}
                className={`flex items-center p-2 border rounded cursor-pointer ${
                  selectedAnswers[test.id] === option ? "text-red-500 border-2 border-red-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${test.id}`}
                  value={option}
                  checked={selectedAnswers[test.id] === option}
                  onChange={() => handleOptionChange(test.id, option)}
                  className="mr-2"
                />
                <span className="text-[#03346E]">
                  {test[`option_${option.toLowerCase()}`] || "N/A"}
                </span>
              </label>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="w-36 mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Keyingi savol
          </button>
        </motion.div>
      ) : fetchStatus === "succeeded" && showScore ? (
        <div className="mt-5 border py-20 my-20">
          <p className="text-xl text-[#03346E] text-center font-medium">Sizning junior darajasi uchun topshirgan testingiz natijasi: {score.toFixed(2)}%</p>
        </div>
      ) : fetchStatus === "succeeded" && totalQuestions === 0 ? (
        <div className="mt-5">
          <p>Testlar mavjud emas.</p>
        </div>
      ) : (
        ""
      )}
      {fetchStatus === "failed" && <p>{error}</p>}
    </div>
  );
};

export default SeniorPage;