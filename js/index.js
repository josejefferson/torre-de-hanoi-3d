import * as THREE from 'three'
import { camera } from './camera.js'
import { floor } from './floor.js'
import { generate, hastes } from './hastes.js'
import './keyboard.js'
import { light } from './light.js'
import { renderer } from './renderer.js'
import { hemisphereLight, sky } from './sky.js'
import { text } from './text.js'
import './resolver.js'

window.THREE = THREE

export const scene = new THREE.Scene()

scene.add(sky)
scene.add(hemisphereLight)
scene.add(light)
scene.add(floor)
scene.add(text)
for (const haste of hastes) {
  scene.add(haste.mesh)
}

generate()

function tick() {
  requestAnimationFrame(tick)
  renderer.render(scene, camera)
}

tick()
