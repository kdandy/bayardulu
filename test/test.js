const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, 'dummy.txt');
const encryptedFilePath = `${testFilePath}.bayardulu`;
const decryptedFilePath = `${testFilePath}.dec`;

fs.writeFileSync(testFilePath, 'Ini adalah file dummy untuk pengujian.');

exec(`node bin/bayardulu.js encrypt ${testFilePath} -x bayardulu`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Encrypt Error: ${stderr}`);
    process.exit(1);
  } else {
    console.log(`Encrypt Output: ${stdout}`);
    
    exec(`node bin/bayardulu.js decrypt ${encryptedFilePath} -k N7wKWb5434FLD -o`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Decrypt Error: ${stderr}`);
        process.exit(1);
      } else {
        console.log(`Decrypt Output: ${stdout}`);
        
        const originalContent = fs.readFileSync(testFilePath, 'utf8');
        const decryptedContent = fs.readFileSync(testFilePath, 'utf8');
        
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