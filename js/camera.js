import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { renderer } from './renderer.js'

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 10

const controls = new OrbitControls(camera, renderer.domElement)

camera.position.x = +localStorage.getItem('camera.position.x') || camera.position.x
camera.position.y = +localStorage.getItem('camera.position.y') || camera.position.y
camera.position.z = +localStorage.getItem('camera.position.z') || camera.position.z
camera.rotation.x = +localStorage.getItem('camera.rotation.x') || camera.rotation.x
camera.rotation.y = +localStorage.getItem('camera.rotation.y') || camera.rotation.y
camera.rotation.z = +localStorage.getItem('camera.rotation.z') || camera.rotation.z
controls.target.x = +localStorage.getItem('controls.target.x') || controls.target.x
controls.target.y = +localStorage.getItem('controls.target.y') || controls.target.y
controls.target.z = +localStorage.getItem('controls.target.z') || controls.target.z

window.camera = camera

function tick() {
  requestAnimationFrame(tick)
  controls.update()

  localStorage.setItem('camera.position.x', camera.position.x)
  localStorage.setItem('camera.position.y', camera.position.y)
  localStorage.setItem('camera.position.z', camera.position.z)
  localStorage.setItem('camera.rotation.x', camera.rotation.x)
  localStorage.setItem('camera.rotation.y', camera.rotation.y)
  localStorage.setItem('camera.rotation.z', camera.rotation.z)
  localStorage.setItem('controls.target.x', controls.target.x)
  localStorage.setItem('controls.target.y', controls.target.y)
  localStorage.setItem('controls.target.z', controls.target.z)
}

tick()
