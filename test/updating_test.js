const MarioCharModel = require('../models/mariochar.js');
const assert = require('assert');

describe("Updating record(s)", function(){

    //create and save char
    let char;

    // runs before each test
    beforeEach( function(done){

        char = new MarioCharModel({
            name: 'Mario',
            weight: 20
        });

        char.save().then(function(){
            done();
        });
    });

    //create tests
    //test(1) using updating methods(functions)
    it("updates one record in db", function(done){
        //find char with name 'Mario' and update it with name 'Luigi'
        MarioCharModel.findOneAndUpdate( {name: 'Mario'} , {name:'Luigi'} ).then(function(){

            MarioCharModel.findOne( {_id: char._id } ).then(function(result){     //finds a char by id ( Luigi's id ) 
                assert( result.name === 'Luigi' );      
                done();
            });
        });
    });

    //test(2) using update operator
    it("increments the weight by 1 in all records", function(done){
        //{} denotes all records, $inc is update operator
        MarioCharModel.update( {}, { $inc : {weight: 1}} ).then( function() {
            
            //to check if the weight is incremented
            MarioCharModel.findOne( {name:'Mario'} ).then( function( record ) {
                assert(record.weight === 21);       //if weight of 'Mario' is 21, test passed else failed
                done();
            });
        });
    });
    
});