

export class Course {
  constructor(
    public name: string,
    public duration: number,
    public mark: number,
    public passed: boolean,
    public startDate: number
  ){}
}