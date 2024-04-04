input.onButtonPressed(Button.A, function () {
    servos.P0.run(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(0)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
})
basic.forever(function () {
	
})
