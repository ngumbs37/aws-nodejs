// Load the SDK
const AWS = require('aws-sdk');

const axios = require('axios');
const bcrypt = require('bcrypt');
const fourRounds = 4;
const registerBody = {
    version: {
        release : "0",
        stage : "1"
    },
    "username": "nathaniel",
    "email": "nathaniel@gmail.com",
    "password":"poiuytrewq"
};

const loginBody = {
    version: {
        release : "0",
        stage : "1"
    },
    username: "nathaniel",
    password: "qofiuwefib"
};

const axiosPost = (url, body, headers = {})=>{
    axios.post(url, body, {headers : headers})
      .then(info => {
        logAxiosData(info);
              return info;
    }).catch(err => {
        logAxiosError(err);
    });
};

// simpler log object to be printed

const logAxiosError = (err) =>{
    const print = {
        status : err.response.status,
        statusText : err.response.statusText,
        responseBody : err.response.data,
        axiosConfig : {
            headers: err.response.config.headers,
            method : err.response.config.method,
            url: err.response.config.url,
            sentBody : JSON.parse(err.response.config.data)
        }
    };
    console.log(print);
};
const logAxiosData = (data) =>{
    const print = {
        status : data.status,
        statusText : data.statusText,
        responseHeaders : data.headers,
        responseBody : data.data,
        axiosConfig : {
            headers: data.config.headers,
            method : data.config.method,
            url: data.config.url,
            sentBody : JSON.parse(data.config.data)
        }
    };
    console.log(print);
};
// register
axiosPost('https://7tsfvh3bya.execute-api.us-east-1.amazonaws.com/dev/register',registerBody);

// login
// axiosPost("https://7tsfvh3bya.execute-api.us-east-1.amazonaws.com/dev/login",loginBody);