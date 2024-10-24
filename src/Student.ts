
export enum EducationalLevel {
  HIGH_SCHOOL = 'high-shcool',
  UNIVERITY = 'university',
  POSTGRADUATE = 'postgraduate'
}

export class Student {
  constructor(
      public name: string,
      public surnames: string,
      public avatar: string,
      public age: number,
      public educationalLevel: EducationalLevel
  ){}
}