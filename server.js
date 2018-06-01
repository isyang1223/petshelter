var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var multer = require('multer');




// var fileRoutes = require('./routes/file')
var mongoose = require('mongoose');
var app = express();
app.use(express.static(path.join(__dirname, '/angularApp/dist')));
app.use(bodyParser.json());




// app.use('/file', fileRoutes);




mongoose.connect('mongodb://localhost/beltexam')
mongoose.Promise = global.Promise;








var PetSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name needs to be at least 3 characters"], minlength: [3, "Name needs to be at least 3 characters"], unique: [true, "Invalid name"]},
    type: { type: String, required: [true, "Type needs to be at least 3 characters"], minlength: [3, "Type needs to be at least 3 characters"] },
    desc: { type: String, required: [true, "Description needs to be at least 3 characters"], minlength: [3, "Description needs to be at least 3 characters"] },
    skill1: { type: String, default: "" },
    skill2: { type: String, default: "" },
    skill3: { type: String, default: "" },
    like: {type: Number, default: 0},
    profileImage: { type: String }
    

},
    { timestamps: true });

mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'angularApp/src/assets/upload')
    },
    filename: function (req, file, cb) {
        cb(null,  Date.now() + file.fieldname + file.originalname)
    }
});

var fileFilter = (req,file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {    
        cb(null, false);

    }


}


var upload = multer({ storage: storage}).single('file');


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
  
    next();
});




app.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        console.log('*************at upload server*************')
        if (err) {
            res.json({message: "error"})
        } 
        console.log("ITS UPLOADED")
        return res.json({ message: "Success image uploaded", originalname:req.file.originalname, uploadname:req.file.filename })
    
        // Everything went fine
    })
})









app.post('/new', function (req, res) {
    
    console.log("POST DATA", req.body);
    var pet = new Pet();
    pet.name = req.body.name;
    pet.type = req.body.type;
    pet.desc = req.body.desc;
    pet.skill1 = req.body.skill1;
    pet.skill2 = req.body.skill2;
    pet.skill3 = req.body.skill3;
    pet.like = 0
    pet.profileImage = req.body.profileImage
   

    
   

    pet.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log("12425t3tsagfasd", pet.errors);
            // respond with JSON

            res.json({ message: "Error", error: pet.errors })

        }

        else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a pet!');
            res.json({ message: "Success", data: pet })
        }
    })
})




app.get('/pets', function (req, res) {
    Pet.find({}, function (err, pets) {
        if (err) {
            
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {
            // respond with JSON
            console.log(pets)
            res.json({ message: "Success", data: pets })
        }
    })
})


app.put('/pets/edit/:id', function (req, res) {

    Pet.findOne({ _id: req.params.id }, function (err, pet) {
        if (pet) {
            pet.name = req.body.name;
            pet.type = req.body.type;
            pet.desc = req.body.desc;
            pet.skill1 = req.body.skill1;
            pet.skill2 = req.body.skill2;
            pet.skill3 = req.body.skill3;
            pet.like = req.body.like


            pet.save(function (err) {

                if (err) {
                    console.log("Returned error", err);

                    // respond with JSON
                    res.json({ message: "Error", error: pet.errors })
                }
                else {
                    // respond with JSON
                    console.log("SAVVVVEEEEEEEED");
                    res.json({ message: "Success", data: pet })
                }
            })
        }
    })

})

app.put('/pets/up/:pid', function (req, res) {
    console.log("POST DATA", req.params.pid);
    console.log("POST DATA", req.body._id);
    Pet.findOne({ _id: req.body._id }, function (err, pet) {
        console.log("it worked1")
        pet.like
        if (req.params.pid == pet._id) {
            pet.like += 1
            console.log("it worked2")
            
            }
        
        pet.save(function (err) {

            if (err) {
                console.log("Returned error", err);

                // respond with JSON
                res.json({ message: "Error", error: pet.errors })
            }
            else {
                // respond with JSON
                console.log("voted UP!!!");
                res.json({ message: "Success"})
            }
        })

    })

})


app.get('/pets/:id', function (req, res) {
    console.log("POST DATA", req.params.id);
    Pet.findOne({ _id: req.params.id }, function (err, pet) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {


            // respond with JSON
            console.log('successfully grab a pet!');
            res.json({ message: "Success", data: pet })


        }
    })
})

app.delete('/pets/remove/:id', function (req, res) {
    console.log("POST DATA", req.params.id);
    Pet.remove({ _id: req.params.id }, function (err) {


        // if there is an error console.log that something went wrong!
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })

        }
        else { // else console.log that we did well and then redirect to the root route

            console.log('successfully removed a pet!');
            res.json({ message: "Success" })
        }
    })
})



app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularApp/dist/index.html"))
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})

module.exports = app;