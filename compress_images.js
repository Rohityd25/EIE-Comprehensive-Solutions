const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/images');

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  
  files.forEach(async (file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const sizeMB = stats.size / (1024 * 1024);
    
    // Compress anything over 0.5 MB
    if (sizeMB > 0.5 && /\.(png|jpg|jpeg)$/i.test(file)) {
      console.log(`Compressing ${file} (${sizeMB.toFixed(2)} MB)...`);
      const tempPath = path.join(dir, 'temp_' + file);
      
      try {
        if (/\.png$/i.test(file)) {
          await sharp(filePath, { limitInputPixels: false }).resize(1200, 1200, { fit: 'inside', withoutEnlargement: true }).png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
        } else {
          await sharp(filePath, { limitInputPixels: false }).resize(1200, 1200, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(tempPath);
        }
        
        // Replace original with compressed
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        console.log(`✅ ${file} reduced to ${(newStats.size / (1024 * 1024)).toFixed(2)} MB`);
      } catch (e) {
        console.error(`Failed to compress ${file}:`, e);
      }
    }
  });
});
