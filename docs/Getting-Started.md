# Getting Started

Splatoon2.ink has an API avaliable. This API Client helps simplify the using the API and handles all the headaches. 

## Example Code

The code below shows how you could use the API Client in your app to get the current stages. 

```js
var splatoon2Api = require('splatoon2.ink-node-api-client'); // Get the API client

var stages = splatoon2Api.getCurrentStages(); // Gets the current stages from Splatoon2.ink

console.log(stages.ranked.mode); // Logs the current ranked mode
```   