import canvasToImage from 'canvas-to-image';
import srcCanvas from './createSourceCanvas';
import image from './invention.jpg';

// Create image and draw text on it
const destCanvas = document.createElement('canvas');
destCanvas.width = 1600;
destCanvas.height = 1066;

const destContext = destCanvas.getContext('2d');

const maxImage = new Image();
maxImage.onload = () => {
  destContext.drawImage(maxImage, 0, 0);
  destContext.drawImage(srcCanvas, 54, 54, 900, 575);
  canvasToImage(destCanvas, {
    name: 'invention',
  });
}
maxImage.src = image;



