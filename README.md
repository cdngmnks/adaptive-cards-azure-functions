# Adaptive Cards - Azure Functions

## adaptiveCardRenderer

Funtion returning an Adaptive Card rendered as HTML, using the [Adaptive Card JavaScript SDK](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/getting-started).

example request:
```javascript
{
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.0",
    "hideOriginalBody": true,
    "body": [
        {
            "type": "TextBlock",
            "text": "Hello World!",
            "wrap": true
        }
    ]
}
```

example response:
```html
<div class="ac-container ac-adaptiveCard" style="display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; flex: 0 0 auto; padding: 20px 20px 20px 20px; margin: 0px 0px 0px 0px; background-color: rgb(255, 255, 255); border: 1px solid #ffffff;" tabindex="0">
  <div class="ac-textBlock" style="overflow: hidden; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; color: rgb(51, 51, 51); font-weight: 400; text-align: left; line-height: 18.62px; word-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;">
  </div>
</div>
```

## adaptiveCardTemplating

Function expanding a template with data, using the [Adaptive Card Templating SDK](https://docs.microsoft.com/en-us/adaptive-cards/templating/sdk#javascript).

example request:
```javascript
{
    "template" : {
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
            {
                "type": "TextBlock",
                "text": "Hello ${name}!"
            }
        ]
    },
    "data" : {
        "name" : "World"
    }
}
```

example response:
```javascript
{
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "Hello World!"
    }
  ]
}
```

# References
* [Adaptive Cards](https://adaptivecards.io/)
* [Adaptive Card JavaScript SDK](https://docs.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/getting-started)
* [Adaptive Card Templating SDK](https://docs.microsoft.com/en-us/adaptive-cards/templating/sdk#javascript)
* [Create JavaScript function in Azure using VS Code](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node)
* [Azure Functions JavaScript developer guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node)

# Issues
To view or log issues, see [issues](https://github.com/cdngmnks/adaptive-cards-renderer-azure-function/issues).

# License
Copyright (c) codingmonkeys doo. All Rights Reserved. Licensed under the [MIT license](https://github.com/cdngmnks/adaptive-cards-renderer-azure-function/blob/master/LICENSE).
