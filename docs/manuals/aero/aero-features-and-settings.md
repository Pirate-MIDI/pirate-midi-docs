## 11. Switch Groups
Switch groups are used to activate, toggle, or deactivate switches by pressing other switches. These groups can be simple or very advanced. The default settings allow for simple exclusivity such as is needed to emulate a “snapshot” mode or where only one switch in the group should be able to be active at one time.

However, the advanced broadcast and response system lets you set up groups that interact with each other and commands that respond in very specific ways.

### Accessing and Editing Switch Groups

#### Editing the Switch Groups
There are 3 switch groups per bank. For switches to interact with each other, they must be added to the same group so they can broadcast their state and respond to other switches’ states appropriately.

**Switch**
You can add switches `A`, `B`, and `C` (`1`, `2`, and `3` in the editor) one at a time into groups. This means you can have a group with only 2 of the 3 switches, and the 3rd switch acts in a separate capacity and isn’t influenced by the state of the other 2 switches.

**Broadcast**
Under the `Broadcast` label, you can set the switch to `Transmit only`, `Receive Only`, or `Transmit & Receive`. This is regarding the switch state. 

In `Transmit only`, the switch’s state will be broadcast to the group and other switches in the group will respond according to their own settings. 

`Receive only` will only respond to received state changes from other members of the group.

**Respond To**
The options here are `On`, `Off`, or `On & Off`. This means that the switch will respond according to the Response Type (see next section) when it receives the `On` or `Off` state of another switch in the group. 

Whether it receives the `On` or `Off` state depends on the Broadcast setting as
described above. 

If broadcast is set to `transmit only`, the switch will not be affected by other
switches state changing, and these response settings will be of no consequence.

**Response Type**
The options here are `Or`, `And`, `Toggle`, `On`, and `Off`. These settings dictate the response of this group member when it responds to (see above) the state of another switch in the group which has been broadcast to the group. 

So, if the switch has been set to receive broadcasts from other
switches (via `Receive only` or `Transmit & Receive` mode), this setting dictates the response.

`OR`: Inverts the setting of the state it is receiving. If it receives broadcast from another switch turning off, it will turn this switch on.

`AND`: Mimics the state it is receiving. If it receives broadcast from another switch turning on, this switch will also turn on.

`TOGGLE`: Regardless of the state of the broadcasting switch, this switch will toggle its state. If it is on, it will toggle to off. If already off, it will toggle to on.

`ON`: Sets the switch to On when it receives a broadcast of any state.

`OFF`: Sets the switch to Off when it receives broadcast of any state.

#### Sequential Mode in a Switch Group
If a switch is in Sequential Mode, you can still add it to a switch group. In this case, when a sequential switch receives an `On` message from another switch in the group, it will be activated in the same way as when the switch is physically pressed. This means the switch will still follow the same direction that has been set for that switch (forward or reverse).

Switch groups with sequential switches can also be used across devices connected using Device Link.

## 12. Footswitch LEDs
Each switch on the Aero has an LED. The LEDs are RGB (multi-color) and can be customised per bank and per sequential step in the web editor.

### LED Colour Selection
To change the color of the LED, first select the bank that you want the change to affect. Then, click on the LED representation on the web editor screen. 

Alternatively, there is an LED color selection in the switch configuration menu.
Now you can choose the color to be associated with the switch function. The Aero comes with 11 colors pre-set, an `off` option, and the 12 custom color slots.

!!! note
    The “Sequential” switch mode requires an extra step to change the color. This is because each step can have its own color. When editing the sequential message stack, you will be able to set the color for each step individually.

### Custom LED Colours
There are 12 user-created custom color slots on the Aero. You can create these colors by going to the Global Interface Settings menu in the web editor.

### LED Behaviour
The LED function is linked to the current mode of the footswitch. 

In `Toggle` mode, the LED will light after a press, and then will be turned off on the second press.

In `Momentary` mode, the LED will light only when the switch is pressed.

In `Tap Tempo` (MIDI Clock) mode, the LED will be flashing to indicate the current tempo. The flash rate will update as you tap new tempos.

In `Sequential` mode, the LED will show the color of the current step. Each step can be assigned
a color in the sequential message stack.

### External MIDI Control
LEDs can be controlled via external MIDI commands. Any changes made are not permanent, and do not change the onboard settings, they only temporarily override the LED settings.

This is useful for linking LED colors or actions with external apps like DAWs or Live Looping software.

