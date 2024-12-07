import { Haste, Rosquinha } from './stack.js'

export const hastes = [new Haste(-1), new Haste(0), new Haste(1)]
window.hastes = hastes

hastes[0].push(new Rosquinha(4))
hastes[0].push(new Rosquinha(3))
hastes[0].push(new Rosquinha(2))
hastes[0].push(new Rosquinha(1))
hastes[0].push(new Rosquinha(0))
