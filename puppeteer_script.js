const puppeteer = require('puppeteer');

async function createBacklink(domain, websiteUrl) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    try {
        await page.goto(websiteUrl, { waitUntil: 'networkidle0' });

        // Implement your logic to fill the form and submit backlink here.
        // For demonstration purposes, clicking a hypothetical submit button with the ID "submitBtn":
        // await page.click('#submitBtn');

        // Simulate a successful backlink creation.
        console.log(`Backlink created successfully on ${websiteUrl}`);
        await browser.close();
        return true;
    } catch (error) {
        // Handle errors such as captchas, form not found, or any other issues.
        console.error(`Failed to create backlink on ${websiteUrl}: ${error.message}`);
        await browser.close();
        return false;
    }
}

// Usage example:
const domain = 'example.com'; // Replace with the user's domain.
const websites = [
    'https://example-website-1.com',
    'https://example-website-2.com',
    // Add more websites here.
];

async function createBacklinks() {
    for (const website of websites) {
        const isSuccess = await createBacklink(domain, website);
        if (isSuccess) {
            // Handle successful backlink creation, e.g., save to a database or display a success message.
        } else {
            // Handle failed backlink creation, e.g., retry, skip, or log the error.
        }

        // Delay for a specified time (e.g., 10 minutes) before processing the next website.
        await new Promise(resolve => setTimeout(resolve, 10 * 60 * 1000)); // 10 minutes delay
    }
}

createBacklinks();
