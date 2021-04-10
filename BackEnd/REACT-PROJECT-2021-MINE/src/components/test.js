const axios = require('axios');
const fetch = require("node-fetch");
// const fetchData = () => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(data => {
//             console.log(data.data);
//         }).catch(err => {
//             console.log(err)
//         })
// }

const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);
}

// const fetchData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     console.log(data);
// }

fetchData();