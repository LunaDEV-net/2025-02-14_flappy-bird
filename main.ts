input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    x_old = x_time
    y_old = y_time
    Punkte = 0
    bird_cur = 2
    basic.clearScreen()
    basic.turnRgbLedOff()
    bird_old = bird_cur
    running = true
    list = []
})
function gen_pip () {
    Punkte += 1
    list = [
    0,
    1,
    2,
    3,
    4
    ]
    hoehe_y = randint(1, 4)
    list.removeAt(list.indexOf(hoehe_y))
    list.removeAt(list.indexOf(hoehe_y - 1))
    pipes_x = 4
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (running) {
        if (bird_cur > 0) {
            bird_cur += -1
        }
    }
})
let pipes_x = 0
let bird_old = 0
let hoehe_y = 0
let list: number[] = []
let bird_cur = 0
let running = false
let Punkte = 0
let y_old = 0
let x_old = 0
let y_time = 0
let x_time = 0
x_time = 750
y_time = 750
x_old = x_time
y_old = y_time
Punkte = 0
running = true
basic.turnRgbLedOff()
bird_cur = 2
list = [
0,
1,
2,
3,
4
]
hoehe_y = 0
bird_old = bird_cur
basic.forever(function () {
    if (running) {
        led.unplot(1, bird_old)
        for (let Wert of list) {
            led.plot(pipes_x, Wert)
        }
        led.plot(1, bird_cur)
        bird_old = bird_cur
        if (pipes_x == 1) {
            for (let Wert of list) {
                if (Wert == bird_cur) {
                    basic.setLedColor(0xff0000)
                    running = false
                }
            }
        }
    } else {
        basic.showNumber(Punkte)
    }
})
loops.everyInterval(x_time, function () {
    if (running) {
        for (let Wert of list) {
            led.unplot(pipes_x, Wert)
        }
        if (pipes_x > 0) {
            pipes_x += -1
            for (let Wert of list) {
                led.plot(pipes_x, Wert)
            }
        } else {
            gen_pip()
            x_time = x_old - 15 * Punkte
            y_time = x_old - 15 * Punkte
        }
    }
})
loops.everyInterval(y_time, function () {
    if (running) {
        if (bird_cur < 4) {
            bird_cur += 1
        }
    }
})
