const  mongoose = require('mongoose');

// ES6 promises
//mongoose.Promise = global.Promise;

//using before, beforeEach hooks

//connect to the db before tests run
before(function (done){
    mongoose.connect('mongodb://localhost/database1', { useNewUrlParser:true } );      //creates connection
    mongoose.connection.once('open', function() {       //to get notified when connection is created (like event listener)
       
        console.log('connection has been made, now continue...');
        done();                         //indicates end of connection process

    }).on('error', function(error) {
        console.log('connection error:', error);
    });    
});

//since we may store/save same data(instance of a model) in db everytime we run a test i.e. npm run test , we use 
//beforeEach to Drop collections/replications( of same data ) i.e. to keep unique data only

//drop or remove characters collection (Mario Character) before each tests
beforeEach(function(done){
    
    //drop collection of mariochars
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});





