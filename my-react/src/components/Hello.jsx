import React from 'react'

export default function Hello (props) {
    console.log(props)
    return <h1>this is title of my First react {props.name}</h1>
}