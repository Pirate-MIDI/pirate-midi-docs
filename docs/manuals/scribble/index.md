# Scribble Quickstart Guide
_A compact, configurable LCD display for showing custom preset names and other text, sending custom MIDI messages, and scrolling presets in your MIDI rig._

!!! info
    This quickstart is for early reviewers and sample units. A full, detailed documentation site will launch soon.

![Scribble on a Chase Bliss Audio Lossy](../../assets/ScribbleImages/scribble-header-image.jpg){.imageheight-300}

---

## What is Scribble?
**Scribble** is a standalone, USB-powered display module which can send and be controlled by MIDI messages. 

It shows **text labels**, **preset numbers**, **MIDI clock data**, and **connection status** received over MIDI or inherent in the device itself. 

- Onboard buttons can be used to send preset change commands, or any other set of custom MIDI messages you wish to send. 

- MIDI clock can be received and passed on thru the Scribble, or Scribble can generate its own MIDI clock to send to your MIDI devices. 

- All configuration happens in the [**Pirate MIDI Web Editor**](https://edit.piratemidi.com) — nothing is configured directly on the hardware.

!!! example "PRE-LAUNCH USERS"
    During beta testing, please use the [**development web editor**](https://pm-edit-dev.web.app).

### Key Features
- USB MIDI + 3.5mm TRS MIDI Type A/B *(Switchable in editor)*
- 1.47" LCD display 
- 128 Customisable presets with text, colours, and MIDI messages
- Real-time MIDI clock display  
- Preset switching via CC or PC 
- USB-powered or 9V DC powered
- Web-based configuration *(Chromium browser required)*
- Firmware updates via browser at [**update.piratemidi.com**](https://update.piratemidi.com)

---

## What’s In The Box
- Scribble unit  
- Protective screen overlay
- 3.5x1.1mm to 5.5x2.1mm DC centre negative right angle adapter cable

---

## Quick Setup (60-Second Version)

### 1. Power the Scribble
Connect to any 5V USB-C or 9V DC power source.  
On first power-up, a welcome process will start and prompt for any new firmware updates. After first power-up, this screen will not show again.

### 2. Open the Web Editor
Go to:  
[**https://edit.piratemidi.com**](https://edit.piratemidi.com)

!!! warning "Browser Support"
    Use Chrome or another Chromium browser. Non-Chromium browsers do not support webMIDI or webSerial and will not recognise your device.

Select **Import from Device**, then choose the device with  
`SCRIBBLE` in the name, and click **connect**

![Scribble Web Editor Import Page](../../assets/ScribbleImages/editor-import-page.png)

### 3. Edit a Preset
On the main screen, you can start editing your presets by clicking on the text entries and simply replacing it with your own. 
To change what function the buttons perform, click on one of the buttons' representations on the screen.

On the main screen you can:

- View and edit text labels  
- View global or per-preset colour settings visually   
- Scroll through presets
- Copy and Paste whole presets for efficient workflows 
- Use keyboard shortcuts `J` and `K` to change presets

![Scribble Editor Main Page Elements](../../assets/ScribbleImages/scribble-editor-main.png)

### 4. Upload to Device
Click **Send to Device**. Select the Scribble from the pop-up and press `Connect`
The Scribble updates instantly — no reboot needed.


### Global MIDI Settings
Under **Global Settings > MIDI Settings**, define how your Scribble behaves as a MIDI device:
- MIDI Channel number  
- Which MIDI outputs (TRS, USB, BLE) are used for different messages
- MIDI Clock settings
- Customise external MIDI CC controls if needed 

External CCs can scroll or select presets. They can also be used to trigger specific stacks of custom MIDI messages at any time. 

![Scribble Editor Global MIDI Settings](../../assets/ScribbleImages/scribble-editor-midi-settings.png)

### Global Device Settings
Under "Global Settings > Device Settings
---

## Connecting Scribble to Your Rig

### USB MIDI
Connect directly to:
- Bridge6 / Bridge4  
- ToneX One  
- HX Stomp / Helix  
- Computers / DAWs  
- USB host devices  

### TRS MIDI (Type A)
Compatible with:
- Strymon  
- Chase Bliss  
- Boss  
- Meris  
- Jackson Audio  
- And standard TRS MIDI pedals

!!! warning
    Scribble is not a MIDI merger. Avoid feeding two controllers into Scribble at the same time unless deliberately testing.

---

## Example Use Cases

<div class="grid cards" markdown>
-   **Bridge6 + Scribble**  
    Show preset name, scene name, and active toggle states.

-   **ToneX One**  
    Display current preset, gain A/B state, and input level meter.

-   **CLiCK v2**  
    Visualise relay states or amp channel status.

-   **Simple USB Setup**  
    Connect straight to a laptop to display DAW parameters.
</div>

_This section will expand with diagrams and screenshots later._

---

## Firmware Updates

Scribble uses the same updater as BridgeOS devices.

### How to Update
1. Visit **https://update.piratemidi.com**  
2. Connect Scribble via USB-C  
3. Click **Connect Device**  
4. Select **Scribble** in the list  
5. Press **Update Firmware**  
6. Wait for the progress bar to finish  
7. The device auto-reboots