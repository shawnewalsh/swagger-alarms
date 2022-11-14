const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app     = express();

var parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const alerts =  [{
    "id" : "1234",
    "subject": "Postgres out of disk space > 90%",
    "severity": "CRITICAL",
    "source": "Postgres Server"
}];

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Alerts API',
            version: '1.0.1'
        }
    },
    apis: ['index.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
* @swagger
* /alerts:
*   get:
*     description: Get all alerts
*     responses:
*       200:
*         description: Success
*
*/
app.get('/alerts', (req,res) => {
    res.send(
        JSON.stringify(alerts)
    );
});

/**
* @swagger
* /alert:
*   post:
*     description: create an alert
*     parameters:
*     - name: subject
*       description: To post new alerts
*       in: body
*       required: true
*       type: string
*     responses:
*       200:
*         description: Success
*
*/
app.post('/alert', (req,res) => {
    const subject = req.body.subject;
    alerts.push(
        {
            "id" : req.body.id,
            "subject": req.body.subject,
            "severity": req.body.severity,
            "source": req.body.source
        }
    )
    res.send({ subject });
});

app.listen(3000, () => {
    console.log('Running on port 3000');
})