import { Student } from "../utiles/data";

const BASE_URL = "http://localhost:5000/students";
export const fetchStudent = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok)
      throw new Error(`${response.statusText}:${response.status}`);
    return await response.json();
  } catch (err) {
    throw err;
  }
};
export const createStudent = async (data: Student) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok)
      throw new Error(`${response.statusText}:${response.status}`);
    return await response.json();
  } catch (err) {
    throw err;
  }
};
