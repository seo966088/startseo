function makeBacklinks() {
    const domain = document.getElementById("domain").value;
    const websites = document.getElementById("websites").value.split(",");
    const interval = parseInt(document.getElementById("interval").value, 10) * 60 * 1000; // Convert minutes to milliseconds

    // Function to create backlink on a single website
    async function createBacklink(website) {
        // Implement your Puppeteer logic to create backlink on the website.
        // ...

        // Simulate a successful backlink creation (replace this with actual Puppeteer logic).
        const isSuccess = true;
        return isSuccess;
    }

    async function processWebsites() {
        for (const website of websites) {
            const isSuccess = await createBacklink(website.trim());

            if (isSuccess) {
                document.getElementById("progress").innerText = `Backlink created on ${website}`;
            } else {
                document.getElementById("progress").innerText = `Failed to create backlink on ${website}`;
            }

            // Wait for the specified interval before processing the next website.
            await new Promise(resolve => setTimeout(resolve, interval));
        }

        document.getElementById("result").innerText = "Backlink creation process completed.";
    }

    processWebsites();
}
