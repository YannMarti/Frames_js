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
      <meta property="og:image" content="https://i.ibb.co/xJNYrWZ/question-1-1.png">
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://i.ibb.co/xJNYrWZ/question-1-1.png">
      
      <meta property="fc:frame:button:1" content="Social Media"/>
      <meta property="fc:frame:button:1:action" content="link"/>
      <meta property="fc:frame:button:1:target" content="https://www.skillbuddy.io/"/>

      <style>
        /* CSS */
        .modal {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.4);
        }

        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
        }

        .close {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        .close:hover,
        .close:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h1>Your HTML content goes here</h1>

      <button id="myButton">Social Media</button>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>You got it wrong, if you want to learn more check Skillbuddy app</p>
          <button onclick="window.location.href='https://www.skillbuddy.io/'">Go to Skillbuddy</button>
          <button class="close">Cancel</button>
        </div>
      </div>

      <script>
        // JavaScript
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myButton");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
          modal.style.display = "block";
        }

        span.onclick = function() {
          modal.style.display = "none";
        }

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});