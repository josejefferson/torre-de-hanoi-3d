import * as THREE from 'three'

const animationsObjects = []

export function createMoveAnimation(mesh, startPosition, endPosition) {
  mesh.userData.mixer = new THREE.AnimationMixer(mesh)
  let track = new THREE.VectorKeyframeTrack(
    '.position',
    [0, 1],
    [startPosition.x, startPosition.y, startPosition.z, endPosition.x, endPosition.y, endPosition.z]
  )
  const animationClip = new THREE.AnimationClip(null, 5, [track])
  const animationAction = mesh.userData.mixer.clipAction(animationClip)
  animationAction.setLoop(THREE.LoopOnce)
  animationAction.play()
  mesh.userData.clock = new THREE.Clock()
  animationsObjects.push(mesh)
}

function tick() {
  requestAnimationFrame(tick)

  animationsObjects.forEach((mesh) => {
    if (mesh.userData.clock && mesh.userData.mixer) {
      mesh.userData.mixer.update(mesh.userData.clock.getDelta())
    }
  })
}

tick()
