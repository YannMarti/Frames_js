

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:image" content="https://i.ibb.co/KxN6kPW/skillbuddy-canva-1.png">
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://i.ibb.co/KxN6kPW/skillbuddy-canva-1.png">
      
      <meta property="fc:frame:button:1" content="Subscribe"/>
      <meta property="fc:frame:button:1:action" content="link"/>
      <meta property="fc:frame:button:1:target" content="https://warpcast.com/skillbuddy"/>

    </head>
    <body>
      <h1>Your HTML content goes here</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
