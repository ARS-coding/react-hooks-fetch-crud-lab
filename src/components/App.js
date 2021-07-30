import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("");
  const URL = "http://localhost:4000/questions";

  return (
    <main>
      <AdminNavBar setPage={setPage} />
      {page === "Form" ? <QuestionForm URL={URL} /> : null}
      {page === "List" ? <QuestionList URL={URL} /> : null}
    </main>
  );
}

export default App;
