const fs = require('fs');
const { JSDOM } = require('jsdom');

const rooms = ['A', 'B', 'C', 'D', 'E', 'F'];

console.log('Starting schedule extraction...\n');

rooms.forEach(room => {
    const tempFile = `room${room}_temp.html`;
    const targetFile = `room${room}_en.html`;

    console.log(`Processing Room ${room}...`);

    try {
        // Check if temp file exists
        if (!fs.existsSync(tempFile)) {
            console.log(`  ⚠️  Temp file not found: ${tempFile}`);
            return;
        }

        // Read the downloaded HTML
        const tempHtml = fs.readFileSync(tempFile, 'utf8');
        const tempDom = new JSDOM(tempHtml);
        const tempDoc = tempDom.window.document;

        // Extract the container content
        const newContainer = tempDoc.querySelector('.container');
        if (!newContainer) {
            console.log(`  ⚠️  .container not found in ${tempFile}`);
            return;
        }

        // Read the existing target file
        if (!fs.existsSync(targetFile)) {
            console.log(`  ⚠️  Target file not found: ${targetFile}`);
            return;
        }

        const existingHtml = fs.readFileSync(targetFile, 'utf8');
        const existingDom = new JSDOM(existingHtml);
        const existingDoc = existingDom.window.document;

        // Replace the container content
        const existingContainer = existingDoc.querySelector('.container');
        if (!existingContainer) {
            console.log(`  ⚠️  .container not found in ${targetFile}`);
            return;
        }

        // Replace innerHTML while preserving the outer structure
        existingContainer.innerHTML = newContainer.innerHTML;

        // Write back to file
        fs.writeFileSync(targetFile, `<!DOCTYPE html>\n${existingDoc.documentElement.outerHTML}`, 'utf8');

        console.log(`  ✅ Room ${room} updated successfully`);

    } catch (error) {
        console.error(`  ❌ Error processing Room ${room}:`, error.message);
    }
});

console.log('\n✅ Schedule extraction completed');
