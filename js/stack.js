import * as THREE from 'three'
import { alturaCilindro, cilindro } from './geometry.js'
import { amarelo, azul, cinza, roxo, verde, vermelho } from './materials.js'

const MATERIAIS_COLORIDOS = [roxo, azul, verde, amarelo, vermelho]

export class Rosquinha {
  constructor(tamanho) {
    const geometry = new THREE.TorusGeometry(2 + tamanho, 1, 20, 100)
    const material = MATERIAIS_COLORIDOS[tamanho % MATERIAIS_COLORIDOS.length]
    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = THREE.MathUtils.degToRad(90)
    mesh.castShadow = true

    this.mesh = mesh
    this.tamanho = tamanho
  }
}

export class Haste {
  constructor(index) {
    const mesh = new THREE.Mesh(cilindro, cinza)
    mesh.position.set(index * 20, alturaCilindro / 2, 0)
    mesh.castShadow = true

    this.mesh = mesh
    this.items = []
  }

  push(element) {
    if (this.peek() && element.tamanho > this.peek().tamanho) {
      throw new Error('O elemento a ser inserido é maior que o elemento no topo da haste')
    }

    this.mesh.add(element.mesh)
    gsap.to(element.mesh.position, { duration: 0.3, y: -alturaCilindro / 2 + 1 + this.size() * 2 })
    this.items.push(element)
  }

  pop() {
    const item = this.items.pop()
    gsap.to(item.mesh.position, { duration: 0.3, y: 11 })
    return item
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}
