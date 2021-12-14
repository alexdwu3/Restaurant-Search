// import axios, make request wwith it

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 724imDIDCISWfTDILnU9g33RCMsZca4n0fYZrdEhi4Mycj-m78Cgy7fME-ICU5E6aD7usQZa0jq6D1fI1zNFw4Y32BPomvsYTPPLT-rC_E0VYXC7nnLL9OOpkmmyYXYx'
    }
})

