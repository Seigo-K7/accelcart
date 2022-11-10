let trig = 0
radio.setGroup(27)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # . # #
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            # . # . #
            . . # . .
            # # # # #
            . . # . .
            # . # . #
            `)
        trig = control.millis()
        while (control.millis() - trig < 4000) {
            radio.sendValue("x", Math.map(input.acceleration(Dimension.X), -1024, 1024, -98, 98) / 10)
        }
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        if (0 < input.acceleration(Dimension.X)) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    }
})
