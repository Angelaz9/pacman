statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 10
    if (PacMan.overlapsWith(apple)) {
        sprites.destroy(apple, effects.hearts, 500)
        pontos += 1
    }
    if (PacMan.overlapsWith(cherry)) {
        sprites.destroy(cherry, effects.hearts, 500)
        pontos += 1
    }
    if (PacMan.overlapsWith(strawberry)) {
        sprites.destroy(strawberry, effects.hearts, 500)
        pontos += 1
    }
    if (PacMan.overlapsWith(icecream)) {
        sprites.destroy(icecream, effects.hearts, 500)
        pontos += 1
    }
    if (PacMan.overlapsWith(pizza)) {
        sprites.destroy(pizza, effects.hearts, 500)
        pontos += 1
    }
    if (PacMan.overlapsWith(burger)) {
        sprites.destroy(burger, effects.hearts, 500)
        pontos += 1
    }
    if (pontos == 6) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
})
let burger: Sprite = null
let icecream: Sprite = null
let pizza: Sprite = null
let strawberry: Sprite = null
let apple: Sprite = null
let cherry: Sprite = null
let statusbar: StatusBarSprite = null
let pontos = 0
let PacMan: Sprite = null
PacMan = sprites.create(assets.image`pac man`, SpriteKind.Player)
scene.cameraFollowSprite(PacMan)
PacMan.setPosition(25, 20)
controller.moveSprite(PacMan, 100, 100)
PacMan.setBounceOnWall(true)
animation.runImageAnimation(
PacMan,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 . 1 . 1 . . 
    5 5 5 5 5 5 5 5 . 1 . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 1 . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 1 . . . . . . 
    . . 5 5 5 5 5 5 5 5 1 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 . 1 . 1 . . 
    5 5 5 5 5 5 5 5 . 1 . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 1 . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 1 . . . . . . 
    . . 5 5 5 5 5 5 5 5 1 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 . 1 . 1 . . 
    5 5 5 5 5 5 5 5 . 1 . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 1 . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 1 . . . . . . 
    . . 5 5 5 5 5 5 5 5 1 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 . 1 . 1 . . 
    5 5 5 5 5 5 5 5 . 1 . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 1 . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 1 . . . . . . 
    . . 5 5 5 5 5 5 5 5 1 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 . 1 . 1 . . 
    5 5 5 5 5 5 5 5 . 1 . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 1 . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 1 . . . . . . 
    . . 5 5 5 5 5 5 5 5 1 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f f 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
300,
true
)
pontos = 0
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.attachToSprite(PacMan, 5, 1)
statusbar.setLabel("HP", 2)
statusbar.attachToSprite(PacMan, 5, 1)
tiles.setCurrentTilemap(tilemap`level1`)
let fantasma1 = sprites.create(img`
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 1 1 1 3 3 3 1 1 1 3 . . 
    . 3 3 1 1 1 1 1 3 1 1 1 1 1 3 . 
    . 3 3 1 1 8 8 1 3 1 1 8 8 1 3 . 
    . 3 3 3 1 8 8 3 3 3 1 8 8 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 . 3 3 3 . 3 3 3 . 3 3 . 
    . . 3 . . . 3 . . . 3 . . . 3 . 
    `, SpriteKind.Enemy)
fantasma1.setPosition(randint(80, 200), randint(80, 200))
fantasma1.setBounceOnWall(true)
fantasma1.setVelocity(50, 50)
let fantasma2 = sprites.create(img`
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 1 1 1 4 4 4 1 1 1 4 . . 
    . 4 4 1 1 1 1 1 4 1 1 1 1 1 4 . 
    . 4 4 1 1 8 8 1 4 1 1 8 8 1 4 . 
    . 4 4 4 1 8 8 4 4 4 1 8 8 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 . 4 4 4 . 4 4 4 . 4 4 . 
    . . 4 . . . 4 . . . 4 . . . 4 . 
    `, SpriteKind.Enemy)
