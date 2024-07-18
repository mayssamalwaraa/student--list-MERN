import { useEffect, useState } from "react";
import { fetchStudent } from "./api/students";
import { AddStudent } from "./components/AddStudent";
import { StudentTabel } from "./components/StudentTabel";
import { data, Student } from "./utiles/data";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudent()
      .then((data) => setStudents(data))
      .catch((err) => alert("something went wrong"));
  }, []);
  return (
    <>
      <StudentTabel students={students} />
      <AddStudent students={students} setStudents={setStudents} />
    </>
  );
}

export default App;
