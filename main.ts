input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (bird_cur > 0) {
        bird_cur += -1
    }
})
let bird_cur = 0
bird_cur = 2
let bird_old = bird_cur
loops.everyInterval(1000, function () {
    if (bird_cur < 4) {
        bird_cur += 1
    }
})
basic.forever(function () {
    led.unplot(1, bird_old)
    led.plot(1, bird_cur)
    bird_old = bird_cur
})