fantasma2.setPosition(randint(80, 200), randint(80, 200))
fantasma2.setBounceOnWall(true)
fantasma2.setVelocity(50, 50)
let fantasma3 = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 1 1 1 5 5 5 1 1 1 5 . . 
    . 5 5 1 1 1 1 1 5 1 1 1 1 1 5 . 
    . 5 5 1 1 8 8 1 5 1 1 8 8 1 5 . 
    . 5 5 5 1 8 8 5 5 5 1 8 8 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 . 5 5 5 . 5 5 5 . 5 5 . 
    . . 5 . . . 5 . . . 5 . . . 5 . 
    `, SpriteKind.Enemy)
fantasma3.setPosition(randint(80, 200), randint(80, 200))
fantasma3.setBounceOnWall(true)
fantasma3.setVelocity(50, 50)
let fantasma4 = sprites.create(img`
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 9 1 1 1 9 9 9 1 1 1 9 . . 
    . 9 9 1 1 1 1 1 9 1 1 1 1 1 9 . 
    . 9 9 1 1 8 8 1 9 1 1 8 8 1 9 . 
    . 9 9 9 1 8 8 9 9 9 1 8 8 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 . 9 9 9 . 9 9 9 . 9 9 . 
    . . 9 . . . 9 . . . 9 . . . 9 . 
    `, SpriteKind.Enemy)
fantasma4.setPosition(randint(80, 200), randint(80, 200))
fantasma4.setBounceOnWall(true)
fantasma4.setVelocity(50, 50)
cherry = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Food)
cherry.setPosition(randint(80, 200), randint(80, 200))
cherry.setBounceOnWall(true)
apple = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
apple.setPosition(randint(80, 200), randint(80, 200))
apple.setBounceOnWall(true)
strawberry = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
strawberry.setPosition(randint(80, 200), randint(80, 200))
strawberry.setBounceOnWall(true)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
pizza.setPosition(randint(80, 200), randint(80, 200))
pizza.setBounceOnWall(true)
icecream = sprites.create(img`
    ............3333bb..bb33333.....
    ........3bb31111d3b311d111d33...
    .......3bdd11111dbd11d11111113..
    .......bdddd1111bd11d111dd11113.
    ......3d111dd111b11d111dd33d11d3
    ......3d11111dd1d11d111d11d33113
    ....bb3d111111dd13dd111d1dd3b31b
    ...b3d3dd111111dd13dd11d1dddbbdb
    ...3ddd31d111111dd133dddddddb.b.
    ..311111d1ddd1111dd11dddddd33...
    ..3111111d111dd111dd1111dd3313..
    ..bddd1111ddd11dd111d111111113..
    ..311ddd111dddd11dd11ddd1111ddb.
    ..31111dd111dddd11dd111dddddddb.
    ...bd1111d1113ddd11dd1111111d3b.
    ...4dd1111d1113ddd11ddd111d333b.
    ..4dbdddd11d11133ddddddddddddb..
    .4ddbddddd11d111d33ddddddddd3b..
    .4dddb11ddd11dd111d333dddd3bb...
    .4dd55b111d11dd11111d3333bbb....
    .445555b111d11dddd111111ddb.....
    .4455555bd1d311ddddddddddd3.....
    .45455555bb1d3111ddddddd113.....
    .4554555555b333d1111111113......
    455554555555bbb33d11111d33......
    4d555545555555dbbb3d11d33.......
    4dd5555455555ddddd43333.........
    45dd555544ddddddd4..............
    .45dd5555d44dddd4...............
    ..45dd55dddd4444................
    ...45dd55444....................
    ....44444.......................
    `, SpriteKind.Food)
icecream.setPosition(randint(80, 200), randint(80, 200))
icecream.setBounceOnWall(true)
burger = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
burger.setPosition(randint(80, 200), randint(80, 200))
burger.setBounceOnWall(true)
