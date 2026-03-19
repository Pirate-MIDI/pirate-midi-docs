## 17. MIDI IMPLEMENTATION
The Aero can itself be controlled by MIDI from an external MIDI device via Device Link or USB MIDI. 

You can set the MIDI channel in the web editor’s Global MIDI Settings menu.

| FUNCTION | MIDI CC# | VALUE |
| :--- | :--- | :--- |
| **External MIDI Control** | | |
| FS1: Toggle On/Off | 1 | 0=Off, 127=On |
| FS1: Toggle On | 1 | 127 |
| FS1: Toggle Off | 1 | 0 |
| FS1: Trigger Press | 2 | Any (0-127) |
| FS1: Trigger Release | 3 | Any (0-127) |
| FS1: Trigger Hold | 4 | Any (0-127) |
| FS1: Trigger Hold Release | 5 | Any (0-127) |
| FS1: Trigger Double Press | 6 | Any (0-127) |
| FS2: Toggle On/Off | 11 | 0=Off, 127=On |
| FS2: Toggle On | 11 | 127 |
| FS2: Toggle Off | 11 | 0 |
| FS2: Trigger Press | 12 | Any (0-127) |
| FS2: Trigger Release | 13 | Any (0-127) |
| FS2: Trigger Hold | 14 | Any (0-127) |
| FS2: Trigger Hold Release | 15 | Any (0-127) |
| FS2: Trigger Double Press | 16 | Any (0-127) |
| FS3: Toggle On/Off | 21 | 0=Off, 127=On |
| FS3: Toggle On | 21 | 127 |
| FS3: Toggle Off | 21 | 0 |
| FS3: Trigger Press | 22 | Any (0-127) |
| FS3: Trigger Release | 23 | Any (0-127) |
| FS3: Trigger Hold | 24 | Any (0-127) |
| FS3: Trigger Hold Release | 25 | Any (0-127) |
| FS3: Trigger Double Press | 26 | Any (0-127) |
| **Bank Navigation** | | |
| Bank Up | 30 | Any (0-127) |
| Bank Down | 31 | Any (0-127) |
| Go to Bank 'x' | 32 | 0-127 |
| Go to Bank 'x' (PC) | PC | 0-127 |
| **LED Control** | | |
| Toggle FS1 LED | 50 | 0=Off, 127=On |
| Toggle FS2 LED | 51 | 0=Off, 127=On |
| Toggle FS3 LED | 52 | 0=Off, 127=On |
| Red Channel Intensity | 56 | 0-127 |
| Green Channel Intensity | 57 | 0-127 |
| Blue Channel Intensity | 58 | 0-127 |
| Reset Target LED Values | 59 | 0, 2, 4 (FS1-3) |
| Reset All LED values | 60 | Any (0-127) |
| **MIDI Clock Control** | | See chapter 8 for details |
| Target Clock A: 45-127 BPM | 73 | 0 |
| Target Clock A: 128-240 BPM | 73 | 1 |
| Set Tempo (when targeting 45-127 BPM) | 74 | 45-127 (= 45-127 BPM) |
| Set Tempo (when targeting 128-240 BPM) | 74 | 0-127 = 128-240 bpm (e.g. 10 = 128+10, tempo will be 138) |