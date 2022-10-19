const axios = require('axios')
let url = 'https://bypass.pm/bypass2?url=https://linkvertise.com/162827/megapack2243/1'
var link = await axios.get(url)
        .then(res => {
            ;
        //   console.log(res.data)
        }) 
console.log(link)