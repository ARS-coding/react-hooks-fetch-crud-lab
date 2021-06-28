import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3000/questions";
    async function fetchData(URL) {
      const json = await fetch(URL).then(response => response.json());
      setQuestionData(json);
    }
    fetchData(URL);
  }, []);


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionData.map((questionObj, index) => <QuestionItem key={index} question={questionObj} />)}</ul>
    </section>
  );
}

export default QuestionList;
