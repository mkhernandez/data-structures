//using fetch 
// fetch('https://swapi.dev/api/')
// .then((res) => {
//     console.log('RESOLVED!', res);
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log('ERROR!', e);
// });

// const url = 'https://swapi.dev/api/people/1/';
// const url2 = 'https://swapi.dev/api/people/2/';

//fetch in async function
// const loadStarWars = async () => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//         const score = document.getElementsByTagName("p");
//         console.log(data[0]);
//         score.innerHTML = data[0];
//     } catch (error) {
//         console.log('ERROR!',error);
//     }
// }

// loadStarWars();

//using axios
// axios.get(url)
// .then(res => {
//     console.log('RESPONSE: ', res);
// })
// .catch(e => console.log('ERROR!', e));

//using axios in async function
// const getStarWarsPerson = async () => {
//     try {
//         const res = await axios.get(url);
//         console.log(res.data);
//     } catch (e) {
//         console.log('ERROR: ', e);
//     }
// }

// const person = getStarWarsPerson();

//using axios with dad jokes api
const joke = document.querySelector('#jokes');
const dadJoke = document.querySelector('.dadJoke');

const addNewJoke = async () => {
        const jokeText = await getDadJoke();
        console.log(jokeText);
        const newLi = document.createElement('li');
        newLi.append(jokeText);
        joke.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
        } catch (e) {
            console.log('ERROR!', e);
        }
}

dadJoke.addEventListener('click', () => {
    addNewJoke();
});

// settled on using innerHTML for the entire div but I want to try
// breaking it up and see if it makes a difference in readability
// I still believe it can be done in a better way adding elements
// and/or adding text in elements that already exist. This file
// is for playing around