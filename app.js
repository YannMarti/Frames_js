https://drive.google.com/file/d/1wfM1elF63KtwuSzekArKybVdBySBQ_Qj/view?usp=sharing

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
      <meta property="fc:frame:button:3:target" content="https://www.skillbuddy.io/"/>

    </head>
    <body>
      <h1>Your HTML content goes here</h1>
    </body>
    </html>
  `);
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
