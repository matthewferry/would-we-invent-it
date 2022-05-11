const CanvasTextWrapper = require('canvas-text-wrapper').CanvasTextWrapper;
import invention from './getInvention.js';

// create offscreen text canvas
const createSourceCanvas = document.createElement('canvas');
const srcWidth = 900;
const srcHeight = 560;
const question = 'Would we invent ' + invention + ' ?';

createSourceCanvas.width = srcWidth;
createSourceCanvas.height = srcHeight;

CanvasTextWrapper(createSourceCanvas, question, {
  font: "bold 112px Impact, sans-serif",
  textAlign: "center",
  verticalAlign: "middle",
  sizeToFill: true,
  strokeText: true,
});

export default createSourceCanvas;