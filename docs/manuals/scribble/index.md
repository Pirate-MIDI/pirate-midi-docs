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

### What’s In The Box
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


# Using the Web Editor

## Import Screen Overview
- **Import from Device** — connect your device by USB and import all its configuration
- **Import from File** — use a Pirate MIDI .json config file to load a configuration (backups, alternate configs etc.)  
- **Create from Template** — use pre-made configs including blank, factory default, and brand or device starting templates from Pirate MIDI 

![Web Editor Import Page](../../assets/ScribbleImages/editor-import-page.png)

---

## Main Screen Overview
Each preset on the device and the editor primarily contains **these elements**:

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

You can see these elements all displayed on the editor screenshot below

![Scribble Editor Main Page Elements](../../assets/ScribbleImages/scribble-editor-main.png)

On top of these obvious parameters, there are also MIDI messages, MIDI clock, and other settings that can change how you use your Scribble.

Below the main visualisation of the Scribble, you'll also see a number of buttons near the bottom of the screen. These buttons are for navigating, copying, and pasting full presets. 

### Sending Your Config To The Scribble
**Send to Device** is the button to send the modified config to the Scribble. No changes are synced until you press this button and transfer the settings - even if you first imported from the device and left the device connected with USB. 

### Saving or Backing Up Multiple Configs
Backing up your configuration is an important part of working with technology. You may also use your Scribble in different contexts and need to switch whole configurations at a moment's notice. If this is the case, you can save your configurations to your computer using the **Export as File** button. 

A `.JSON` file will be saved to your computer. These files can be edited without the web editor as well (if you have the inclination!).

## Preset Settings Page
Here you will find a set of submenus which let you set colours, modes, and MIDI messages that will apply **only to the current preset**

| Submenu | What's Inside |
|--------|---------|
| **Preset Settings** | Text Fields, Colours, Tempo |
| **Switch Messages** | Add MIDI Messages To Each Switch |
| **Preset Messages** | Add Other Custom MIDI Messages |

![Scribble Preset Settings Page](../../assets/ScribbleImages/scribble-editor-preset-settings.png)

## Global Settings Page
Here you will find a set of submenus which let you configure MIDI channel, MIDI outputs, MIDI Thru routing, custom global messages, and more. MIDI Messages added to a *global* message stack will not be restricted to a single preset, but available at all times in all presets.

| Submenu | What's Inside |
|--------|---------|
| **Device Settings** | USB Display Name, Light/Dark Mode, Display Brightness, Colours |
| **MIDI Settings** | TRS MIDI Type, Clock Mode, Ext CC, MIDI Channel, Thru Routing |
| **Switch Settings** | Switch Modes, Global Switch Messages |
| **Global Messages** | Global Custom Trigger MIDI Messages |
| **Wireless Settings** | Wireless Mode, BLE Mode |

![Scribble Global Settings Page](../../assets/ScribbleImages/scribble-editor-global-settings.png)

## App Settings Page
Here you will find web-editor specific tools. Currently this includes MIDI Channel Aliases. 
Add the names of your devices to their respective MIDI channel section, and the name of that device will show across the entire web editor anywhere you need to choose a MIDI channel. Then, instead of a list of MIDI channel numbers, you'll see a list of your devices. This makes it a lot easier to quickly choose which device you're sending a MIDI messages to! 

![Scribble App Settings Page](../../assets/ScribbleImages/scribble-editor-app-settings.png)


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