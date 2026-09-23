# Jungle Frog - steg 1

Startprojektet för live-vibekodningen.

## Struktur

- `index.html` - sidans struktur
- `css/style.css` - layout och utseende
- `js/gameMap.js` - spelvärlden och ritningen
- `js/game.js` - spelstatus och game loop
- `js/physics.js` - fysik/matematik
- `js/input.js` - knappar och tangentbord
- `js/ui.js` - statusmeddelanden
- `assets/` - plats för framtida externa bilder

## Startläge

Grodan kan redan göra ett enkelt, förinställt hopp. Värdena för rörelsen finns medvetet dolda i `physics.js` och exponeras inte i gränssnittet.

Under livekodningen kan modellen växa stegvis med vinkel, starthastighet, gravitation och vind.
