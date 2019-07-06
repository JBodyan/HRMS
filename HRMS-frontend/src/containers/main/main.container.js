import React, {Component} from 'react'

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Email: '',
            UserName: '',
            Password: '',
            PasswordConfirm: '',
        }
        this.inputChange = this.inputChange.bind(this)
    }

    inputChange(e) {
        const {value, name} = e.target
        console.log(value, name)
        this.setState({
            [name]: value,
        })
    }

    sendData = async () => {
        const url = 'http://localhost:60357/api/Authentication/Register'
        const settings = {
            method:'POST',
            body:JSON.stringify(this.state),
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
        console.log(settings)
        const data  = await fetch(url, settings)
        console.log(data)
        const response = await data.json()
        console.log(response)
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <input placeholder={'email'} name={'Email'} onChange={this.inputChange}/>
                <input placeholder={'username'} name={'Username'} onChange={this.inputChange}/>
                <input placeholder={'password'} name={'Password'} onChange={this.inputChange}/>
                <input placeholder={'confirm password'} name={'PasswordConfirm'} onChange={this.inputChange}/>
                <button onClick={this.sendData} >
                    Click
                </button>
            </div>
        )
    }
}