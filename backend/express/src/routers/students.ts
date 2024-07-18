import express from "express";
import { studentModel } from "../models/students";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).send(students);
  } catch {
    res.status(500).send("something went wrong");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) res.status(404);
    res.status(200).send(student);
  } catch (err) {
    throw err;
  }
});
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const newStudent = await studentModel.create(body);
    newStudent.save();
    res.status(201).send(newStudent);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const student = await studentModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!student) return res.status(404).send(`Not found student By id ${id}`);

    res.send(student);
  } catch (err) {
    throw err;
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) return res.status(404).send(`Not found student By id ${id}`);

    res.send("oky");
  } catch (err) {
    throw err;
  }
});
export default router;
