import { domIDS } from "./constants"

export const $id = (id: domIDS) => {
  const element = document.getElementById(id)
  if (element) return element
  else throw new Error(`Cannot find Element with ID: ${id}`)
}

