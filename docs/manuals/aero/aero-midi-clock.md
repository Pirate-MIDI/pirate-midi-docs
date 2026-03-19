## 8. MIDI Clock

### MIDI Clock Onboard
The Aero has onboard MIDI Clock with advanced routing options.

#### 1. Assigning MIDI Clock to a Footswitch
To assign the MIDI clock to a switch, change the switch mode to "Tap Tempo" in the web editor.

**LED Indicators**
The LED color and mode can also be changed in the switch settings menu.
The LED will flash the current tempo and update as you tap a new tempo.

**Sending `Start` and `Stop` Messages**
To send a `Start` message, press and hold the switch. The clock does not send a Start message until you perform this hold action. However, MIDI clock is designed to always be sending timing pulses, so your device will probably see the new tempo before you send a Start message. 

!!! note
    Some devices do not use the `Start` and `Stop` MIDI clock messages at all.

To send a `Stop` message, press and hold the switch. The LED will keep flashing, and the clock timing messages will continue to be sent as mentioned above.

#### 2. Assigning MIDI Clock Outputs
To choose which MIDI outputs each MIDI clock will be sent to, go to the Global MIDI settings in the web editor.

Here you can select any or all of the MIDI outputs (`Flexi1`, `Flexi2`, `USB`) for that clock to be sent to.

#### 3. Preset or Inherit MIDI Clock Tempo Per Bank
You can preset the tempo for the MIDI Clock on each bank. You can also set the bank to simply inherit the tempo of the bank you’ve just changed from (works with non-linear bank changes too). 

To set the tempo or `inherit` setting, go to Bank Settings in the web editor.

#### 4. Controlling Clock Tempo with MIDI
You can set the tempo for the MIDI clock using external MIDI commands sent to the Aero.

Clock tempos can be adjusted using CC 73 and CC 74 as NPRN-style pairs. (NRPN is a way to extend the range of values of a MIDI CC by using two CC’s together instead of just one).

CC 73 both sets the target clock, and the tempo range. CC 74 is purely for tempo.
How does this work? 

`CC73` (MSB), Value = 0 : Clock A set between 45 (minimum) to 127 BPM
`CC73` (MSB): Value = 1 : Clock A set between 128 to 240 (maximum) BPM
`CC74` (LSB) sets the tempo as dictated by CC73.

???+ example "Example 1"
    You send CC 73, value = 1, then CC 74, value = 12. 

    This is targeting Clock A in the 128-240 BPM range. 
    
    Starting from 128, you add the value of CC74 which gives 140BPM.

???+ example "Example 2"
    You send CC 73, value = 0, then CC 74, value = 67. 
    
    This is targeting Clock A in the 45-127 BPM range. 
    
    Starting from 45 as the minimum value, 67 will set the tempo to 67.


!!! note
    These MIDI implementation values are also noted in the table in the MIDI Implementation section of this manual. 