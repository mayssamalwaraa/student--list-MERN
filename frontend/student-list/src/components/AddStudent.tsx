import { Button, Paper, TextField } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createStudent } from "../api/students";
import { Student } from "../utiles/data";

interface Props {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>;
}
const initialFormData = {
  id: 999,
  fullName: "",
  age: "",
  email: "",
  class: "",
};
export const AddStudent = ({ students, setStudents }: Props) => {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const data = await createStudent(formData);
      setStudents([...students, data]);
      setFormData(initialFormData);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    console.log("Fire useEffect");
    if (formData.fullName === "Admin") alert("can not add admin as a name");
  }, [formData.fullName]);
  return (
    <Paper
      sx={{
        width: 300,
        padding: 5,
        marginTop: "25px",
        gap: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        value={formData.fullName}
        label="Full name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        value={formData.age}
        label="Age"
        name="age"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.email}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        value={formData.class}
        label="Class"
        name="class"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Paper>
  );
};
