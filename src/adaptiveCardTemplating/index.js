module.exports = async function (context, req) {

    const ACData = require("adaptivecards-templating");

    try {
        const template = new ACData.Template(req.body.template);
        const card = template.expand({
            $root: req.body.data
        });

        context.res = {
            body: card
        }

    } catch (err) {
        context.res = {
            status: 500,
            body: err.stack
        }
    }
}