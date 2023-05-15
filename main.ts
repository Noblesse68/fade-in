led.plot(2, 2)
for (let index = 0; index < 5; index++) {
    led.setBrightness(0)
    led.fadeIn(100)
basic.pause(100)
    led.fadeOut(100)
}
