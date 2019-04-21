const assert = require('assert');
const Author = require('../models/author');
const mongoose = require('mongoose');

//describe tests
describe('Nesting records', function(){

    let david;  //declared globally

    //before each test
    beforeEach( function( done ){
        //drop collection 
        mongoose.connection.collections.authors.drop(function(){
            done();
        });

        //create and save instance 'david'
        david = new Author({
            name: 'David Leitch',
            age: 45,
            books:[                         
                { title:'John Wick', price:2000 }           // books -> sub-documents/ sub-records in the instance
            ]
        });
    });

    //create test(1)
    it('Saving sub-documents/ sub-records', function(done){

        david.save().then(function(record) {

            assert( record.books.length === 1);      //if books length is 1, test passed else failed.
            done();          
        });
    });

    //create test(2)
    it('Adding book to the (books) sub-documents/ sub-records', function( done ){

        david.save().then( function( record ){
            //add a book to books array, save it in db
            record.books.push( { title:'Deadpool 2', price:3000} )
            record.save().then(function() {
                
                Author.findOne( {name: 'David Leitch'} ).then( function( result ){

                    assert( result.books.length === 2);             
                    done();
                })
            });
        });
    });

});