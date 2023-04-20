import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js'
import Start from './scenes/Start.js'
import GameOver from './scenes/GameOver.js'
// console.dir(Phaser)

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: [Start, Game, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        }
    }
})
