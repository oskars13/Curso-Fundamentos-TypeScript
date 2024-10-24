import { domIDS, EducationalLevel } from "./constants.js"
import { Student } from "./class/Student.js"
import { $id, renderStats, renderStudent } from "./utils.js"
import { Course } from "./class/Course.js"


document.addEventListener('DOMContentLoaded', () => {

  const courses = [
    new Course('Estructuras de Datos', 20, 90, true, 2023),
    new Course('Arquitectura de Software', 40, 30, false, 2022),
    new Course('Computaciön', 70, 100, true, 2023),
  ]

  const student = new Student('Óscar', 'Martí­nez Vicente', 'avatar.png', 20, EducationalLevel.HIGH_SCHOOL, courses)
  const studentTable = <HTMLTableElement>$id(domIDS.studentTable)
  const statsTable = <HTMLTableElement>$id(domIDS.statsTable)

  renderStudent(student, studentTable)
  renderStats(student, statsTable)
})