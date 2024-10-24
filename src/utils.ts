import { domIDS } from "./constants"
import { Student } from "./Student"

export const $id = (id: domIDS) => {
  const element = document.getElementById(id)
  if (element) return element
  else throw new Error(`Cannot find Element with ID: ${id}`)
}

export const renderStudent = (student: Student, table: HTMLTableElement) => {
  const body = document.createElement('tbody')
  body.innerHTML = [
    `<tr><td colspan=2><img src="../public/${student.avatar}"/></td></tr>`,
    `<tr><td>Nombre:</td><td>${student.name}</td></tr>`,
    `<tr><td>Apellidos:</td><td>${student.surnames}</td></tr>`,
    `<tr><td>Edad:</td><td>${student.age}</td></tr>`,
    `<tr><td>Nivel Educativo:</td><td>${student.educationalLevel}</td></tr>`,
  ].join('')

  table.appendChild(body)
}