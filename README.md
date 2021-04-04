# phaser3-rex-plugins-types

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/khasanovbi/phaser3-rex-plugins-types.svg?branch=master)](https://travis-ci.org/khasanovbi/phaser3-rex-plugins-types)

Types for [phaser3-rex-plugins](https://github.com/rexrainbow/phaser3-rex-notes)

## Getting Started

Install the module:

```
npm i --save phaser3-rex-plugins-types
```

Add to your `tsconfig.json` next lines:
```
    "include": [
        "**/*",
        "node_modules/phaser3-rex-plugins-types"
    ]
```

# Supported plugins

## Loader

- [x] [Webfont loader](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/webfontloader/)
- [x] [Await loader](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/awaitloader/)
- [x] [Script tag loader](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scripttagloader/)
- [x] [Image URI loader](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/imageuriloader/)

## Game Object

### Sprite

- [ ] [Circle mask image](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/circlemaskimage/)
- [ ] [Bitmap zone](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/bitmapzone/)
- [ ] [Nine patch](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ninepatch/)
- [ ] [Line](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/line/)

### Text

- [ ] [BBCode Text](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/bbcodetext/)
- [ ] [Tag Text](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/tagtext/)
- [ ] [Typing](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/tagtext/)
- [ ] [Page](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/textpage/)
- [ ] [Edit](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/textedit/)

### Graphics

- [ ] [Round Rectangle](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shape-roundrectangle/)
- [x] [Canvas](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/canvas/)

### Container

- [x] [Container Lite](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/containerlite/)
- [ ] [Grid table](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/gridtable/)

### DOM element

- [x] [Input text](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/inputtext/)
- [ ] [File chooser](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/filechooser/)
- [ ] [Youtube player](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/youtubeplayer/)

### Behaviors

- [ ] [Quad/Hexagon grid align](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/gridalign/)
- [ ] [Random place](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/randomplace/)
- [ ] [Move to](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/moveto/)
- [ ] [Rotate to](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/rotateto/)
- [ ] [Flash](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/flash/)
- [ ] [Shake position](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shake-position/)
- [x] [Fade out destroy](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/fadeoutdestroy/)
- [ ] [Pop up](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/popup/)
- [ ] [Scale down destroy](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scaledowndestroy/)
- [ ] [Flip](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/flip/)
- [ ] [Ease-move](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/easemove/)
- [ ] [Path follower](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/pathfollower/)
- [ ] [Anchor](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/anchor/)
- [ ] [Interception](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/interception/)
- [ ] [Particles along bounds](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/particles-along-bounds/)
- [ ] [Build arcade object](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/buildarcadeobject/)
- [ ] [8 direction](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/eightdirection/)
- [ ] [Bullet](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/bullet/)
- [ ] [Ship](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ship/)

## Input

### Touch

- [ ] [Gestures](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/gesture-overview/)
- [ ] [Button](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/button/)
- [ ] [Drag](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/drag/)
- [ ] [Slider](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/slider/)
- [ ] [Scroller](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/slider/)
- [ ] [Virtual joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/)
- [ ] [Cursor at bound](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/cursoratbound/)
- [ ] [Drag rotate](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/dragrotate/)
- [ ] [Mouse-wheel to up/down](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/mousewheeltoupdown/)

## Audio

- [ ] [Volume fading](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/fadevolume/)

## Camera

### Shader effects

- [ ] [Glow](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-glowfilter/)
- [ ] [Gray scale](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-grayscale/)
- [ ] [Inverse](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-inverse/)
- [ ] [HSL adjust](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-hsladjust/)
- [ ] [Outline](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-outline/)
- [ ] [Toonify](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-toonify/)
- [ ] [Swirl](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-swirl/)
- [ ] [Pixelation](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader-pixelation/)

## Logic

### Events

- [ ] [Wait events](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/waitevents/)
- [ ] [Event promise](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/eventpromise/)

### Run commands

- [ ] [Run commands](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/runcommands/) 
- [ ] [Sequence](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/sequence/)
- [ ] [CSV scenario](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/csvscenario/)
- [ ] [TCRP](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/tcrp-recoder/)

### FSM

- [ ] [FSM](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/fsm/)

### CSV table

- [ ] [Conditions table](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/conditionstable/)

### Quest

- [ ] [Quest](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/quest/)
- [ ] [Dialog-quest](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/dialog-quest/)

## Data

### Data manager

- [ ] [Restorable data](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/restorabledata/)
- [ ] [Buff data](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/buffdata/)

### Unique item list

- [ ] [Unique item list](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/uniqueitemlist/)

### CSV
 
- [ ] [CSV to array](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/csvtoarray/)
- [ ] [CSV to hash table](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/csvtohashtable/)

### Canvas image data

- [ ] [Canvas image data](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/canvas-data/)

## Math

### Random

- [ ] [Gashapon](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/gashapon/) 
- [ ] [Perlin](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/perlin/)

### Geometry                  

- [ ] [Rhombus](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/geom-rhombus/) 
- [ ] [Hexagon](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/geom-hexagon/)

### Curve

- [ ] [Spiral curve](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/curve-spiral/)

## String

- [ ] [LZ string](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/lzstring/)
- [x] [XOR](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/xor/) 

## Time

- [ ] [Clock](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/clock/)
- [ ] [Life time](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/lifetime/)
- [ ] [Away time](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/awaytime/)

## UI

- [ ] [UI](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ui-overview/)

## Board

- [x] [Board](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/board-overview/)
