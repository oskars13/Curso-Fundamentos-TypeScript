import { Student } from "./Student"

export class Renderer {

  private joinHTML(...html: string[]): string {
    return html.join('')
  }

  private createRow(...contents: string[]): string {
    const html = contents
      .map( content => {
        return `<td>${content}</td>`
      })
    return `<tr>${this.joinHTML(...html)}</tr>` 
  }
  
  public student(student: Student, table: HTMLTableElement): this {
    const body = document.createElement('tbody')
    body.innerHTML = this.joinHTML(
      `<tr><td colspan=2><img src="../public/${student.avatar}"/></td></tr>`,
      this.createRow('Nombre:', student.name),
      this.createRow('Apellidos:', student.surnames),
      this.createRow('Edad:', student.age.toString()),
      this.createRow('Nivel Educativo:', student.educationalLevel),
    )
  
    table.appendChild(body)
    return this
  }
  
  public stats(student: Student, table: HTMLTableElement): this {
    const body = document.createElement('tbody')
    body.innerHTML = [
      this.createRow('Certificados:', student.certificatesAmount.toString()),
    ].join('')
    table.appendChild(body)
    return this
  }

  public courses(student: Student, table: HTMLTableElement): this {
    const body = document.createElement('tbody')
    body.innerHTML = this.joinHTML(
      ...student.courses
        .map( course => this.createRow(
          course.name, 
          course.duration.toString(), 
          course.mark.toString(), 
          course.startDate.toString()
      ))
    )
    table.appendChild(body)
    return this
  }
}