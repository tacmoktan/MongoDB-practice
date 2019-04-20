const assert = require('assert');
const MarioCharModel = require('../models/mariochar');

//describe test
describe("Finding Record(s)", function(){
    
    //since beforeEach() in connection.js drops collection, we might not have any data in db to find currently.
    //so we create and save character/ data/ record before each testing
    let char; 
    beforeEach( function(done){
        
        char = new MarioCharModel({
            name:'Mario'
        });

        char.save().then(function(){
            done();
        });
    })

    //create test
    it("finding one record from db", function(done) {

        MarioCharModel.findOne( { name:'Mario' } ).then(function(result) {   //findOne() is attached to Model not instance
            assert( result.name === 'Mario');
            done();
        });

    });

    //create test with Object ID
    it("finding one record by Object ID from db", function(done){          //id is automatically assigned to each
                                                                        //record by mongoose
        MarioCharModel.findOne({ _id : char._id }).then( function( result ) { 
            assert( result._id.toString() ===  char._id.toString() );   //id is in Object form so convert it into string
            done();
        });
    });

});
