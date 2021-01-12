let LeveL = 0
let Side = 0
let Bok_valg = 0
let Bok = ""
let TUR_Ting = ""
let Setings_1 = false
let Setings_2 = false
let Tur = false
let Lese = true
let Bevegelse = ""
let Spille = false
let Matte_spill = false
basic.showString("HEI")
basic.forever(function () {
    if (Tur == true) {
        Bevegelse = "EROR"
        Setings_2 = false
        Setings_1 = false
    }
    while (Tur == true) {
        basic.showString("T")
        if (input.buttonIsPressed(Button.AB)) {
            Setings_1 = true
            Tur = false
            Bevegelse = ""
        }
        while (TUR_Ting == "") {
            if (input.buttonIsPressed(Button.A)) {
                TUR_Ting = "kompas og tempratur"
            }
            if (input.buttonIsPressed(Button.B)) {
                TUR_Ting = ""
            }
        }
        while (TUR_Ting == "kompas og tempratur") {
            if (input.buttonIsPressed(Button.A)) {
                TUR_Ting = "tempratur"
            }
            if (input.buttonIsPressed(Button.B)) {
                TUR_Ting = "kompas"
            }
        }
        while (TUR_Ting == "tempratur") {
            basic.showString(" " + input.temperature())
        }
        while (TUR_Ting == "kmpas") {
            let Tur_Kompas_N_S_Ø_V = ""
            basic.showString(Tur_Kompas_N_S_Ø_V)
            basic.pause(100)
            if (Tur_Kompas_N_S_Ø_V == "N") {
                basic.showArrow(ArrowNames.North)
            }
            if (Tur_Kompas_N_S_Ø_V == "S") {
                basic.showArrow(ArrowNames.South)
            }
            if (Tur_Kompas_N_S_Ø_V == "Ø") {
                basic.showArrow(ArrowNames.East)
            }
            if (Tur_Kompas_N_S_Ø_V == "V") {
                basic.showArrow(ArrowNames.West)
            }
        }
    }
})
basic.forever(function () {
    if (Lese == true) {
        Bok = "FLUKTEN TIL NORGE"
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
                    music.playMelody("- C5 B C5 G C5 - C5 ", 500)
                    Bok = "GUTA I TRE HUSET"
                } else if (Bok == "GUTA I TRE HUSET") {
                    music.playMelody("- C5 B C5 G C5 - C5 ", 500)
                    Bok = "ANDRE VERDENS KRIG"
                } else {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    music.playMelody("C5 B C5 B - - - - ", 500)
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (Bok == "ANDRE VERDENS KRIG") {
                    music.playMelody("- C5 B C5 G C5 - C5 ", 500)
                    Bok = "GUTA I TRE HUSET"
                } else if (Bok == "GUTA I TRE HUSET") {
                    music.playMelody("- C5 B C5 G C5 - C5 ", 500)
                    Bok = "FLUKTEN TIL NORGE"
                } else {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    music.playMelody("C5 B C5 B - - - - ", 500)
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
                music.playMelody("C5 B A G F E D C ", 500)
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
                music.playMelody("D C D C D C D C ", 500)
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
            led.setBrightness(0)
        }
        if (input.buttonIsPressed(Button.A)) {
            music.setVolume(105)
            led.setBrightness(88)
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
        if (Setings_2 == true) {
            basic.showString("APER")
        }
    }
    while (Setings_2 == true && (Lese && true) == false) {
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
