

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=600, height=400 initial-scale=1.0">
      <meta property="og:image" content="https://i.ibb.co/xJNYrWZ/question-1-1.png">
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://i.ibb.co/xJNYrWZ/question-1-1.png">
      
   
      <meta property="fc:frame:button:2" content="Decentralized Social Network"/>
      <meta property="fc:frame:button:2:action" content="link"/>
      <meta property="fc:frame:button:2:target" content="https://www.skillbuddy.io/"/>

   
      <meta property="fc:frame:button:3" content="Smart Contract"/>
      <meta property="fc:frame:button:3:action" content="link"/>
      <meta property="fc:frame:button:3:target" content="https://www.skillbuddy.io/"/>

  
      <meta property="fc:frame:button:4" content="DeFI"/>
      <meta property="fc:frame:button:4:action" content="link"/>
      <meta property="fc:frame:button:4:target" content="https://www.skillbuddy.io/"/>

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
