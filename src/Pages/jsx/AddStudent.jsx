import Sidebar from "../../components/Sidebar";
import "../css/AddStudent.css";

function AddStudent() {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <h1>Add a New Student</h1>
        <p>This page will later have a form to add students.</p>
      </div>
    </div>
  );
}

export default AddStudent;
