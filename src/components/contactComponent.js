import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            designation: '',
            companyName: '',
            companyEmail: '',
            contactNumber: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const Name = event.target.name;
        const Value = event.target.value;
        if(Name === 'name'){
            this.setState({name : Value});
        }
        else if(Name === 'designation'){
            this.setState({designation: Value});
        }
        else if(Name === 'companyName'){
            this.setState({companyName : Value});
        }
        else if(Name === 'companyEmail'){
            this.setState({companyEmail : Value});
        }
        else if(Name === 'contactNumber'){
            this.setState({contactNumber : Value})
        }
        event.preventDefault();
    }

    handleSubmit(event){
        event.preventDefault();
        const message = {
            name: this.state.name,
            designation: this.state.designation,
            companyName: this.state.companyName,
            companyEmail: this.state.companyEmail,
            contactNumber: this.state.contactNumber,
        };

        fetch('http://localhost:3001/postCompanyQuery',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        })
        .then(response => response.json())
        .then(response => {
            if(response.status === 400){
                alert('Error '+response.status+': '+response.error);
            }
            else{
                window.location.reload();
                alert("We will contact you soon!");
            }
        })
        .catch(error => console.error( error));
    }

    render(){
        return(    
            <section id='contact'>
                    <div className='container'>
                        <div className='row'>
                            <span className='col-5' id='contactleftside'>
                                <h2 className='text-left'>Fill in the form</h2>
                                <h4 className='text-left'>We will get back to you</h4>
                            </span>
                            <span className=' offset-1 col-5'>
                                <Form id='contactform' onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for='contacter-name'>Name</Label>
                                        <Input type='text' name='name' id='contacter-name' placeholder='Name' value={this.state.name} onChange={this.handleChange} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='contacter-designation'>Designation</Label>
                                        <Input type='text' name='designation' id='contacter-designation' placeholder='Designation' value={this.state.designation} onChange={this.handleChange} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='companyName'>Company name</Label>
                                        <Input type='text' name='companyName' id='contacter-company' placeholder='Company' value={this.state.companyName} onChange={this.handleChange} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='companyEmail'>Company email</Label>
                                        <Input type='email' name='companyEmail' id='contacter-email' placeholder='Email' value={this.state.companyEmail} onChange={this.handleChange} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='contactNumber'>Contact number</Label>
                                        <Input type='tel' name='contactNumber' id='contacter-phone' placeholder='Phone No.' value={this.state.contactNumber} onChange={this.handleChange} required></Input>
                                    </FormGroup>
                                    <Button id='contactformbutton' type='submit'>Submit</Button>
                                </Form>
                            </span>
                    </div>
                </div> 
            </section>    
        );
    }
};
export default Contact;