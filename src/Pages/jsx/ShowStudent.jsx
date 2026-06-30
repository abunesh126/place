import Sidebar from "../../components/Sidebar";
import students from "../../data/studentdata";
import "../css/ShowStudent.css";

function ShowStudent() {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <h1>Student List</h1>

        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {/* .map() loops over every student and creates a row for each one */}
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowStudent;
