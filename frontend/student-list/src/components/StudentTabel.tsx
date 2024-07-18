import { data, Student } from "../utiles/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";

interface Props {
  students: Student[];
}

export const StudentTabel = ({ students }: Props) => {
  useEffect(() => {
    if (students.length === 5) alert("Max Limit");
  }, [students]);
  return (
    <>
      <TableContainer component={Paper} sx={{ width: 400 }}>
        <Table size="small" sx={{ border: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((item) => {
              return (
                <TableRow>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.class}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
