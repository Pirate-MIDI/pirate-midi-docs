## 4. Flexiports

### Flexiport Modes Summary
The Flexiport is a multi-function TRS port that can be configured in the web editor to suit your specific hardware needs. Each port can be set independently to any of the following modes:

1. **MIDI Out - Type A:** Can power CME WIDI devices. Type A is the MIDI TRS standard. 
2. **MIDI Out - Type B:** As used by Arturia, Novation, and others. Will usually work with newer Chase Bliss Audio pedals. 
3. **MIDI Out - Tip Active:** Empress, Alexander Pedals, Meris, Bondi Effects and more. 
4. **MIDI Out - Ring Active:** Chase Bliss Audio
5. **MIDI In:** Only works with our [MIDI In adapter for Flexiports]() 
6. **Device Link:** Connect multiple Pirate MIDI devices together.
7. **Exp-Doubler In:** Enables two expression pedal inputs per Flexiport with our Expression Mate or Exp-Doubler devices. 
8. **Exp In:** Single TRS expression pedal input. 
9. **Aux Switch In:** 1, 2, or 3 switch TRS aux switches supported. Add more footswitches to your controller.

!!! Danger "Flexiport Warning"
    Other Pirate MIDI devices may offer different Flexiport modes. Connecting a device to the Flexiports when the Flexiport is not set to a compatible mode may damage your device and void your warranty. 
    
    Please make sure your Flexiport is set to the correct mode **before connecting the device to the Flexiport.**

### MIDI Out
When set to ‘’MIDI Out’ mode, the Flexiport is a dedicated MIDI TRS Output. There are 4 MIDI Out modes: Type A, Type B, Tip Active, & Ring Active. You can choose the MIDI Out mode in the Global settings menu in the web editor.

TRS A is the standard MIDI specification for TRS MIDI. It use the ‘Tip’ to send MIDI. However, because MIDI over TRS was introduced before the specification was decided, there are some brands that send on the ‘Ring.’ This is called TRS B.

Again, there are other brands who do not adhere to the specification and only use two pins, instead of three to send MIDI data. Brands such as Empress, Meris, Bondi Effects, Alexander Pedals, and Chase Bliss Audio use either Tip active or Ring active modes.

If you are unsure which pedals or devices use which mode, a quick google will probably answer your question. If you’re having trouble finding out, feel free to ask in our Facebook group which will get the fastest response, or you can ask us in an email to support@piratemidi.com

Once the Flexiport is in MIDI Out mode, any messages that have their MIDI set to be output to that Flexiport will be transmitted out that Flexiport when the messages are triggered.

### Expression Pedal In
Expression pedals will sometimes not register their full range on different devices they connect to. Calibrating your expression pedal will make sure that toe-down is equal to the maximum MIDI value (127) and heel-down is equal to the minimum value (0).

*Currently calibration of expression pedals is not implemented on the Aero, but we will add it in a future firmware update.*

### Exp-Doubler In
When set to “Exp-Doubler In” mode, usage is the same as “Exp In” including calibration etc. but this mode can only be used with the PIRATE MIDI Exp-Doubler.

An expression pedal usually works with three contacts: Tip, Ring, and Sleeve. The Ring supplies power, the Sleeve is connected to ground, and the Tip transmits the position of the pedal.

Our Exp-Doubler supplies power to the Ring of your expression pedals which leaves an extra slot on the Flexiport for receiving the pedal position. Across two Flexiports this means up to 4 expression pedals can be used! Two per Flexiport. This is why Expression pedals and their message stacks are labelled as 1A and 1B, 2A and 2B. 1A and 2A are the "single", and 1B and 2B are used only in Exp-Doubler In mode. 

### Aux Switch In
When set to ‘’Aux Switch” mode, the Flexiport will receive auxiliary switch input for extra footswitch controls. Set the Flexiport mode in the global settings menu.

Single, double or triple auxiliary switches will work in this mode. Plug your aux switch into your Flexiport and then assign it a function or MIDI command in one/both of the Global and Bank Aux Settings.

You can assign messages for up to 3 auxiliary switches (Tip, Ring, Tip+Ring). The available messages are Press, Hold, Toggle On, and Toggle Off.

These messages are available to configure individually for every bank, but also globally. This means that each switch can send 2 messages at once for press, toggles, and holds. All message
types, including smart messages and keyboard messages, can be assigned to Aux Switches.

### Device Link
When set to “Device Link” mode, the Flexiport acts as a high-speed communication port to link two PIRATE MIDI devices for transfer of MIDI messages and other commands. Activate Device Link mode in the global settings menu of the web editor under “Flexiport Settings” and then “Device Link Settings” for the more specific options related to Device Link mode.

Device Link can sync bank changes, bank names, merge switch groups to interact between devices, and stream MIDI from one device to the MIDI out of a different device.

