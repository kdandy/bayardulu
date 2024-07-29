const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, 'dummy.txt');
const encryptedFilePath = `${testFilePath}.bayardulu`;
const decryptedFilePath = `${testFilePath}.dec`;

// Buat file dummy untuk pengujian
fs.writeFileSync(testFilePath, 'Ini adalah file dummy untuk pengujian.');

// Log untuk debugging path
console.log(`Test file path: ${testFilePath}`);
console.log(`Encrypted file path: ${encryptedFilePath}`);
console.log(`Decrypted file path: ${decryptedFilePath}`);

// Encrypt file dummy
const encryptCommand = `node bin/bayardulu.js encrypt ${testFilePath} -x bayardulu`;
console.log(`Encrypt command: ${encryptCommand}`);

exec(encryptCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(`Encrypt Error: ${stderr}`);
    process.exit(1);
  } else {
    console.log(`Encrypt Output: ${stdout}`);
    
    // Decrypt file terenkripsi
    const decryptCommand = `node bin/bayardulu.js decrypt ${encryptedFilePath} -k N7wKWb5434FLD -o`;
    console.log(`Decrypt command: ${decryptCommand}`);

    exec(decryptCommand, (err, stdout, stderr) => {
      if (err) {
        console.error(`Decrypt Error: ${stderr}`);
        process.exit(1);
      } else {
        console.log(`Decrypt Output: ${stdout}`);
        
        // Baca konten file asli dan file hasil dekripsi
        const originalContent = fs.readFileSync(testFilePath, 'utf8');
        const decryptedContent = fs.readFileSync(testFilePath, 'utf8');

        // Verifikasi bahwa konten file asli dan file hasil dekripsi sama
        if (originalContent === decryptedContent) {
          console.log('Test passed: decrypted content matches original content');
          process.exit(0);
        } else {
          console.error('Test failed: decrypted content does not match original content');
          process.exit(1);
        }
      }
    });
  }
});