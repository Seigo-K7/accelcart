bluetooth.onBluetoothConnected(function () {
    bluetooth.startAccelerometerService()
    basic.showIcon(IconNames.Happy)
    if (input.buttonIsPressed(Button.B)) {
        basic.pause(1000)
        trig = control.millis()
        basic.showIcon(IconNames.Diamond)
        while (control.millis() - trig < 4000) {
            bluetooth.uartWriteValue("x", 0)
        }
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . # # .
            # # . # .
            # . . . #
            `)
    } else {
    	
    }
})
let trig = 0
bluetooth.startUartService()
