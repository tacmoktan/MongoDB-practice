//no need to require 'mocha'

const assert = require('assert');           //loads assert function
const MarioCharModel = require('../models/mariochar');

//describe tests
describe("Saving record(s)", function() {

    //create tests 
    it("saving a record to database", function(done) {      //it block  
                       
        //creates instance of MarioCharModel i.e. a new character
        let char =  new MarioCharModel({
            name:'Mario'
        });

        //saves char to db, .save() is asynchronous(returns promise), so assert() is used after char is saved. 
        //assert() takes boolean arg to confirm passing or failing of test .i.e. true = pass, false = fail

        char.save().then( function() {
            assert( char.isNew === false );     // char.isNew returns false if char is already saved to db. 
                                                // i.e. when char isn't new
            done();                             // indicates saving process is complete
        });

    });

    
});