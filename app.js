

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
      <meta property="og:image" content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.keyweo.com%2Fen%2Fblog%2Fhistory-google-logo%2F&psig=AOvVaw3T7yKrcBWUhF7qFydsyrae&ust=1708684077777000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDc4LDevoQDFQAAAAAdAAAAABAD">
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.keyweo.com%2Fen%2Fblog%2Fhistory-google-logo%2F&psig=AOvVaw3T7yKrcBWUhF7qFydsyrae&ust=1708684077777000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDc4LDevoQDFQAAAAAdAAAAABAD">
      
      <meta property="fc:frame:button:1" content="Social Media"/>
      <meta property="fc:frame:button:1:action" content="link"/>
      <meta property="fc:frame:button:1:target" content="https://www.skillbuddy.io/"/>
   

    
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
