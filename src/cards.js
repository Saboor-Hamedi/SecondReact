import React from 'react'
import ReactDOM from 'react-dom'
const Card1 = () => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="description">
            <h2>Lily</h2>
            <p>She is from Russia, she is the beautiest girl in the Russia </p>
            </div>
        </div>
    )
}
function Cards() {
    return (
        <div className="card-panel">
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
        </div>
    )
}
export default Cards