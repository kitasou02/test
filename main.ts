radio.onReceivedNumber(function (receivedNumber) {
    let 相手の手２ = 0
    let 相手の手１ = 0
    let 自分の手 = false
    if (自分の手 == (相手の手１ == 相手の手２)) {
        basic.showIcon(IconNames.Triangle)
    } else if (false && (false && false)) {
        basic.showIcon(IconNames.Triangle)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(8)
})
