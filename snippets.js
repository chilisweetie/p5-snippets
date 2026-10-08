// =====================================================================
//  p5.js SNIPPET LIBRARY — edit this file to add / change snippets
// =====================================================================
//
//  Each snippet has one or more "parts". Each part says WHERE to paste it:
//
//    'html'         → index.html, inside <head>
//    'top'          → top of sketch.js, above setup() (outside every function)
//    'preload'      → inside function preload() { }
//    'setup'        → inside function setup() { }
//    'draw'         → inside function draw() { }
//    'keyPressed'   → inside function keyPressed() { }
//    'mousePressed' → inside function mousePressed() { }
//    'end'          → end of sketch.js, after the last }  (a new function)
//
//  Code goes between backticks ` `. Don't use backticks inside the code.
//  level: 'beginner' or 'intermediate'
// =====================================================================

const SITE = {
  title: 'p5.js Snippets',
  subtitle: 'Copy, paste, play. Each snippet tells you where it goes.',
  footer: 'field:work · Workshops & Explorations',
};

const SNIPPETS = [
  // -------------------------------------------------------------------
  // CANVAS
  // -------------------------------------------------------------------
  {
    id: 'full-window',
    title: 'Fill the whole window',
    category: 'Canvas',
    level: 'beginner',
    description: 'Make the canvas fill the browser window, and resize when the window changes.',
    parts: [
      {
        where: 'setup',
        note: 'Replace your existing createCanvas(...) line.',
        code: `createCanvas(windowWidth, windowHeight);`,
      },
      {
        where: 'end',
        code: `function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}`,
      },
    ],
  },
  {
    id: 'fullscreen',
    title: 'Press F for fullscreen',
    category: 'Canvas',
    level: 'beginner',
    description: 'Toggle fullscreen with the F key. Use together with "Fill the whole window" so the canvas resizes.',
    parts: [
      {
        where: 'keyPressed',
        code: `if (key === 'f' || key === 'F') {
  fullscreen(!fullscreen());
}`,
      },
    ],
    tip: 'If nothing happens in the editor preview, open your sketch from File → Share → Fullscreen and try there.',
  },
  {
    id: 'save-image',
    title: 'Press S to save an image',
    category: 'Canvas',
    level: 'beginner',
    description: 'Download whatever is on the canvas as a PNG.',
    parts: [
      {
        where: 'keyPressed',
        code: `if (key === 's' || key === 'S') {
  saveCanvas('my-sketch', 'png');
}`,
      },
    ],
  },
  {
    id: 'hide-cursor',
    title: 'Hide the mouse cursor',
    category: 'Canvas',
    level: 'beginner',
    description: 'Useful for exhibitions and fullscreen pieces.',
    parts: [{ where: 'setup', code: `noCursor();` }],
  },
  {
    id: 'trails',
    title: 'Leave trails',
    category: 'Canvas',
    level: 'beginner',
    description: 'A see-through background lets old frames fade slowly instead of disappearing.',
    parts: [
      {
        where: 'draw',
        note: 'Replace your background(...) line. Lower number = longer trails.',
        code: `background(0, 20);`,
      },
    ],
  },
  {
    id: 'fps',
    title: 'Show the frame rate',
    category: 'Canvas',
    level: 'beginner',
    description: 'Check if your sketch is running smoothly (60 is ideal).',
    parts: [
      {
        where: 'draw',
        note: 'Put this near the bottom of draw() so it is drawn on top.',
        code: `noStroke();
fill(255);
textSize(14);
text(round(frameRate()) + ' fps', 10, 20);`,
      },
    ],
  },

  // -------------------------------------------------------------------
  // MOUSE & KEYBOARD
  // -------------------------------------------------------------------
  {
    id: 'follow-mouse',
    title: 'Shape follows the mouse',
    category: 'Mouse & Keyboard',
    level: 'beginner',
    description: 'mouseX and mouseY are where the mouse is right now.',
    parts: [{ where: 'draw', code: `circle(mouseX, mouseY, 50);` }],
  },
  {
    id: 'mouse-colour',
    title: 'Mouse position changes colour',
    category: 'Mouse & Keyboard',
    level: 'beginner',
    description: 'map() turns the mouse position (0 to width) into a colour value (0 to 255).',
    parts: [
      {
        where: 'draw',
        note: 'Put this before the shapes you want to colour.',
        code: `let r = map(mouseX, 0, width, 0, 255);
let b = map(mouseY, 0, height, 0, 255);
fill(r, 100, b);`,
      },
    ],
  },
  {
    id: 'mouse-held',
    title: 'Do something while the mouse is held',
    category: 'Mouse & Keyboard',
    level: 'beginner',
    description: 'mouseIsPressed is true for as long as the button is down.',
    parts: [
      {
        where: 'draw',
        code: `if (mouseIsPressed) {
  fill(255, 0, 100);
} else {
  fill(255);
}`,
      },
    ],
  },
  {
    id: 'click-background',
    title: 'Click to change the background',
    category: 'Mouse & Keyboard',
    level: 'beginner',
    description: 'A variable remembers the colour between frames; a click changes it.',
    parts: [
      { where: 'top', code: `let bg = 0;` },
      { where: 'mousePressed', code: `bg = random(255);` },
      { where: 'draw', note: 'Replace your background(...) line.', code: `background(bg);` },
    ],
  },
  {
    id: 'space-colour',
    title: 'Spacebar for a random colour',
    category: 'Mouse & Keyboard',
    level: 'beginner',
    description: 'Press space to pick a new random fill colour.',
    parts: [
      { where: 'top', code: `let c;` },
      { where: 'setup', code: `c = color(255);` },
      {
        where: 'keyPressed',
        code: `if (key === ' ') {
  c = color(random(255), random(255), random(255));
}`,
      },
      { where: 'draw', note: 'Put this before your shapes.', code: `fill(c);` },
    ],
  },
  {
    id: 'arrow-keys',
    title: 'Move with the arrow keys',
    category: 'Mouse & Keyboard',
    level: 'beginner',
    description: 'keyIsDown() checks if a key is held, so movement is smooth.',
    parts: [
      { where: 'top', code: `let x = 200;
let y = 200;` },
      {
        where: 'draw',
        code: `if (keyIsDown(LEFT_ARROW)) x -= 5;
if (keyIsDown(RIGHT_ARROW)) x += 5;
if (keyIsDown(UP_ARROW)) y -= 5;
if (keyIsDown(DOWN_ARROW)) y += 5;
circle(x, y, 40);`,
      },
    ],
  },

  // -------------------------------------------------------------------
  // CONTROLS (built into p5)
  // -------------------------------------------------------------------
  {
    id: 'slider',
    title: 'Slider',
    category: 'Controls',
    level: 'beginner',
    description: 'Drag to change a number. Here it controls the size of a circle.',
    parts: [
      { where: 'top', code: `let sizeSlider;` },
      {
        where: 'setup',
        code: `// createSlider(min, max, start)
sizeSlider = createSlider(10, 300, 100);
sizeSlider.position(20, 20);`,
      },
      {
        where: 'draw',
        code: `let size = sizeSlider.value();
circle(width / 2, height / 2, size);`,
      },
    ],
  },
  {
    id: 'colour-picker',
    title: 'Colour picker',
    category: 'Controls',
    level: 'beginner',
    description: 'Pick any colour from a swatch.',
    parts: [
      { where: 'top', code: `let picker;` },
      {
        where: 'setup',
        code: `picker = createColorPicker('#ff4d6d');
picker.position(20, 50);`,
      },
      { where: 'draw', note: 'Put this before your shapes.', code: `fill(picker.color());` },
    ],
  },
  {
    id: 'button',
    title: 'Button',
    category: 'Controls',
    level: 'beginner',
    description: 'A button that runs a function when clicked. Here it clears the canvas.',
    parts: [
      { where: 'top', code: `let clearButton;` },
      {
        where: 'setup',
        code: `clearButton = createButton('Clear');
clearButton.position(20, 80);
clearButton.mousePressed(clearCanvas);`,
      },
      {
        where: 'end',
        code: `function clearCanvas() {
  background(0);
}`,
      },
    ],
  },
  {
    id: 'checkbox',
    title: 'Checkbox (on / off)',
    category: 'Controls',
    level: 'beginner',
    description: 'Switch something on or off.',
    parts: [
      { where: 'top', code: `let showBox;` },
      {
        where: 'setup',
        code: `showBox = createCheckbox(' show circle', true);
showBox.position(20, 110);
showBox.style('color', 'white');`,
      },
      {
        where: 'draw',
        code: `if (showBox.checked()) {
  circle(width / 2, height / 2, 100);
}`,
      },
    ],
  },
  {
    id: 'label',
    title: 'Label next to a control',
    category: 'Controls',
    level: 'beginner',
    description: 'Write a bit of text on the page, e.g. next to a slider.',
    parts: [
      {
        where: 'setup',
        code: `let label = createSpan('Size');
label.position(170, 20);
label.style('color', 'white');
label.style('font-family', 'sans-serif');`,
      },
    ],
  },
  {
    id: 'hide-controls',
    title: 'Press H to hide all controls',
    category: 'Controls',
    level: 'beginner',
    description: 'Keep your controls in a list, then hide or show them all at once.',
    parts: [
      { where: 'top', code: `let controls = [];
let controlsVisible = true;` },
      {
        where: 'setup',
        note: 'After you create your controls, add each one to the list.',
        code: `controls.push(sizeSlider);
controls.push(picker);`,
      },
      {
        where: 'keyPressed',
        code: `if (key === 'h' || key === 'H') {
  controlsVisible = !controlsVisible;
  for (let c of controls) {
    if (controlsVisible) c.show();
    else c.hide();
  }
}`,
      },
    ],
  },

  // -------------------------------------------------------------------
  // CONTROL PANEL (lil-gui)
  // -------------------------------------------------------------------
  {
    id: 'lil-gui',
    title: 'Control panel with lil-gui',
    category: 'Control Panel',
    level: 'intermediate',
    description: 'A tidy panel of sliders, colours and toggles, all linked to one params object.',
    parts: [
      {
        where: 'html',
        code: `<script src="https://cdn.jsdelivr.net/npm/lil-gui@0.19/dist/lil-gui.umd.min.js"></script>`,
      },
      {
        where: 'top',
        code: `let gui;
let params = {
  size: 100,
  colour: '#ff4d6d',
  speed: 1,
  show: true,
};`,
      },
      {
        where: 'setup',
        code: `gui = new lil.GUI();
gui.add(params, 'size', 10, 300, 1);
gui.addColor(params, 'colour');
gui.add(params, 'speed', 0, 5, 0.1);
gui.add(params, 'show');`,
      },
      {
        where: 'draw',
        code: `if (params.show) {
  fill(params.colour);
  circle(width / 2, height / 2, params.size);
}`,
      },
    ],
  },
  {
    id: 'lil-gui-folders',
    title: 'Group controls into folders',
    category: 'Control Panel',
    level: 'intermediate',
    description: 'Collapsible sections in the lil-gui panel.',
    parts: [
      {
        where: 'setup',
        note: 'Use instead of gui.add(...) lines from "Control panel with lil-gui".',
        code: `let shape = gui.addFolder('Shape');
shape.add(params, 'size', 10, 300, 1);
shape.addColor(params, 'colour');

let motion = gui.addFolder('Motion');
motion.add(params, 'speed', 0, 5, 0.1);`,
      },
    ],
  },
  {
    id: 'lil-gui-hide',
    title: 'Press G to hide the panel',
    category: 'Control Panel',
    level: 'intermediate',
    description: 'Hide the lil-gui panel for a clean view or a screenshot.',
    parts: [
      { where: 'top', code: `let guiVisible = true;` },
      {
        where: 'keyPressed',
        code: `if (key === 'g' || key === 'G') {
  guiVisible = !guiVisible;
  gui.show(guiVisible);
}`,
      },
    ],
  },

  // -------------------------------------------------------------------
  // CAMERA, VIDEO & IMAGES
  // -------------------------------------------------------------------
  {
    id: 'webcam',
    title: 'Webcam in the background',
    category: 'Camera & Media',
    level: 'beginner',
    description: 'Show your webcam behind everything else.',
    parts: [
      { where: 'top', code: `let cam;` },
      {
        where: 'setup',
        code: `cam = createCapture(VIDEO, { flipped: true });
cam.hide();`,
      },
      {
        where: 'draw',
        note: 'Put this at the top of draw(), instead of background(...).',
        code: `image(cam, 0, 0, width, height);`,
      },
    ],
    tip: '{ flipped: true } mirrors the camera so it feels like a mirror. Remove it for a normal view.',
  },
  {
    id: 'webcam-faded',
    title: 'Faded webcam',
    category: 'Camera & Media',
    level: 'beginner',
    description: 'Make the webcam see-through so your drawing stands out.',
    parts: [
      {
        where: 'draw',
        note: 'Replace image(cam, ...) from "Webcam in the background".',
        code: `background(0);
tint(255, 60);
image(cam, 0, 0, width, height);
noTint();`,
      },
    ],
  },
  {
    id: 'cover-fit',
    title: 'Fill the window without stretching',
    category: 'Camera & Media',
    level: 'intermediate',
    description: 'Scale a webcam or video to cover the window, cropping the edges instead of squashing it.',
    parts: [
      {
        where: 'draw',
        note: 'Replace image(cam, 0, 0, width, height). Works for any video or image — swap cam for its name.',
        code: `let s = max(width / cam.width, height / cam.height);
let w = cam.width * s;
let h = cam.height * s;
image(cam, (width - w) / 2, (height - h) / 2, w, h);`,
      },
    ],
  },
  {
    id: 'video-file',
    title: 'Video file in the background',
    category: 'Camera & Media',
    level: 'beginner',
    description: 'Loop your own video behind the sketch.',
    parts: [
      { where: 'top', code: `let vid;` },
      {
        where: 'setup',
        note: 'Change myvideo.mp4 to your file name.',
        code: `vid = createVideo('myvideo.mp4');
vid.volume(0);
vid.loop();
vid.hide();`,
      },
      {
        where: 'draw',
        note: 'Put this at the top of draw(), instead of background(...).',
        code: `image(vid, 0, 0, width, height);`,
      },
    ],
    tip: 'Upload the video first: click the > arrow next to sketch.js, then + → Upload file. Keep it small (under 5 MB).',
  },
  {
    id: 'image-file',
    title: 'Image file',
    category: 'Camera & Media',
    level: 'beginner',
    description: 'Load your own picture and draw it.',
    parts: [
      { where: 'top', code: `let img;` },
      {
        where: 'preload',
        note: 'No preload() yet? Add: function preload() { } above setup().',
        code: `img = loadImage('myimage.jpg');`,
      },
      { where: 'draw', code: `image(img, 0, 0, width, height);` },
    ],
    tip: 'Upload the image first: click the > arrow next to sketch.js, then + → Upload file.',
  },

  // -------------------------------------------------------------------
  // SOUND
  // -------------------------------------------------------------------
  {
    id: 'sound-click',
    title: 'Play a sound on click',
    category: 'Sound',
    level: 'beginner',
    description: 'Load a sound file and play it when the mouse is clicked.',
    parts: [
      { where: 'top', code: `let snd;` },
      { where: 'preload', code: `snd = loadSound('mysound.mp3');` },
      { where: 'mousePressed', code: `snd.play();` },
    ],
    tip: 'Needs p5.sound, which the p5 editor includes by default. Upload your sound file the same way as an image.',
  },
  {
    id: 'mic-level',
    title: 'Microphone volume',
    category: 'Sound',
    level: 'intermediate',
    description: 'Make something react to how loud the room is.',
    parts: [
      { where: 'top', code: `let mic;` },
      {
        where: 'setup',
        code: `mic = new p5.AudioIn();
mic.start();`,
      },
      { where: 'mousePressed', code: `userStartAudio();` },
      {
        where: 'draw',
        code: `let vol = mic.getLevel();
circle(width / 2, height / 2, vol * 2000);`,
      },
    ],
    tip: 'Browsers only allow sound after a click, so click the canvas once to start.',
  },

  // -------------------------------------------------------------------
  // HAND TRACKING (ml5 / MediaPipe)
  // -------------------------------------------------------------------
  {
    id: 'hand-setup',
    title: 'Set up hand tracking',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'Start here. Loads ml5 handPose (MediaPipe) and keeps a list of hands found by the webcam.',
    parts: [
      {
        where: 'html',
        code: `<script src="https://unpkg.com/ml5@1/dist/ml5.min.js"></script>`,
      },
      { where: 'top', code: `let video, handPose;
let hands = [];` },
      { where: 'preload', code: `handPose = ml5.handPose({ flipped: true });` },
      {
        where: 'setup',
        code: `video = createCapture(VIDEO, { flipped: true });
video.size(640, 480);
video.hide();
handPose.detectStart(video, gotHands);`,
      },
      {
        where: 'end',
        code: `function gotHands(results) {
  hands = results;
}`,
      },
    ],
    tip: 'Needs p5 1.x. Check the p5 script line in index.html: the version number should start with 1.',
  },
  {
    id: 'hand-points',
    title: 'Draw all 21 hand points',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'See every point the model tracks, numbered 0–20.',
    parts: [
      {
        where: 'draw',
        code: `image(video, 0, 0, width, height);

for (let hand of hands) {
  for (let i = 0; i < hand.keypoints.length; i++) {
    let p = hand.keypoints[i];
    fill(0, 255, 150);
    noStroke();
    circle(p.x, p.y, 10);
    text(i, p.x + 6, p.y - 6);
  }
}`,
      },
    ],
    tip: 'Points are in video pixels (640 × 480). Use createCanvas(640, 480), or the "Hand points in a full window" snippet.',
  },
  {
    id: 'hand-full-window',
    title: 'Hand points in a full window',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'Convert hand points from video pixels to window pixels so they line up with a full-window video.',
    parts: [
      { where: 'top', code: `let vs = 1, vx = 0, vy = 0;` },
      {
        where: 'draw',
        note: 'Put this at the top of draw(), instead of image(video, ...).',
        code: `vs = max(width / video.width, height / video.height);
vx = (width - video.width * vs) / 2;
vy = (height - video.height * vs) / 2;
image(video, vx, vy, video.width * vs, video.height * vs);`,
      },
      {
        where: 'end',
        code: `function toScreen(p) {
  return { x: p.x * vs + vx, y: p.y * vs + vy };
}`,
      },
    ],
    tip: 'Then wrap any point: let tip = toScreen(hands[0].index_finger_tip);',
  },
  {
    id: 'index-finger',
    title: 'Follow the index finger',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'Use the tip of your index finger like a mouse.',
    parts: [
      {
        where: 'draw',
        code: `if (hands.length > 0) {
  let tip = hands[0].index_finger_tip;
  fill(255, 0, 100);
  circle(tip.x, tip.y, 40);
}`,
      },
    ],
    tip: 'Other points: wrist, thumb_tip, middle_finger_tip, ring_finger_tip, pinky_finger_tip.',
  },
  {
    id: 'pinch',
    title: 'Pinch distance',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'Measure the gap between thumb and index finger — a great slider you control with your hand.',
    parts: [
      {
        where: 'draw',
        code: `if (hands.length > 0) {
  let a = hands[0].thumb_tip;
  let b = hands[0].index_finger_tip;
  let pinch = dist(a.x, a.y, b.x, b.y);

  stroke(255);
  line(a.x, a.y, b.x, b.y);
  noStroke();
  circle(width / 2, height / 2, pinch * 2);
}`,
      },
    ],
  },
  {
    id: 'pinch-trigger',
    title: 'Pinch to trigger something',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'Fire an event once each time you pinch, like a click.',
    parts: [
      { where: 'top', code: `let pinching = false;` },
      {
        where: 'draw',
        code: `if (hands.length > 0) {
  let a = hands[0].thumb_tip;
  let b = hands[0].index_finger_tip;
  let pinch = dist(a.x, a.y, b.x, b.y);

  if (pinch < 30 && !pinching) {
    pinching = true;
    // do something once here, e.g.
    background(random(255), random(255), random(255));
  }
  if (pinch > 50) {
    pinching = false;
  }
}`,
      },
    ],
  },
  {
    id: 'smooth-hand',
    title: 'Smooth out jittery tracking',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'lerp() moves a little way towards the target each frame, so movement is calmer.',
    parts: [
      { where: 'top', code: `let sx = 0;
let sy = 0;` },
      {
        where: 'draw',
        code: `if (hands.length > 0) {
  let tip = hands[0].index_finger_tip;
  sx = lerp(sx, tip.x, 0.2); // 0.2 = how fast it catches up
  sy = lerp(sy, tip.y, 0.2);
}
circle(sx, sy, 40);`,
      },
    ],
  },
  {
    id: 'left-right',
    title: 'Left hand vs right hand',
    category: 'Hand Tracking',
    level: 'intermediate',
    description: 'Do different things for each hand.',
    parts: [
      {
        where: 'draw',
        code: `for (let hand of hands) {
  let tip = hand.index_finger_tip;
  if (hand.handedness === 'Left') {
    fill(255, 0, 100);
  } else {
    fill(0, 200, 255);
  }
  circle(tip.x, tip.y, 40);
}`,
      },
    ],
  },

  // -------------------------------------------------------------------
  // PATTERNS & MOTION
  // -------------------------------------------------------------------
  {
    id: 'grid',
    title: 'Grid of shapes (nested loops)',
    category: 'Patterns & Motion',
    level: 'beginner',
    description: 'One loop for columns, one for rows. Change cols and rows to change the grid.',
    parts: [
      {
        where: 'draw',
        code: `let cols = 10;
let rows = 10;
let cellW = width / cols;
let cellH = height / rows;

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    let x = cellW * (i + 0.5);
    let y = cellH * (j + 0.5);
    circle(x, y, min(cellW, cellH) * 0.8);
  }
}`,
      },
    ],
  },
  {
    id: 'pulse',
    title: 'Pulse over time',
    category: 'Patterns & Motion',
    level: 'beginner',
    description: 'sin() goes smoothly up and down forever — perfect for breathing, pulsing shapes.',
    parts: [
      {
        where: 'draw',
        code: `let size = 100 + sin(frameCount * 0.05) * 50;
circle(width / 2, height / 2, size);`,
      },
    ],
  },
  {
    id: 'map',
    title: 'Turn one range into another (map)',
    category: 'Patterns & Motion',
    level: 'beginner',
    description: 'The most useful function for interaction: convert any input into the numbers you need.',
    parts: [
      {
        where: 'draw',
        code: `// map(value, inputMin, inputMax, outputMin, outputMax)
let size = map(mouseX, 0, width, 10, 300);
circle(width / 2, height / 2, size);`,
      },
    ],
  },
];
