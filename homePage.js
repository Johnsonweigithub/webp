import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('postArea'));


root.render(
    <h1> 123 </h1>,
    document.getElementById('postArea')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




/*

var CommentBox = React.createClass({
    render: function () {
        return (
            <div class="photo">123 </div>
        );
    }
});
ReactDOM.render(
    //<CommentBox />,
    <h1>cgu</h1>,
    document.getElementById('postArea')
);
*/
