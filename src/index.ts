/*import World from './world';

const root = document.getElementById( "root" )
const world = new World("Heloo World!");
world.sayHello(root);
*/

import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello Worldだよ!!!!')
world.sayHello(root)
world.sayHello(root)
