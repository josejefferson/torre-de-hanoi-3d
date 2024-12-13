import { generate, hastes, numeroRosquinhas } from './hastes.js'
import { animarRosquinhaFlutuante, sleep } from './helpers.js'

const origem = hastes[0]
const auxiliar = hastes[1]
const destino = hastes[2]

export async function resolver() {
  generate()
  sleep(1000)

  let orig = origem
  let dest = destino
  let aux = auxiliar

  // Se o número de rosquinhas for par, troca o destino e o auxiliar
  if (numeroRosquinhas % 2 === 0) [dest, aux] = [aux, dest]

  // Calcula o número de movimentos necessários para resolver
  const movimentos = 2 ** numeroRosquinhas - 1

  // Sequência de movimentos:
  // Origem <--> Destino
  // Origem <--> Auxiliar
  // Auxiliar <--> Destino
  for (let i = 0; i < movimentos; i++) {
    if (i % 3 === 0) await moverRosquinha(orig, dest)
    if (i % 3 === 1) await moverRosquinha(orig, aux)
    if (i % 3 === 2) await moverRosquinha(aux, dest)
  }
}

// Verifica qual ordem é possível mover (de A para B ou de B para A)
async function moverRosquinha(a, b) {
  const topoA = a.peek()
  const topoB = b.peek()

  const moverAparaB = async () => {
    const rosquinha = a.pop()
    await sleep(300)
    await animarRosquinhaFlutuante(rosquinha, b)
    b.push(rosquinha)
  }

  const moverBparaA = async () => {
    const rosquinha = b.pop()
    await sleep(300)
    await animarRosquinhaFlutuante(rosquinha, a)
    a.push(rosquinha)
  }

  if (!topoA) await moverBparaA()
  else if (!topoB) await moverAparaB()
  else if (topoA.tamanho > topoB.tamanho) await moverBparaA()
  else await moverAparaB()

  await sleep(500)
}
