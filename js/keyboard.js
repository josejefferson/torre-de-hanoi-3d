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
    const currentPos = rosquinhaSelecionada.mesh.getWorldPosition(new THREE.Vector3())
    window.hastes[index].mesh.add(rosquinhaSelecionada.mesh)
    rosquinhaSelecionada.mesh.position.setX(rosquinhaSelecionada.mesh.worldToLocal(currentPos).x)
    gsap.to(rosquinhaSelecionada.mesh.position, { duration: 0.3, x: 0, ease: 'back.out' })
  }
}

document.addEventListener('keyup', handleKeyUp)
