
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
*/


function Login() {
    var accountInput = document.getElementById("accountInput").value;
    var passwordInput = document.getElementById("passwordInput").value;


    if (accountInput == "johnsonwei") {
        if (passwordInput == "j88888") {
            document.location.href = "homePage.html";
        }
        else document.getElementById("loginResult").innerHTML = "密碼錯誤";
    }
    else document.getElementById("loginResult").innerHTML = "查無帳號";


}



/*

const root = ReactDOM.createRoot(document.getElementById('postArea'));


root.render(
    <h1> 123 </h1>,
    document.getElementById('postArea')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
