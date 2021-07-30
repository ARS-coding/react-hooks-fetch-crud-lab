import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({URL}) {

  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const json = await fetch(URL).then(response => response.json());
      setQuestionData(json);
    }
    fetchData();
  }, []);
  
  console.log(questionData)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questionData.map((questionObj, index) => {
            return (
              <QuestionItem 
                key={index}
                question={questionObj}
                URL={URL}
              />
            );
          })
        }
      </ul>
    </section>
  );
}

export default QuestionList;
