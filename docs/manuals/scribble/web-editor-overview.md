## Using the Web Editor

### Import Screen Overview
- **Import from Device** — connect your device by USB and import all its configuration
- **Import from File** — use a Pirate MIDI .json config file to load a configuration (backups, alternate configs etc.)  
- **Create from Template** — use pre-made configs including blank, factory default, and brand or device starting templates from Pirate MIDI 

![Web Editor Import Page](../../assets/ScribbleImages/editor-import-page.png)

---

### Main Screen Overview
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

#### Sending Your Config To The Scribble
**Send to Device** is the button to send the modified config to the Scribble. No changes are synced until you press this button and transfer the settings - even if you first imported from the device and left the device connected with USB. 

#### Saving or Backing Up Multiple Configs
Backing up your configuration is an important part of working with technology. You may also use your Scribble in different contexts and need to switch whole configurations at a moment's notice. If this is the case, you can save your configurations to your computer using the **Export as File** button. 

A `.JSON` file will be saved to your computer. These files can be edited without the web editor as well (if you have the inclination!).

### Preset Settings Page
Here you will find a set of submenus which let you set colours, modes, and MIDI messages that will apply **only to the current preset**

| Submenu | What's Inside |
|--------|---------|
| **Preset Settings** | Text Fields, Colours, Tempo |
| **Switch Messages** | Add MIDI Messages To Each Switch |
| **Preset Messages** | Add Other Custom MIDI Messages |

![Scribble Preset Settings Page](../../assets/ScribbleImages/scribble-editor-preset-settings.png)

### Global Settings Page
Here you will find a set of submenus which let you configure MIDI channel, MIDI outputs, MIDI Thru routing, custom global messages, and more. MIDI Messages added to a *global* message stack will not be restricted to a single preset, but available at all times in all presets.

| Submenu | What's Inside |
|--------|---------|
| **Device Settings** | USB Display Name, Light/Dark Mode, Display Brightness, Colours |
| **MIDI Settings** | TRS MIDI Type, Clock Mode, Ext CC, MIDI Channel, Thru Routing |
| **Switch Settings** | Switch Modes, Global Switch Messages |
| **Global Messages** | Global Custom Trigger MIDI Messages |
| **Wireless Settings** | Wireless Mode, BLE Mode |

![Scribble Global Settings Page](../../assets/ScribbleImages/scribble-editor-global-settings.png)

### App Settings Page
Here you will find web-editor specific tools. Currently this includes MIDI Channel Aliases. 
Add the names of your devices to their respective MIDI channel section, and the name of that device will show across the entire web editor anywhere you need to choose a MIDI channel. Then, instead of a list of MIDI channel numbers, you'll see a list of your devices. This makes it a lot easier to quickly choose which device you're sending a MIDI messages to! 

![Scribble App Settings Page](../../assets/ScribbleImages/scribble-editor-app-settings.png)