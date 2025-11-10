# Scribble Quickstart Guide
_A compact, configurable LCD display for showing custom preset names and other text, sending custom MIDI messages, and scrolling presets in your MIDI rig._

!!! tip
    This quickstart is for early reviewers and sample units. A full, detailed documentation site will launch soon.

---

## What Scribble Is
**Scribble** is a standalone, USB-powered display module. 

It shows **text labels**, **preset numbers**, **MIDI clock data**, and **connection status** received over MIDI or inherent in the device itself. 

Onboard buttons can be used to send preset change commands, or any other set of custom MIDI messages you wish to send. 

MIDI clock can be received and passed on thru the Scribble, or Scribble can generate its own MIDI clock to send to your MIDI devices. 

All configuration happens in the [**Pirate MIDI Web Editor**](https://edit.piratemidi.com) — nothing is configured directly on the hardware.
**During beta testing, please use the [**development web editor**](https://pm-edit-dev.web.app).**

### Key Features
- USB MIDI + 3.5mm TRS MIDI Type A/B *(Switchable in editor)*
- 1.47" LCD display 
- 128 Customisable presets with text, colours, and MIDI messages
- Real-time MIDI clock display  
- Preset switching via CC or PC 
- USB-powered or 9V DC powered
- Web-based configuration *(Chromium browser required)*
- Firmware updates via browser at **update.piratemidi.com**

---

## What’s Included
- Scribble unit  
- Protective screen overlay
- DC adapter cable for regular 2.1mm centre negative power supplies

---

## Quick Setup (60-Second Version)

### 1. Power the Scribble
Connect to any 5V USB-C or 9V DC power source.  
On first power-up, a welcome process will start and prompt for any new firmware updates. After first power-up, this screen will not show again.

### 2. Open the Web Editor
Go to:  
**https://edit.piratemidi.com**

!!! tip "Browser Support"
    Use Chrome or another Chromium browser. Non-Chromium browsers do not support webMIDI and will not recognise your device.

Select **Import from Device → Connect to Scribble**, then choose the device named:  
`PIRATE_SCRIBBLE_XXXX`

> _Screenshot placeholder: Device selection window_

### 3. Edit a Preset
On the main screen, you can start editing your presets by clicking on the text entries and simply replacing it with your own. 
To change what function the buttons perform, click on one of the buttons' representations on the screen.

On the main screen you can:
- View and edit text labels  
- View global or per-preset colour settings visually   
- Scroll through presets
- Copy and Paste whole presets for efficient workflows 
- Use keyboard shortcuts `J` and `K` to change presets

> _Screenshot placeholder: Layout editor with Scribble layout open_

### 4. Upload to Device
Click **Send to Device**. Select the Scribble from the pop-up and press `Connect`
The Scribble updates instantly — no reboot needed.

---

## Using the Web Editor

### Import Screen Overview
- **Import from Device** — connect your device by USB and import all its configuration
- **Import from File** — use a Pirate MIDI .json config file to load a configuration (backups, alternate configs etc.)  
- **Create from Template** — use pre-made configs including blank, factory default, and brand or device starting templates from Pirate MIDI 

---

### Main Screen Overview

Each preset contains **these elements**:

| Element | Purpose |
|--------|---------|
| **Primary Text Label** | 12-Character Text Field |
| **Secondary Text Label** | 16-Character Text Field |
| **Preset Number** | Shows Scribble's Current Preset |
| **MIDI Clock** | Shows Incoming or Generated MIDI Clock in BPM, ms, or with Flasher |
| **Status Indicators** | Shows Incoming MIDI and BLE Status |
| **Background Colour** | Configured Globally or Per Preset |
| **Text Colour** | Configured Globally or Per Preset |
| **Status Bar Colour** | Light or Dark Mode Selected Globally |

![Scribble Editor Main Page Elements](../../assets/ScribbleImages/scribble-editor-main.png)

### MIDI Mapping
Under **Mappings**, define what Scribble listens to:
- CC (value or range)  
- Program Changes  
- Notes  
- SysEx (advanced)  

Mappings can:
- Switch pages  
- Update values  
- Toggle visibility  
- Trigger animation/transition states (future)

> _Screenshot placeholder: Mapping UI_

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

!!! tip
    If the updater cannot detect your device, unplug/replug the USB-C cable or try another USB port.

---

## Troubleshooting Basics

| Issue | Likely Cause | Fix |
|-------|--------------|------|
| Screen is blank | Power or cable issue | Try another USB-C cable or port |
| Can’t connect in browser | Browser blocks WebUSB | Use Chrome or Edge |
| Values not updating | Wrong MIDI channel | Match pedal/controller channel |
| Page won’t change | Incorrect mapping | Check CC/PC mapping rules |

---

## Technical Notes (Short Form)
- **Power:** 5V USB-C  
- **Display:** 128×64 or 160×128 OLED  
- **MIDI:** USB MIDI class compliant + TRS Type A  
- **Config:** WebUSB (editor.piratemidi.com)  
- **Firmware:** Browser-based DFU  

---

## Coming Soon
- Full user manual  
- Example preset library  
- Advanced conditional logic guides  
- Integration with BridgeOS devices  
- JSON import/export  
- Icon packs and layout templates  

---