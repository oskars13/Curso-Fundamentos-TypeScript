
export enum NivelEducativo {
  BACHILLERATO = 'bachillerato',
  UNIVERSITARIO = 'universitario',
  POSGRADO = 'posgrado'
}

export class Aprendiz {
  constructor(
      public nombre: string,
      public apellidos: string,
      public avatar: string,
      public edad: number,
      public nivelEducativo: NivelEducativo
  ){}
}