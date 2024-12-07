import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

const loader = new FontLoader()

const font = await new Promise((resolve, reject) => {
  loader.load(
    'https://cdn.jsdelivr.net/npm/three@0.171.0/examples/fonts/helvetiker_regular.typeface.json',
    (font) => resolve(font),
    () => {},
    (err) => reject(err)
  )
})

const textGeometry = new TextGeometry('Torre de Hanoi', { font, size: 5, depth: 1 })
const textMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 })
export const text = new THREE.Mesh(textGeometry, textMaterial)
text.position.set(0, 0, -20)
text.castShadow = true

// Centraliza o texto
textGeometry.computeBoundingBox()
if (textGeometry.boundingBox) {
  textGeometry.translate(-textGeometry.boundingBox.max.x / 2, 0, 0)
}

window.text = text