#### Setting the Main/Satellite Roles
To choose which device will broadcast it’s bank name and act as the Main device, select the “Role” as `Main` or `Satellite` in the Device Link settings of the web editor.

#### Device Link Settings
In the above-mentioned menu, there are currently 5 options after the Main/Satellite choice.

**Bank Name**
Temporarily overwrites the displayed bank name on the Satellite device with the bank name of the Main device when connected to the Device Link network. 

!!! note 
    The bank name is not replaced, and when disconnected the original bank names are retained on the satellite device.

**Bank Navigation**
Synchronise bank changes between devices. Similar to how a PC message would normally cause a bank change, but without using up message space.

**MIDI Receive (RX)**
MIDI messages are received via the high-speed device link connection, and output to the MIDI outputs as per the MIDI Thru Flexi1/2 routing set in the Global “MIDI Thru” menu. To send a message to the device link network, make sure the message’s outputs have the Flexiport set to `on`. 
If Device Link is through Flexiport 2, make sure the message outputs haven Flexiport 2 set to `on`.

**Footswitch Groups**
Switch Groups are merged across the network. Members of group ‘x’ (e.g. 1) on all devices interact as if they’re in the same group. There is no consequence to disconnecting from the Device Link network. The switch group settings will simply interact with the switches on that device.

**Sequential Switches**
Switches set to Sequential Mode that have been added to a switch group can have their sequential step triggered by another switch in the group depending on the switch group settings (See the chapter covering Switch Groups). This included sequential switches in the same group across a Device Link connection.

---

## 5. MIDI In/Out/Thru

### MIDI Out
To send MIDI from your Aero to another device, you can use the 3.5mm TRS Flexiports. If you need to convert to DIN5 or 1/4” TRS, adapters are available online or on our website.

MIDI Out (Type A) Flexiport mode will power a CME WIDI device.

This output is activated by default on new messages, but when editing an existing message, it’s best to check that the correct output is activated.

#### MIDI In
There is no dedicated MIDI input on the Aero. When connected to a USB host, the Aero can receive USB MIDI, and when in Device Link mode, it can stream MIDI from the other Device Link devices that are connected and pass those messages to the Aero’s outputs.

#### External MIDI Control
Using the MIDI commands detailed in the “MIDI Implementation” chapter at the end of this manual, you can send MIDI commands from another device to the Aero to control various features such as bank changes, sequential step position, switch emulation and much more.

#### MIDI Thru
There is no dedicated MIDI Thru jack on the Aero, however the digital MIDI Thru routing is very flexible.

To set the MIDI Thru routing go to the Global MIDI Settings in the web editor.

This menu allows you to choose which MIDI Outs (Flexi 1, Flexi 2, USB) the MIDI messages received on the chosen input (USB or TRS In) will be sent to. 

!!! tip 
    MIDI can only come into the Aero through USB or Device Link unless you're using the MIDI In adapter and the MIDI In Flexiport mode.

For example, if you choose to turn on MIDI Thru routing from the USB In to Flexiport 1, any message received on the USB In will be sent to Flexiport 1 if it is in a MIDI Output mode. But it will not be sent to the USB out or the other Flexiport unless they are also set to ‘on’ in the Thru routing settings.

Flexi1 and Flexi2 thru settings are only used when the Flexiport is being used as a Device Link port. MIDI cannot be received via a Flexiport except when using the Flexiport in Device Link mode.

!!! warning
    MIDI can be looped back to outputs, but you should be careful not to create unintentional infinite loops. If a message is sent from the Aero USB port, and the device it is connected to is set to send the MIDI back to the Aero and you also have the MIDI Thru routing settings on the Aero set to send MIDI in to the MIDI out, you will have an infinite loop as both the Aero and the USB device send the MIDI thru from their input to their output.

## 6. USB & USB MIDI

Your Aero is a class-compliant USB MIDI device. This means you can plug it into any kind of USB host (Windows, Mac OS, iOS, Android, iPadOS) and it will automatically be recognised as a MIDI device to control or receive messages from any DAW, app or plugin. It is also a plug-and-play HID (keyboard) device which means you can send keystrokes and key-command macros to these USB host devices.

### USB (type-C)
USB MIDI requires a USB host device. A host device can be a computer, tablet, phone, or some kind of USB MIDI host box designed to link a pedal with USB directly to a MIDI controller without needing a computer-like device.

The Aero does not offer itself as a USB host and therefore cannot be directly linked from USB to USB on pedals such as the Zoom multistomp series.

A USB host device like the CME WIDI UHOST will be a great addition to your Aero. Plug it into your USB port and go wireless! It also means that as a USB host device, you can connect the WIDI UHOST to a WIDI Jack or similar and use the USB MIDI in/out as another general MIDI in/out to the device the WIDI Jack is plugged into.

The USB port receives power as well as USB MIDI.

!!! note 
    iPads/iPhones/Android etc. may not provide enough power from their USB port to power the Aero. In that case, you would need to power it via a powered USB hub or the DC jack. 