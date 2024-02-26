const express = require('express');
const app = express();
const port = 3000;

let rewardClaimed = false;

app.get('/', (req, res) => {
    let html = '';

    if (rewardClaimed) {
        // If reward is claimed, show a message and two buttons
        html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <!-- Your head content here -->
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:image" content="https://i.ibb.co/y4x0KnH/great-job-image.png">
                <meta property="fc:frame" content="vNext">
                <meta property="fc:frame:image" content="https://drive.google.com/file/d/1wfM1elF63KtwuSzekArKybVdBySBQ_Qj/view?usp=sharing">
                <meta property="fc:frame:button:1" content="Collect"/>
                <meta property="fc:frame:button:1:action" content="link"/>
                <meta property="fc:frame:button:1:target" content="https://www.example.com/collect"/>
                <meta property="fc:frame:button:2" content="Cancel"/>
                <meta property="fc:frame:button:2:action" content="link"/>
                <meta property="fc:frame:button:2:target" content="https://www.example.com/cancel"/>
            </head>
            <body>
                <h1>Great job! You found the correct answer.</h1>
            </body>
            </html>
        `;
    } else {
        // If reward is not claimed, show the initial content
        html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <!-- Your head content here -->
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:image" content="https://i.ibb.co/y4x0KnH/question-1.png">
                <meta property="fc:frame" content="vNext">
                <meta property="fc:frame:image" content="https://drive.google.com/file/d/1wfM1elF63KtwuSzekArKybVdBySBQ_Qj/view?usp=sharing">
                <meta property="fc:frame:button:1" content="Social Media"/>
                <meta property="fc:frame:button:1:action" content="link"/>
                <meta property="fc:frame:button:1:target" content="https://www.skillbuddy.io/"/>
                <meta property="fc:frame:button:2" content="Decentralized Social Network"/>
                <meta property="fc:frame:button:2:action" content="link"/>
                <meta property="fc:frame:button:2:target" content="https://www.skillbuddy.io/"/>
                <meta property="fc:frame:button:3" content="Smart Contract"/>
                <meta property="fc:frame:button:3:action" content="link"/>
                <meta property="fc:frame:button:3:target" content="https://www.skillbuddy.io"/>
            </head>
            <body>
                <h1>Your HTML content goes here</h1>
            </body>
            </html>
        `;
    }

    res.send(html);
});

// Handle the first button click
app.get('/claim-reward', (req, res) => {
    // Set the rewardClaimed flag to true
    rewardClaimed = true;
    // Redirect back to the main route
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
