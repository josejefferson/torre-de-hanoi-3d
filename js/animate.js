export function animateMeshPosition(mesh, endPosition) {
  if (mesh.position.equals(endPosition)) {
    return
  }

  if (endPosition.x > mesh.position.x) mesh.translateX(0.1)
  if (endPosition.x < mesh.position.x) mesh.translateX(-0.1)
  if (endPosition.y > mesh.position.y) mesh.translateY(0.1)
  if (endPosition.y < mesh.position.y) mesh.translateY(-0.1)
  if (endPosition.z > mesh.position.z) mesh.translateZ(0.1)
  if (endPosition.z < mesh.position.z) mesh.translateZ(-0.1)

  requestAnimationFrame(() => animateMeshPosition(mesh, endPosition))
}
