import { domIDS, EducationalLevel } from "./constants.js"
import { Student } from "./class/Student.js"
import { $id } from "./utils.js"
import { Course } from "./class/Course.js"
import { Renderer } from "./class/Renderer.js"


document.addEventListener('DOMContentLoaded', () => {
  const courses = [
    new Course('Estructuras de Datos', 20, 90, true, 2023),
    new Course('Arquitectura de Software', 40, 30, false, 2022),
    new Course('Computación', 70, 100, true, 2023),
  ]
  const student = new Student('Óscar', 'Martí­nez Vicente', 'avatar.png', 20, EducationalLevel.HIGH_SCHOOL, courses)

  const studentTable = <HTMLTableElement>$id(domIDS.studentTable)
  const statsTable = <HTMLTableElement>$id(domIDS.statsTable)
  const coursesTable = <HTMLTableElement>$id(domIDS.coursesTable)

  const render = new Renderer()
  render
    .student(student, studentTable)
    .stats(student, statsTable)
    .courses(student, coursesTable)

  const coursesFilter = <HTMLInputElement>$id(domIDS.coursesinput)
  const coursesButton = <HTMLInputElement>$id(domIDS.coursesButton)

  coursesButton.onclick = () => {
    render.courses(student, coursesTable, coursesFilter.value)
  }
})