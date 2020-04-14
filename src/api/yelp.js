import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 78fxxc5jon2aNjVV7yOndteY8_6iNoMxn13IybT-q7H2QmRc1bRHAYiNm3DK_a9XkObRQMYmmA2G7nBIKDENKvH3CeGTFEu5dPx0J2s6DQEwve5dDDukdxmqBlCTXnYx'
    }
});

