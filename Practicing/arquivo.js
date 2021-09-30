const axios = require('axios')

axios.get('https://www.google.com').then((result)=>{
    console.log(result.data)
})