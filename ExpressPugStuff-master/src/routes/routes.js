var express = require('express');
var fs = require('fs');
var router = express.Router();
var fileData = JSON.parse(fs.readFileSync("src/data/merch.json", "utf8"));

router.route("/").get(
    function (req, res) {
        // res.sendFile(__dirname + "/views/index.html");
        var data = {
            title: "Mach 12 Merch"
        };
        res.render("index", data);
    }
);

router.route("/src/views/sendOrder.pug").get(
    function (req, res) {
        // res.sendFile(__dirname + "/views/index.html");
        var data = {
            title: "Order Received"
        };
        res.render("sendOrder", data);
    }
);


router.route("/views/microwave.pug").get(
    function (req, res) {
        var file = JSON.parse(fs.readFileSync("src/data/merch.json", "utf8"));
        // res.sendFile(__dirname + "/views/index.html");
      //  console.log(file.microwave.length);
        var data = {
            title: "Mach 12 Microwave",
            fileData: file
        };
        res.render("microwave", data);
    }
);

router.route("/views/dryer.pug").get(
    function (req, res) {
       // var fileData = JSON.parse(fs.readFileSync("/src/data/merch.json", "utf8"));
        // res.sendFile(__dirname + "/views/index.html");
        var data = {
            title: "Mach 12 Dryer",
            fileData: JSON.parse(fs.readFileSync("src/data/merch.json", "utf8"))
        };
        res.render("dryer", data);
    }
);

router.route("/views/toasterOven.pug").get(
    function (req, res) {
       // var fileData = JSON.parse(fs.readFileSync("/src/data/merch.json", "utf8"));
        // res.sendFile(__dirname + "/views/index.html");
        var data = {
            title: "Mach 12 ToasterOvens",
            fileData: JSON.parse(fs.readFileSync("src/data/merch.json", "utf8"))
        };
        res.render("toasterOven", data);
    }
);

router.route("/goToItem").post(
    function (res, req) {
        var fileData = JSON.parse(fs.readFileSync("src/data/merch.json", "utf8"));
        var data = {
            title: "Mach 12 Microwave",
            fileData: JSON.parse(fs.readFileSync("src/data/merch.json", "utf8"))
        };

    }
    
    //  res.render()
);

router.route("/src/views/contactUs.pug").get(
    function (req, res) {
        // TODO: Get model from database
        // var model = repo.getContactUsData();

        var model = {
            title: "Contact Mach 12 Merch",
            contactData: [
                {
                    name: "Susan",
                    phone: "555-555-5555",
                    email: "machsue@mach12merch.com"
                },
                {
                    name: "Pete",
                    phone: "555-555-6666",
                    email: "machpete@mach12merch.com"
                },
                {
                    name: "Da'Quan",
                    phone: "555-555-6366",
                    email: "machduck@mach12merch.com"
                }
            ]
        };
        res.render("contactUs", model);
    }
);

module.exports = router;