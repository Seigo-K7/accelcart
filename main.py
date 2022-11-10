basic.show_icon(IconNames.YES)
bluetooth.start_accelerometer_service()

def on_forever():
    pass
basic.forever(on_forever)
