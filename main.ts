input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
    }
})
pins.setAudioPin(AnalogPin.P0)
let opened = 95
let closed = 175
basic.forever(function () {
    if (input.isGesture(Gesture.ThreeG)) {
        music.playMelody("- - - - - - - - ", 120)
    }
})
