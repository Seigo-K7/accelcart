bluetooth.onBluetoothConnected(function () {
    while (true) {
        bluetooth.uartWriteString("HEllo")
    }
})
bluetooth.startUartService()
