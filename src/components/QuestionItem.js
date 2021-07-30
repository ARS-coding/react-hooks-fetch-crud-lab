import React from "react";

function QuestionItem({ question, URL, setIsQuestionDeleted }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  )); // create the answer options for the individual question

  function handleSelectChange(event) { // make a HTTP PATCH request to change the correct answers index on the server 
    const changedCorrectIndex = event.target.value;
    const configurationObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({correctIndex: changedCorrectIndex})
    };
    fetch(`${URL}/${id}`, configurationObj).then(resp => console.log(resp))
  }

  function deleteQuestion() {
    const configurationObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    fetch(`${URL}/${id}`, configurationObj).then(resp => console.log(resp));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleSelectChange}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
