
const assert = require('assert');
const MarioCharModel = require('../models/mariochar.js');

//describe test
describe("Deleting record(s)", function(){

    let char;

    beforeEach( function(done){
        //creating char
        char = new MarioCharModel({
            name:'Mario'
        })
        //saving char to db
        char.save().then(function(){
            done();
        });

    });
    
    //create test
    it("deleting a record from db", function(done){
                    //findOneAndRemove() is deprecated
        MarioCharModel.findOneAndDelete( { name: 'Mario'} ).then( function(){   //removes first Char with name 'Mario'
                                                                                    
            MarioCharModel.findOne( { name: 'Mario'} ).then( function( result ){    //checks for char with name 'Mario' 
                                                                                    //in db if not found returns 
                assert( result === null );                                          //result as null
                done();
            }); 
        }); 
    });

    //NOTE: using '_id' might be more convenient than using 'name' to find and remove a record
});