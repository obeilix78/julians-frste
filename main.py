Klon_ = False
Høne: game.LedSprite = None
Spille = True
Bevegelse = ""
Matte_spill = False
basic.show_string("HEI")

def on_forever():
    global Høne
    if Spille == True:
        Høne = game.create_sprite(2, 4)
        Høne.set(LedSpriteProperty.BRIGHTNESS, 100)
    while Spille == True:
        if Klon_ == True:
            pass
    if input.button_is_pressed(Button.A):
        Høne.change(LedSpriteProperty.X, -1)
    if input.button_is_pressed(Button.B):
        Høne.change(LedSpriteProperty.X, 1)
basic.forever(on_forever)

def on_forever2():
    global Matte_spill
    if input.button_is_pressed(Button.A) and input.is_gesture(Gesture.LOGO_UP):
        pass
    if input.button_is_pressed(Button.B) and input.is_gesture(Gesture.LOGO_UP):
        Matte_spill = True
basic.forever(on_forever2)

def on_forever3():
    global Bevegelse
    if (Spille and Matte_spill) == False:
        if 27 < input.temperature():
            led.plot(4, 1)
            led.plot(4, 0)
            led.plot(3, 0)
            led.plot(2, 0)
            led.plot(1, 0)
            led.plot(0, 0)
            led.plot(0, 1)
        if input.is_gesture(Gesture.FREE_FALL):
            if input.is_gesture(Gesture.SCREEN_UP):
                basic.show_leds("""
                    . . . . .
                    . # . # .
                    . . . . .
                    . . # . .
                    . . . . .
                    """)
                Bevegelse = "fritt fall skjerm opp"
            if input.is_gesture(Gesture.SCREEN_DOWN):
                basic.show_leds("""
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    """)
                Bevegelse = "fritt fall skjerm ned"
        if input.is_gesture(Gesture.EIGHT_G):
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                """)
            Bevegelse = "6G"
        if input.is_gesture(Gesture.SHAKE):
            if input.is_gesture(Gesture.THREE_G):
                basic.show_leds("""
                    . . . . .
                    . # . # .
                    . . . . .
                    # # # # #
                    . . . # #
                    """)
                Bevegelse = "ristes 3G"
            if input.is_gesture(Gesture.SIX_G):
                basic.show_leds("""
                    # . . . #
                    . # . # .
                    . . . . .
                    # # # # #
                    . . . # #
                    """)
                Bevegelse = "ristes 6G"
basic.forever(on_forever3)

def on_forever4():
    global Klon_
    Klon_ = True
    basic.pause(100)
    Klon_ = False
    basic.pause(100)
basic.forever(on_forever4)

def on_forever5():
    global Spille, Matte_spill
    if input.is_gesture(Gesture.SCREEN_UP) and input.button_is_pressed(Button.AB):
        LeveL = 0
        Spille = False
        Matte_spill = False
        basic.show_leds("""
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            """)
        basic.show_string("  " + "LEVEL" + " ")
        basic.show_number(LeveL)
basic.forever(on_forever5)