#### Colour Change Target
To change the colour of an LED externally, you must first target that LED by sending a value between `0` and `2` on `CC 55`.

After you have sent the target message, messages sent on CCs 56-58 will affect the color channels (Red, Green, and Blue) of that LED to create a colour. There are also brightness controls.

See the MIDI Implementation table at the end of this manual for the specific value ranges.

### LED Brightness
LED Brightness can be set from `0`-`100`% in the Global Interface Settings menu in the web editor.

## 13. Bank & Switch Labels
On the Aero, bank names are saved to the device to help you identify parts of your
configuration as you work with the web editor.

### Changing the Bank Name
Simply click the bank name section underneath the main Aero representation in the web editor and start typing, or head to Bank Settings to change the bank name.

### Changing Bank Numbering
Banks are numbered from 1-128 by default. If you prefer to have them numbered from 0-127, you can change it by going to the Global Interface Settings.

### Changing & Customising Switch Labels
Each switch can be given a different name in all 128 banks on the Aero, even though they’re only visible in the editor. 
These labels can be up to 8 characters, and they help you to keep track of your settings and configuration as you move between the editor and the device, make changes, and tweak your settings.

To customise your switch labels, simply click on the switch label text on the main screen of the web editor and start typing, or go to the Switch Configuration menu and type the label in the `Switch Name` text box.

## 14. Bank Navigation
To allow bank changes on the Aero, you will need to assign a trigger. Because Aero is a standard passive aux switch, “combo” switch presses using more than one switch are not possible.

So, you can add a Smart Message on any switch in any message stack - the bank control Smart Messages are `Next bank`, `Previous bank`, and `Go to bank ‘x’`.

You can also add a global bank trigger, but this will render the switch otherwise limited in its functions, but if you’re simply progressing through setlists and triggering a large stack of bank messages with each bank change, this might be ideal for you.

Global bank up and bank down triggers can be set to:

• `FS1`
• `FS2`
• `FS3`
• `none`

### Setlists
In the web editor, you can not only drag and drop banks to rearrange them, but you can use the setlist manager to create 8 different setlists. Setlists let you drag and drop up to 32 banks into a custom order, and then using Smart Messages or external MIDI commands, you can select which setlist you want to use, and then standard `Bank up` and `Bank down` commands will progress through the setlist instead of standard bank number order.

*Currently, setlists are not able to be selected on the Aero but we will soon be adding the relevant Smart Messages and MIDI implementation. This will be done through a firmware update.*

## 15. Other Global Settings
Some of the fundamental Global Settings like Flexiports and MIDI Thru have already been covered earlier in this manual. 

### MIDI Channel
MIDI allows up to 16 channels to keep streams of messages separate. This means devices will act on messages that are only intended for that device.

When sending MIDI control messages to the Aero, you’ll need to make sure you’re sending messages with the correct MIDI channel. By default, the device is set to `omni` which means it will listen to all MIDI messages and act on any valid CC or PC numbers. If you want to limit the responses, set the channel to a channel of your choice.

If you want to make sure that messages coming into the Aero are passed thru, and not interpreted as Aero control messages, you’ll need to change the MIDI channel of the Aero to a specific number (perhaps 16?) and then make sure your other messages are not using channel 16.

### Persistent Switch States
If you would like your controller to remember the states you left switches in when changing banks, you can turn these setting on or off in the Global Interface Settings.

These three settings let you choose whether toggle states, scrolling switch counters, or sequential steps are saved when you exit a bank and then later return to that same bank. 

This does not make a scrolling switch on one bank link to the scrolling counter on a scrolling
switch on another bank.

### Transmit Switch States
If you would like you controller to transmit the switch states and send their messages when changing banks, you can turn this setting on or off in the Global Interface Settings also.

This setting allows you to automatically reset or sync your gear to a “default” or “beginning” state for each bank, without using bank messages, and so that your gear matches the default bank state of your Aero every time.

### Program Change (PC) Bank Output
By default, your Aero will automatically send a Program Change (PC) MIDI message when you change banks. This is useful for plugging into another device like a HX Stomp and having the presets stay in sync with the banks.

The PC Outputs are turned on for all MIDI Outputs by default, and you can change the MIDI channel they send on, or turn them off entirely (per MIDI Out) in the Global MIDI Settings.

### Switch Hold Time
To adjust the time before a "Hold” event is registered for the onboard switches, go to the Global Interface Settings

This setting can be adjusted from 300ms to 2500ms (.3 sec to 2.5 sec).