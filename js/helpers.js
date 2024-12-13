export function animarRosquinhaFlutuante(rosquinha, hasteDestino) {
  const currentPos = rosquinha.mesh.getWorldPosition(new THREE.Vector3())
  hasteDestino.mesh.add(rosquinha.mesh)
  rosquinha.mesh.position.setX(rosquinha.mesh.worldToLocal(currentPos).x)
  gsap.to(rosquinha.mesh.position, { duration: 0.3, x: 0, ease: 'back.out' })
  return sleep(300)
}

export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
