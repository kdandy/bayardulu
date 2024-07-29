const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, 'dummy.txt');
const encryptedFilePath = `${testFilePath}.enc`;
const decryptedFilePath = `${testFilePath}.dec`;

// Buat file dummy untuk pengujian
fs.writeFileSync(testFilePath, 'Ini adalah file dummy untuk pengujian.');

exec(`node bin/bayardulu.js encrypt ${testFilePath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Encrypt Error: ${stderr}`);
    process.exit(1);
  } else {
    console.log(`Encrypt Output: ${stdout}`);
    exec(`node bin/bayardulu.js decrypt ${encryptedFilePath}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Decrypt Error: ${stderr}`);
        process.exit(1);
      } else {
        console.log(`Decrypt Output: ${stdout}`);
        const originalContent = fs.readFileSync(testFilePath, 'utf8');
        const decryptedContent = fs.readFileSync(decryptedFilePath, 'utf8');
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