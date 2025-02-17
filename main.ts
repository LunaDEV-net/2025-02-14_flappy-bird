function gen_pip () {
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
    pipes.push([5, list])
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (bird_cur > 0) {
        bird_cur += -1
    }
})
let hoehe_y = 0
let list: number[] = []
let pipes: number[][] = []
let bird_cur = 0
let dis_to_last = 0
bird_cur = 2
let bird_old = bird_cur
pipes = []
list = [
0,
1,
2,
3,
4
]
hoehe_y = 0
loops.everyInterval(1000, function () {
    if (3 == dis_to_last) {
        gen_pip()
    }
})
loops.everyInterval(500, function () {
    if (bird_cur < 4) {
        bird_cur += 1
    }
})
basic.forever(function () {
    led.unplot(1, bird_old)
    led.plot(1, bird_cur)
    bird_old = bird_cur
})
