const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, 'dummy.txt');
const encryptedFilePath = `${testFilePath}.bayardulu`;
const decryptedFilePath = `${testFilePath}.dec`;

// Create dummy file for testing
fs.writeFileSync(testFilePath, 'Ini adalah file dummy untuk pengujian.');

// Log paths for debugging
console.log(`Test file path: ${testFilePath}`);
console.log(`Encrypted file path: ${encryptedFilePath}`);
console.log(`Decrypted file path: ${decryptedFilePath}`);

// Encrypt dummy file
const encryptCommand = `node bin/bayardulu.js encrypt ${testFilePath} -x bayardulu`;
console.log(`Encrypt command: ${encryptCommand}`);

exec(encryptCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(`Encrypt Error: ${stderr}`);
    process.exit(1);
  } else {
    console.log(`Encrypt Output: ${stdout}`);

    // Check if encrypted file was created
    if (!fs.existsSync(encryptedFilePath)) {
      console.error(`Encrypted file was not created: ${encryptedFilePath}`);
      process.exit(1);
    }

    // Decrypt the encrypted file
    const decryptCommand = `node bin/bayardulu.js decrypt ${encryptedFilePath} -k N7wKWb5434FLD -o ${decryptedFilePath}`;
    console.log(`Decrypt command: ${decryptCommand}`);

    exec(decryptCommand, (err, stdout, stderr) => {
      if (err) {
        console.error(`Decrypt Error: ${stderr}`);
        process.exit(1);
      } else {
        console.log(`Decrypt Output: ${stdout}`);

        // Check if decrypted file was created
        if (!fs.existsSync(decryptedFilePath)) {
          console.error(`Decrypted file was not created: ${decryptedFilePath}`);
          process.exit(1);
        }

        // Read contents of the original and decrypted files
        const originalContent = fs.readFileSync(testFilePath, 'utf8');
        const decryptedContent = fs.readFileSync(decryptedFilePath, 'utf8');

        // Verify that the original and decrypted contents are the same
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