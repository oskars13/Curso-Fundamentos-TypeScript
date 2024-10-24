import { domIDS } from "./constants.js"
import { Student, EducationalLevel } from "./Student.js"
import { $id, renderStudent } from "./utils.js"


document.addEventListener('DOMContentLoaded', () => {

  const student = new Student('Óscar', 'Martí­nez Vicente', 'avatar.png', 20, EducationalLevel.HIGH_SCHOOL)
  const studentElement = <HTMLTableElement>$id(domIDS.table)

  renderStudent(student, studentElement)
})