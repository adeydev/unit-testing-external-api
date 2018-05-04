
Unit testing an external API using Node, Mocha and Chai.


## Run unit tests

Run all tests stored within "test" folder:

    npm test

The actual test command is stored within package.json:

    "scripts": {
    
    "test": "mocha --recursive --timeout 15000"
    
    },

You might need to modify the timeout parameter depending on the speed of your API call.

## Create new unit tests

Add a new test file within the "tests" folder. Feel free to use UnitTest1.js as a starter, although it is by no means a model example.

