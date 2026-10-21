// tags: represent by @
// sanity,smoke,regression,login,payment 

import {test,Page,chromium,Browser} from "@playwright/test"

test('title test @sanity', async({},)=>{
    console.log('title test');

});

test('url test @regression', async({},)=>{
    console.log('url test');

});

test('payment test @sanity @P1', async({},)=>{
    console.log('Payment test');

});

// PW 1.45 +onwards

test('home page test' ,{tag:['@home','@sanity']}, async({})=>{
    console.log('home page test');

});