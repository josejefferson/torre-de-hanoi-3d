import { hastes } from './hastes.js'
import { animarRosquinhaFlutuante } from './helpers.js'
import { resolver } from './resolver.js'

export let rosquinhaSelecionada = null
let rosquinhaSelecionadaPos = null

function handleKeyUp(event) {
  if (event.key === 'r') return resolver()

  const index = +event.key - 1
  if (isNaN(index)) return

  const haste = hastes[index]
  if (!haste) return

  if (rosquinhaSelecionada === null) {
    // Remove a rosquinha da haste e flutua ela
    rosquinhaSelecionada = haste.pop()
    rosquinhaSelecionadaPos = index
  } else if (rosquinhaSelecionadaPos === index) {
    // Insere a rosquinha na haste
    try {
      haste.push(rosquinhaSelecionada)
      rosquinhaSelecionada = null
    } catch {
      // Animação quando não pode colocar a rosquinha na haste
      gsap.to(rosquinhaSelecionada.mesh.position, { y: '-=2', duration: 0.1, yoyo: true, repeat: 1 })
    }
  } else {
    // Flutua a rosquinha para outra haste
    rosquinhaSelecionadaPos = index
    animarRosquinhaFlutuante(rosquinhaSelecionada, hastes[index])
  }
}

document.addEventListener('keyup', handleKeyUp)
