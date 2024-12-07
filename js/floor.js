import * as THREE from 'three'

const floorGeometry = new THREE.PlaneGeometry(100, 100)
const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
export const floor = new THREE.Mesh(floorGeometry, floorMaterial)
floor.rotation.x = THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true
