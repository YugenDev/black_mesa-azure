import ReactDOM from "react-dom"
import React, { Component } from 'react'

const modalRoot=document.getElementById("modal")

export default class Portal extends Component {
    constructor(){
        super()
        this.el=document.createElement("div")
    }

    componentDidMount=()=>{
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount=()=>{
        modalRoot.removeChild(this.el)
    }

    render(){
        const{children}=this.props
        return ReactDOM.createPortal(children, this.el)
    }
}