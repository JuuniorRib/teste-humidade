let leitura = 0
led.setBrightness(60)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    leitura = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P0, 0)
    led.plotBarGraph(
    leitura,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(leitura)
    }
    if (leitura <= 600) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
