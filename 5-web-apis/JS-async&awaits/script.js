function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location === "Google") {
            resolve("Google says hi");
        } else {
            reject("We can only talk to Google");
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`);
    });
}


/* normal way to consume the promise */
// makeRequest("Google").then((response) => {
//     console.log("Response received");
//     return processRequest(response);
// }).then((processedResponse) => {
//     console.log(processedResponse);
// }).catch((err) => {
//     console.log(err);
// }
// );


// async await way to consume the promise
async function doWork() {
    try {
        const response = await makeRequest("Google");  // await will wait for the promise to resolve, during this time, JS can run other code outside of this function
        console.log("Response received");  // this line will run after the promise has resolved
        const processedResponse = await processRequest(response);  // await will wait for the promise to resolve, during this time, JS can run other code outside of this function
        console.log(processedResponse);  // this line will run after the promise has resolved
    } catch (err) {
        console.log(err);
    }
}

doWork();  // this will run the async function