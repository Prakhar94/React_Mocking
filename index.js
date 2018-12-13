const axios  = require('axios');
module.exports = {
    getProject(username){
        return axios
            .get('https://api.github.com/users/'+username)
            .then((response)=>{
                // console.log(response.data)
                return response;
            })
            .catch((error)=>{
                console.log(error);
            })  
    }
};