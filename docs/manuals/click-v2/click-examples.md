# CLiCK V2 Usage Examples

The CLiCK V2 is a versatile tool designed to integrate non-MIDI equipment into a MIDI-controlled environment. Below are simple, single-feature examples of how to use the CLiCK V2 in a real-world setup.

---

## 1. Controlling Amplifier Channels (Relay Switching)
If you have a traditional guitar amplifier with a 1/4" footswitch jack for channel switching, the CLiCK can automate this via MIDI.

!!! warning
    Some devices have an external footswitch that is more than just a passive one, two, or three switch TRS footswitch. If there are LEDs, a DIN jack, or more than three footswitches, there is a high likelihood that the CLiCK will either not fully unlock the same features as the factory footswitch, or not work at all.

* **The Setup**: Connect a 1/4" TRS cable from the **Relay Jack** on the CLiCK to the footswitch input of your amplifier.
* **The Action**: Send a MIDI CC #1 message to the CLiCK.
* **The Result**: 
    * Sending CC #1 with a value of **127** will close the "Tip" relay (e.g., switching to the Lead channel).
    * Sending CC #1 with a value of **0** will open it (e.g., returning to the Clean channel).

### More Details
Inside the web editor, you can set the relay states per preset. This means that as you send messages to the CLiCK to change its preset, the relay states can automatically change to pre-determined states.\

You can use this method to set up presets that follow the songs in your live set, song sections, or just generic "sounds".

Obviously the two relay states can only be combined in a handful of ways, but with 128 presets at your disposal, you can work out, in advance, exactly which preset requires which states so you don't have to think about it in a live setting. 

---

## 2. MIDI-Automated Expression (Expression Emulation)
You can control the expression input of an analog pedal (like a boutique delay or a pitch shifter) using MIDI CC messages from your DAW or a MIDI foot controller.

* **The Setup**: Connect a 1/4" TRS cable from the **Expression Jack** on the CLiCK to the expression input of your target pedal. Ensure the CLiCK is powered by **9V DC**.
* **The Action**: Send MIDI CC #11 with values ranging from 0 to 127 to the CLiCK.
* **The Result**: The CLiCK changes its internal resistance to emulate a physical expression pedal moving from heel (0) to toe (127), allowing for automated sweeps or specific parameter settings per preset.

### More Details
Each of the 128 presets of the CLiCK has a field in the [Web Editor](https://edit.piratemidi.com) where you can pre-set the Expression position from 0-100%. This means that as you send MIDI to the CLiCK to select a preset, the expression position can jump instantly to the new value that you have previously chosen. 

This feature is really powerful for incorporating non-MIDI pedals with an expression jack into a MIDI-controllable rig.

Another possiblity is having a single expression pedal connected to your main MIDI controller, and using that to generate the MIDI expression messages, send them to the CLiCK, and then the expression pedal on the MIDI controller is controlling the non-MIDI expression jack. 

This is powerful because with a MIDI controller like our BridgeOS devices, you can change what the expression pedals does at different times and on different presets. 

For example, if on one preset you don't want to interact with that non-MIDI pedal, you could assign your expression pedal to target a different MIDI controllable pedal on your rig. But then on the next preset, or at the press of a switch, suddenly the expression pedal does control the non-MIDI pedal's expression jack (via the CLiCK) again. 

---

## 3. Wireless Control from an iPad (Bluetooth MIDI)
The CLiCK can act as a wireless bridge, allowing you to control your entire pedalboard from a mobile device without a USB cable.

* **The Setup**: Enable **Bluetooth LE** in the CLiCK web editor. Open a MIDI app (like *midimittr* or a DAW) on your iPad.
* **The Action**: Pair the iPad with the CLiCK and send Program Change (PC) or Control Change (CC) messages from the app.
* **The Result**: The CLiCK receives the wireless messages and passes them through its 3.5mm TRS MIDI Out to your other pedals, changing their presets or parameters instantly.

!!! warning
    Using wireless technology in large crowds and groups of people can be risky. There are significant interference risks. Always test in your target environment before relying on wireless technology for a live event!

### More Details
Another thing to consider is that with the Bluetooth functionality, there is no need for any physical MIDI controller to send messages to or change presets on the CLiCK. An app like **TouchOSC** or **MIDI Designer** or **Ribn** can send MIDI messages to the CLiCK directly without the need for more expensive hardware. 

---

## 4. Bridging MIDI Types (Type A to Type B)
Different manufacturers use different TRS MIDI standards (Type A vs. Type B). The CLiCK can resolve these conflicts without custom crossover cables.

* **The Setup**: In the Web Editor, set the **MIDI Out** port to "Type B." 
* **The Action**: Plug a standard TRS cable from the CLiCK's MIDI Out into a pedal that requires Type B MIDI *(such as older Arturia or Novation gear, or even some Ring Active devices like Chase Bliss Audio pedals)*.
* **The Result**: The CLiCK automatically swaps the Tip and Ring signals, ensuring your MIDI data is readable by the target device.

### More Details
This feature is designed to save you from buying special cables and from nasty surprises when you realise your gear isn't "standard". However, it can't be guaranteed to work with all devices. Chase Bliss Audio pedals, for example, will usually work with Type B, but some older models only work with the Tip of the TRS cable physically disconnected.

If you need to connect to many different devices with more than one different type of MIDI TRS connection, you may need a MIDI splitter or MIDI hub. If so, check out the Pirate MIDI Nexus MIDI Hub for a device with 10 different MIDI outputs that can all be individually set between Type A, Type B, Tip Active, and Ring Active. 

---

## 5. Adding Preset "Save" Functionality to Analog Gear
You can use the CLiCK to "save" the state of your analog amp or pedals as part of a MIDI preset.

* **The Setup**: Manually set your Relay states (Tip/Ring) or Expression position to where you want them for a specific song part. Do this in the [Web Editor](https://edit.piratemidi.com)
* **The Action**: Send **MIDI CC 23** to the CLiCK.
* **The Result**: The CLiCK saves the current relay and expression positions into the active preset. Next time you call up that PC number, the CLiCK will automatically recall those exact analog settings.

!!! tip
    Sometimes saving "on the fly" can get confusing. Try to avoid saving more than one or two new presets when you're not working with the Web Editor. Writing notes to help you remember the changes stops things getting too messy.

---

## 6. Using an External Aux Switch (Aux In Mode)
If you don't want to use a MIDI controller to change CLiCK presets, you can use a simple two-button footswitch.

* **The Setup**: In the Web Editor, set the 3.5mm MIDI Out jack to **Aux In** mode. Connect a 2-button momentary footswitch using a 3.5mm TRS adapter.
* **The Action**: Press the left or right button on your footswitch.
* **The Result**: The CLiCK will increment (Preset Up) or decrement (Preset Down) through its 128 internal presets, updating the Relays and Expression position accordingly.

### More Details
Even though this is far from the most complex thing you can do with a CLiCK, it still opens up lots of new possiblities for gear that doesn't have presets or MIDI control. Not only that, but you can use one little auxilliary footswitch to control "presets" on both a TRS aux switch jack as well as an analog expression pedal jack!