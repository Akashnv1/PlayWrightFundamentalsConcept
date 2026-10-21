import {test} from "@playwright/test"
// Run Once before all the tests in this file
test.beforeAll(async ()=>{
    console.log('Before All--Connect to the DB');
});

// Run before each test
test.beforeEach(async ()=>{
    console.log('Before each--Login to the app');
});

// Run after each test
test.afterEach(async ()=>{
    console.log('after each--log out to the app');
});

// Run after all the test
// Run before each test
test.afterAll(async ()=>{
    console.log('After all --Disconnect with DB');
});

test('title test', async({},)=>{
    console.log('title test');

});

test('url test ', async({},)=>{
    console.log('url test');

});