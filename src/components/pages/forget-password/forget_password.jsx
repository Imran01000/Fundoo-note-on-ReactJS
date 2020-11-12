import React, { Component } from 'react'
import { 
    Button, Input, Card, Icon,
    TextField, Container
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './forget_password.scss'

class forget_password extends Component {
    render() {
        return (
            <Container className="main-forget">
            <Card className="form-forget">
                <Card className="form-head-forget">
                    <h4 className="fundoo-forget">Fundoo note</h4>
                </Card>
                <div className="text-forget">
                    <b>Forgot password</b><br/> 
                    <span>don't be worry much</span>
                </div>
                <div className="text-field-forget">
                    <div id="email-field-forget">
                        <TextField  
                            label="Enter your email"
                            size="small"
                            variant="outlined" /><br/>
                    </div>
                </div>
                <div className="buttons-forget">
                    <Link to="/registration">Create account</Link>
                    <Button variant="contained" onClick={()=> window.location.href="/resetPassword"}>Confirm</Button>
                </div>
            </Card>
        </Container>
        )
    }
}

export default forget_password
