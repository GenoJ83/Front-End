const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'public', 'videos')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy files
const files = [
  {
    src: path.join(__dirname, '..', 'Pic 2.jpeg'),
    dest: path.join(__dirname, 'public', 'images', 'Pic 2.jpeg')
  },
  {
    src: path.join(__dirname, '..', 'Pic 3.jpeg'),
    dest: path.join(__dirname, 'public', 'images', 'Pic 3.jpeg')
  },
  {
    src: path.join(__dirname, '..', 'Fitness.mp4'),
    dest: path.join(__dirname, 'public', 'videos', 'Fitness.mp4')
  }
];

files.forEach(file => {
  if (fs.existsSync(file.src)) {
    fs.copyFileSync(file.src, file.dest);
    console.log(`Copied ${file.src} to ${file.dest}`);
  } else {
    console.error(`Source file not found: ${file.src}`);
  }
}); 