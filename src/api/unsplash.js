import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
                    'Client-ID 56c51c8ac9623859854a5266ffb34c2763048f4724442c8c1a6f2156580f236b' 
    }
});