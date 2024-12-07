import * as THREE from 'three'

export const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 10, -30)

light.castShadow = true
light.shadow.mapSize.width = 5120
light.shadow.mapSize.height = 5120
light.shadow.camera.near = 0.1
light.shadow.camera.far = 500
light.shadow.camera.top = -100
light.shadow.camera.right = 100
light.shadow.camera.left = -100
light.shadow.camera.bottom = 100

const esfera = new THREE.SphereGeometry(1, 100)
const amareloSolido = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const indicadorDeLuz = new THREE.Mesh(esfera, amareloSolido)
indicadorDeLuz.scale.set(0.1, 0.1, 0.1)
light.add(indicadorDeLuz)

window.light = light
