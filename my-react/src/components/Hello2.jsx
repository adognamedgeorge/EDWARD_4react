import React from 'react'

export default class Hello2 extends React.Component {
    constructor (p) {
        super (p)
        console.log(p.name)
        this.state = {
            msg: 'what the fuck',
            info: 'fuck you'
        }
    }
    render () {
        return <div>
            <h2>this is h2 {this.state.msg}</h2>
        </div>
    }
}