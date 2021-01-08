let Matte_spill = false
let Spille = false
let LeveL = 0
let Setings_1 = false
let Side = 0
let Bok_valg = 0
let Bok = ""
let Setings_2 = false
let Tur = false
let Lese = false
let Bevegelse = ""
basic.showString("HEI")
basic.forever(function () {
    if (Tur == true) {
        Bevegelse = "EROR"
        Setings_2 = false
    }
    while (Tur == true) {
        basic.showString("T")
    }
})
basic.forever(function () {
    if (Lese == true) {
        Bok = " FLUKTEN TIL NORGE "
        Bok_valg = 1
        Bevegelse = "EROR"
        Setings_2 = false
    }
    while (Lese == true) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        if (Bok_valg == 2) {
            Side = 1
        }
        while (Bok_valg == 1) {
            if (input.buttonIsPressed(Button.A)) {
                if (Bok == "FLUKTEN TIL NORGE") {
                    Bok = "GUTA I TRE HUSET"
                } else if (Bok == "GUTA I TRE HUSET") {
                    Bok = "ANDRE VERDENS KRIG"
                } else {
                    music.playMelody("C5 C5 C5 C5 - - - - ", 500)
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (Bok == "ANDRE VERDENS KRIG") {
                    Bok = "GUTA I TRE HUSET"
                } else if (Bok == "GUTA I TRE HUSET") {
                    Bok = "FLUKTEN TIL NORGE"
                } else {
                    music.playMelody("C5 C5 C5 C5 - - - - ", 500)
                }
            }
            if (input.buttonIsPressed(Button.AB)) {
                Bok_valg = 2
            }
            basic.showString(Bok)
        }
        while (Bok_valg == 2) {
            if (input.buttonIsPressed(Button.A)) {
                Side += -1
            }
            if (input.buttonIsPressed(Button.B)) {
                Side += 1
            }
            while (Bok == "FLUKTEN TIL NORGE") {
                while (Side == 1) {
                    basic.showString("HEI JEG HETER JULIAN OG JEG ER I ROMA")
                }
                while (Side == 2) {
                    basic.showString("OG TAR BILDER ")
                }
                while (Side == 3) {
                    basic.showIcon(IconNames.StickFigure)
                }
                while (Side == 4) {
                    basic.showString("S& PLUTSELIG H&RTE JEG NOEN FLY")
                }
                while (Side == 5) {
                    basic.showString("DET VAR BOMBE FLY")
                }
                while (Side == 6) {
                    basic.showString("DET ENE SLAPP EN BOMBE")
                }
                while (Side == 7) {
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . # # # .
                        . # # . .
                        . . . . .
                        `)
                }
                while (Side == 8) {
                    basic.showString("JEG SPURTA TIL NERMESTE HUS")
                }
                while (Side == 9) {
                    basic.showString("JEG KLARTE AKORAT OG H&PPE INN I BYGNINGEN")
                }
                while (Side == 10) {
                    basic.showString("FØR HELE ROMA IKKE VAR MER ENN")
                }
                while (Side == 10) {
                	
                }
                while (Side == 10) {
                	
                }
            }
        }
    }
})
basic.forever(function () {
    while (!(Bevegelse == "EROR")) {
        if (Bevegelse == "") {
            basic.showIcon(IconNames.Happy)
            music.playMelody("C D E F G A B C5 ", 500)
            music.playMelody("- C5 - C5 - - - - ", 500)
            Setings_1 = true
        } else {
            Setings_1 = false
            if (input.logoIsPressed()) {
                basic.pause(2000)
                basic.showIcon(IconNames.Heart)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    # # # # #
                    `)
                Bevegelse = "kos"
                basic.pause(2000)
                Bevegelse = ""
            }
            if (input.isGesture(Gesture.FreeFall)) {
                if (input.isGesture(Gesture.ScreenUp)) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . . . .
                        . . # . .
                        . . . . .
                        `)
                    for (let index = 0; index < 4; index++) {
                        music.playMelody("C5 B A G F E D C ", 500)
                    }
                }
                if (input.isGesture(Gesture.ScreenDown)) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
                        `)
                }
            }
            if (input.isGesture(Gesture.EightG)) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # . # .
                    # . # . #
                    `)
                for (let index = 0; index < 5; index++) {
                    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
                }
            }
            if (input.isGesture(Gesture.Shake)) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # # # # #
                    . . . # #
                    `)
            }
        }
    }
})
basic.forever(function () {
    if (150 < input.lightLevel() && !(Bevegelse == "EROR")) {
        led.plot(4, 1)
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(2, 0)
        led.plot(1, 0)
        led.plot(0, 0)
        led.plot(0, 1)
    }
})
basic.forever(function () {
    while (Setings_1 == true) {
        if (input.buttonIsPressed(Button.AB)) {
            music.setVolume(0)
            led.setBrightness(64)
        }
        if (input.buttonIsPressed(Button.A)) {
            music.setVolume(117)
            led.setBrightness(117)
        }
        if (input.buttonIsPressed(Button.B)) {
            music.setVolume(255)
            led.setBrightness(255)
        }
        if (input.logoIsPressed()) {
            Setings_2 = true
            Bevegelse = "EROR"
            Setings_1 = false
            basic.clearScreen()
        }
    }
    if (Setings_2 == true) {
        basic.showString("APER")
    }
    while (Setings_2 == true && (Lese && Tur) == false) {
        if (input.logoIsPressed()) {
            Lese = true
        }
        if (input.buttonIsPressed(Button.A)) {
            Tur = true
        }
        if (input.buttonIsPressed(Button.AB)) {
            Bevegelse = ""
            Setings_2 = false
            Setings_1 = true
        }
    }
})
basic.forever(function () {
    if (!(Bevegelse == "EROR" || Bevegelse == "") && (Setings_1 == false && input.buttonIsPressed(Button.AB))) {
        LeveL = 0
        Spille = false
        Matte_spill = false
        basic.showString("  ")
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showString("LEVEL" + " ")
        basic.showNumber(LeveL)
    }
})
