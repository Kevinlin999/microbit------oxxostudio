input.onButtonPressed(Button.A, function () {
    led.unplot(1, 3)
    if (a[0] == 1) {
        a[0] = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    if (run == 0) {
        basic.clearScreen()
        led.stopAnimation()
        a_length = a.length
        b_length = b.length
        for (let index = 0; index < 5; index++) {
            a.unshift(0)
        }
        for (let index = 0; index < 5; index++) {
            b.unshift(0)
        }
        end = 3
        run = 1
        score = 0
        time = 500
        led.plotBrightness(0, 3, 30)
        led.plotBrightness(2, 3, 30)
        led.plotBrightness(4, 3, 30)
    } else {
        led.unplot(1, 3)
        if (a[0] == 1) {
            a[0] = 2
        }
        led.unplot(3, 3)
        if (b[0] == 1) {
            b[0] = 2
        }
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(3, 3)
    if (b[0] == 1) {
        b[0] = 2
    }
})
let time = 0
let score = 0
let b_length = 0
let a_length = 0
let run = 0
let end = 0
let b: number[] = []
let a: number[] = []
a = [
1,
0,
1,
0,
1,
0,
1,
0
]
b = [
1,
0,
0,
0,
1,
0,
0,
0
]
end = 3
run = 0
basic.forever(function () {
    if (run == 1) {
        for (let index = 0; index <= a_length; index++) {
            if (a[index] == 1) {
                led.plot(1, 4 - index)
                if (index == 0) {
                    end += -1
                }
            } else if (a[index] == 2) {
                if (index == 0) {
                    a[0] = 1
                    led.unplot(1, 4 - index)
                    score += 1
                }
            } else {
                led.unplot(1, 4 - index)
            }
        }
        if (a.length > a_length) {
            a.shift()
        } else {
            a.push(a.shift())
        }
        basic.pause(time)
    }
})
basic.forever(function () {
    if (run == 1) {
        for (let index = 0; index <= 4; index++) {
            if (b[index] == 1) {
                led.plot(3, 4 - index)
                if (index == 0) {
                    end += -1
                }
            } else if (b[index] == 2) {
                if (index == 0) {
                    b[0] = 1
                    led.unplot(3, 4 - index)
                    score += 1
                }
            } else {
                led.unplot(3, 4 - index)
            }
        }
        if (b.length > b_length) {
            b.shift()
        } else {
            b.push(b.shift())
        }
        basic.pause(time)
    }
})
basic.forever(function () {
    if (end == 0) {
        run = 0
        basic.showNumber(score)
    }
})
