import React, { Component } from 'react'
import { 
    Button, Icon, Card, TextField,
    Container 
} from "@material-ui/core"
import { Link } from 'react-router-dom'
import './login.scss'

export class login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:null,
             password:null,
             errors:{
                 email:'',
                 password:'',
             }
        }
    }
    render() {
        return (
            <Container className="main-login">
                <Card className="form-login">
                    <Card className="form-head">
                        <h4 className="fundoo-text">Fundoo note</h4>
                    </Card>
                    <div className="text">
                        <b>SignIn</b><br/> 
                        <span>with your fundoo note</span>
                    </div>
                    <div className="text-field-login">
                        <div id="email-field">
                            <TextField 
                                error 
                                helperText="Incorrect entry."
                                label="Email"
                                type="text"
                                name="email"
                                size="small"
                                variant="outlined" /><br/>
                        </div>
                        <div id="password-field">
                            <TextField 
                                required
                                error
                                helperText="Incorrect entry." 
                                label="Password"
                                type="password"
                                name="password"
                                size="small"
                                variant="outlined" /><br/>
                                <Link to="/forgetPassword">Forget password?</Link>
                        </div>
                    </div>
                    <div className="buttons-login">
                        <Link to="/registration">Create account</Link>
                        <Button variant="contained">SignIn</Button>
                    </div>
                </Card>
            </Container>
        )
    }
}

export default login
