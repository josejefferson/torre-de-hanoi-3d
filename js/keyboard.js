let rosquinhaSelecionada = null
let rosquinhaSelecionadaPos = null

function handleKeyUp(event) {
  const index = +event.key - 1
  if (isNaN(index)) return

  const haste = window.hastes[index]
  if (!haste) return

  if (rosquinhaSelecionada === null) {
    // Remove a rosquinha da haste e flutua ela
    rosquinhaSelecionada = haste.pop()
    rosquinhaSelecionadaPos = index
  } else if (rosquinhaSelecionadaPos === index) {
    // Insere a rosquinha na haste
    haste.push(rosquinhaSelecionada)
    rosquinhaSelecionada = null
  } else {
    // Flutua a rosquinha para outra haste
    rosquinhaSelecionadaPos = index
    window.hastes[index].mesh.add(rosquinhaSelecionada.mesh)
  }
}

document.addEventListener('keyup', handleKeyUp)
