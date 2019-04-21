# Steps to install and run MongoDB

### 1.  Install **MongoDB**  
* with version that is compatible with your OS.  
[Download here](https://www.mongodb.com/)

### 2. Create database directory
* on the root of C:drive using cmd or manually.
```
c: 
md data/db
```

### 3. Start MongoDB Database
* Make sure that the *server version* matches with the one installed.
* locate **data** folder created above in cmd. 
* Then enter following command to initialize/run database:

For 64 bit OS and above:
```
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
```
For 32 bit OS:
```
"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --storageEngine=mmapv1 --dbpath="C:\data\db"
```

For More Details: [MongoDB Documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### 4. Start Project
* initialize npm. "`--yes`" answers all the questions with default answers.
```
npm init --yes
```
* install mongoose (adds dependencies to `package.json`)
```
npm install mongoose
```
* **About Mongoose**: It is installed in Node Server. It provides methods that help us to communicate with MongoDB.

### 5. Models and Collections
* Model is smthg similar to creating a table in relational database.  
* **Steps**:
    1. create **models** folder in root directory.
    2. create a `someModel.js` within the folder.  
For eg. look for `models/mariochar.js` file. 

### 6. Mocha Testing
* a testing framework to test CRUD operations in db.
```
npm install mocha --save
```  
* **Steps**
    1. In `package.json` , assign **mocha** (value) to the **test** (key).
    2. create a **test** folder in root directory.
    3. Within **test** folder, create a `connection.js` file to connect with mongodb (database) before running tests.  
    4. To run test, locate root directory and enter following command:
```
npm run test
```  
* For e.g. look for `test/connection.js` file.  
**NOTE:** All the `.js` files within **test** folder will run at once. However, tests created will only run after creating connection with db. ( because of the hooks used like before, beforeEach in `connection.js` ).

### 7. Robomongo (Rob 3T)
* simple tool with GUI to visually represent the database created with mongodb.
* only supports 64 bit and later system.

### 8. Saving Records
* `<modelInstanceName>.save()` method is used to save a record (instance of a model).  
* This method is asynchronous so it returns promise ( future data ).
* Also we load `assert` function that takes *boolean* argument to confirm failing or passing of test. i.e. true = pass, false = fail.  
For e.g. look for `test/saving_test.js` file. 

### 9. Dropping a Collection
* Dropping collection refers to dropping the same replicated data from the model.
* Same data/record can be stored separately in mongodb because mongodb automatically provides an ObjectID to each record.
* So inorder to only have unique & non-redundant data in db, we **drop collection**.  
For e.g. look for `beforeEach()` method in `test/connection.js` file.


### 10. Finding Records (with field name or id)
* Methods used to find records:  
    * `<modelInstanceName>.find()` : finds a record.  
    * `<modelName>.find()`         : gets all records. 
    * `<modelName>.findOne()`      : gets first record out of several which matches criteria.

* **Field name:** ( name, weight or any other field ) in the model.
* **Object ID:** ( _id ) is the default objectID assigned to each record. Can be viewed with tool like RoboMongo.  
For e.g. look for `test/finding_test.js` file.

### 11. Deleting Records
* Methods used to delete records:
    * `<modelInstanceName>.remove()`    : removes a record.
    * `<modelName>.remove()`            : removes all records.    
    * `<modelName>.findOneAndRemove()`  : removes first record out of several which matches criteria.
* **Note:** Some methods might be deprecated so use the methods suggested in command console.  
Steps  
  1. Create and save an instance in the db. (since, initially db might be empty by dropping collection)
  2. Use a method to find and remove the instance.
  3. To assure if instance has been deleted, use a method to find the deleted instance in db. If promise/ record/ data returned equals to null then we passed the test.  
  For e.g. look for `test/deleting_test.js` file.

### 12. Updating Records & Update operators
* Methods used to update Records:
    * `<modelInstanceName>.update()`    : updates a record.
    * `<modelName>.update()`            : updates all records.
    * `<modelName>.findOneAndUpdate()`  : updates first record out of several which matches criteria.

1. **Updating Records**
* updates records using only updating methods.

2. **Update Operators**
* updates all records by using updating methods along with update operator.
* [More update operators](https://docs.mongodb.com/manual/reference/operator/update/)  
Steps  
   1. Create and save an instance in db.
   2. Use a method to update the instance.
   3. To assure if instance has been updated, use a method to find that instance. If promise returned has the field value updated we pass the test.  
   For e.g. look for `test/updating_test.js` file.

### 13. 

### 14. 
