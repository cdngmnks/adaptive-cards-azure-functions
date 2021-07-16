module.exports = async function (context, req) {

    const jsdom = require("jsdom");
    const dom = new jsdom.JSDOM;

    global.document = dom.window.document;
    global.window = dom.window;
    global.HTMLElement = dom.window.HTMLElement;        
    
    const AdaptiveCards = require("adaptivecards");

    try {

        const adaptiveCard = new AdaptiveCards.AdaptiveCard();

        adaptiveCard.parse(req.body);

        const renderedCard = adaptiveCard.render();

        context.res = {
            body: renderedCard.outerHTML
        }

    } catch (err) {
        context.res = {
            status: 500,
            body: err.stack
        }
    }
}