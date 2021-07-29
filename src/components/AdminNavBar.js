import React from "react";

function AdminNavBar({ setPage }) { // onChangePage = setPage
  return (
    <nav>
      <button onClick={() => setPage("Form")}>New Question</button>
      <button onClick={() => setPage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
