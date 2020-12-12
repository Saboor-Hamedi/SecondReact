import React from 'react'
import ReactDOM from 'react-dom'


const title = 'I love React'
const elemet = React.createElement('h1', {},title);
const MyBanner = () => { 
    return (
        <div className="banner-title">
             {elemet}
            <ReadMore />
          
         <Counter />

        </div>
    )
}
function ReadMore() { 
return (
        <div className="readmore">
            <a onClick={ ()=>Google()} target="__blank">Read More</a>
        </div>
    )
}

const Google = () => { 
    window.open('https://www.google.com')
}
// counter
function Counter() { 
    let [counter, setCounter] = React.useState(0);
    setTimeout(() => setCounter(counter +1), 1000);
    return (
        <div>
         <h1>{counter} </h1>  
        </div>
    )

}

export default MyBanner