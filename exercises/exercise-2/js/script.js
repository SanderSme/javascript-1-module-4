//1. create a variable and assign the endpoint url to it, call it randomUserURL
// const randomUserURL = "https://randomuser.me/api/"
// //2. select the wrapper-div
// const wrapper = document.querySelector(".wrapper")
// //3. make the API call

// fetch(randomUserURL)
// .then(function (response){
//    console.log(response.json());
// })
// .catch(function (error){
//     console.log(error);
// })

const randomUserURL = "https://randomuser.me/api/";

const wrapperDiv = document.querySelector(".wrapper");

fetch(randomUserURL)
.then(function (response){
    return response.json();
})
.then(function (jsonData){
    const results = jsonData.results;
    for(let i = 0; i < results.length; i++){
        const firstName = results[i].name.first;
        const lastName = results[i].name.last;
        const personImg = results[i].picture.large;
        wrapperDiv.innerHTML += `
        <h1>${firstName} ${lastName}</h1>
        <img src="${personImg}" alt="the name of the person is ${firstName}"/>
        `
    }
})
.catch(function(error){
    console.log(error);
})