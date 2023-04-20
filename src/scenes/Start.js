import Phaser from '../lib/phaser.js'

export default class GameOver extends Phaser.Scene {
    constructor() {
        super('start')
    }
    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.add.text(width * 0.5, height * 0.5, 'Start Game', {
            fontSize: 48
        }).setOrigin(0.5) // centers vertically and horizontally

        this.add.text(width * 0.5, height * 0.75, '(Press `SPACE` to start)', {
            fontSize: 24
        }).setOrigin(0.5, 0) // centers vertically and horizontally

        // use spacebar to restart game
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('game')
        })
    }
}
