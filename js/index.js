import * as THREE from 'three'
import { camera } from './camera.js'
import { floor } from './floor.js'
import { hastes } from './hastes.js'
import './keyboard.js'
import { renderer } from './renderer.js'
import { hemisphereLight, sky } from './sky.js'
import { text } from './text.js'
import { light } from './light.js'

const scene = new THREE.Scene()

scene.add(sky)
scene.add(hemisphereLight)
scene.add(light)
scene.add(floor)
scene.add(text)
for (const haste of hastes) {
  scene.add(haste.mesh)
}

function tick() {
  requestAnimationFrame(tick)
  renderer.render(scene, camera)
}

tick()
