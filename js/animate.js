export function animateMeshPosition(mesh, endPosition) {
  if (
    endPosition.x * 10 === Math.round(mesh.position.x * 10) &&
    endPosition.x * 10 === Math.round(mesh.position.x * 10) &&
    endPosition.y * 10 === Math.round(mesh.position.y * 10) &&
    endPosition.y * 10 === Math.round(mesh.position.y * 10) &&
    endPosition.z * 10 === Math.round(mesh.position.z * 10) &&
    endPosition.z * 10 === Math.round(mesh.position.z * 10)
  )
    return

  if (endPosition.x > mesh.position.x) mesh.position.x += 0.1
  if (endPosition.x < mesh.position.x) mesh.position.x += -0.1
  if (endPosition.y > mesh.position.y) mesh.position.y += 0.1
  if (endPosition.y < mesh.position.y) mesh.position.y += -0.1
  if (endPosition.z > mesh.position.z) mesh.position.z += 0.1
  if (endPosition.z < mesh.position.z) mesh.position.z += -0.1

  requestAnimationFrame(() => animateMeshPosition(mesh, endPosition))
}
