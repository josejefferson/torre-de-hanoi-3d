import { Haste, Rosquinha } from './stack.js'

export const hastes = [new Haste(-1), new Haste(0), new Haste(1)]
window.hastes = hastes

export let numeroRosquinhas = prompt('Digite o número de rosquinhas')

export async function generate() {
  hastes[0].clear()
  hastes[1].clear()
  hastes[2].clear()

  if (!numeroRosquinhas) {
    numeroRosquinhas = 5
  } else {
    numeroRosquinhas = Number(numeroRosquinhas)
  }

  Haste.Y_FLUTUANTE = Math.max(11, numeroRosquinhas * 2)

  for (let i = numeroRosquinhas - 1; i >= 0; i--) {
    hastes[0].push(new Rosquinha(i))
  }
}
