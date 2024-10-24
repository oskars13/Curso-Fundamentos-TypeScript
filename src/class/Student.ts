import { Course } from "./Course";
import { EducationalLevel } from "../constants";


export class Student {
  constructor(
      public name: string,
      public surnames: string,
      public avatar: string,
      public age: number,
      public educationalLevel: EducationalLevel,
      public courses: Course[]
  ){}

  public get certificatesAmount(){
    const start = 0
    return this.courses
      .reduce((acc, current) => {
        if (current.passed) return ++acc
        else return acc
      }, start)
  }
}