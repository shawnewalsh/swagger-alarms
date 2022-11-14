# swagger-alarms

##Description
This is a demo of using swagger pointed to a super simple API for generating alerts for system administrators

##Install
1- Download folder
2- npm install
3- node index.js

##Swagger
go to http://localhost:3000/api-docs
to get to the swagger interface

##sample alert json object
{
    "id" : "1234",
    "subject": "Postgres out of disk space > 90%",
    "severity": "CRITICAL",
    "source": "Postgres Server"
}

##Roadmap
The idea behind this is to have a simple REST API that can be called by anything to generate alerts when something is wrong.
Add persistence / db storage for alerts
Add API to clear alerts
Display page for alerts that groups by source and severity
