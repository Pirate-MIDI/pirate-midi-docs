# MIDI Implementation
The CLiCK v2 is set to MIDI channel 1 by default. This can be changed in the Global MIDI Settings in the [Web Editor](https://edit.piratemidi.com).

Sending any of the below MIDI messages to the CLiCK via wired or wireless or USB MIDI on the CLiCK's set MIDI channel will trigger the listed functions.

| Function | MIDI CC# | Value |
| :--- | :--- | :--- |
| **Navigation** | | |
| Save to Current Preset | 23 | Any (0-127) |
| Preset Up | 24 | Any (0-127) |
| Preset Down | 25 | Any (0-127) |
| Go to Preset 'x' | 26 | 0-127 |
| Go to Bank 'x' (PC) | PC | 0-127 |
| **Action Control** | | |
| Tip Relay: On | 1 | 127 |
| Tip Relay: Off | 1 | 0 |
| Tip Relay: Toggle | 1 | 64 |
| Ring Relay: On | 2 | 127 |
| Ring Relay: Off | 2 | 0 |
| Ring Relay: Toggle | 2 | 64 |
| Tip & Ring: On | 3 | 127 |
| Tip & Ring: Off | 3 | 0 |
| Tip & Ring: Toggle | 3 | 64 |
| Expression Position | 11 | 0-127 |