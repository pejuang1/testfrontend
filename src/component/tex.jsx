import React, { Component } from 'react';
import { Form, Input, Col, FormGroup, Row } from 'reactstrap';

class Tex extends Component {
    state = {  }
    render() { 
        return ( 
<div className='percobaan'>
            {/* <center> */}
                
            <Row form className='coba'>
                <Col md={6}>
            <FormGroup>

            {/* <Form> */}

            <Form className='tulisan'>
                <h4 className='general'>General Information</h4>
            <Input type="select" placeholder="title">
                <option>Businessman</option>
                <option>Secretary</option>
                <option>Reporter</option>
            </Input>
            <Row form>
            <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="Last Name" />
          </FormGroup>
          </Col>
            </Row>
            <Input type="select" placeholder='Position'>
              <option>Director</option>
              <option>Manager</option>
              <option>Employee</option>
            </Input>
            <Input placeholder="Company"></Input>
            <br/>
          <h4 className='contact'>Contact Detail</h4>
          <Input type="text" placeholder="Address" />
          <Row form>
              <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="Zip Code" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="select" placeholder="Place">
            <option>Street</option>
            <option>District</option>
            <option>City</option>
            </Input>
          </FormGroup>
          </Col>
            </Row>
            <Input type="text" placeholder="Country" />
            <Row form>
            <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="Code" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="Phone Number" />
          </FormGroup>
          </Col>
            </Row>
            <Input type="email" placeholder="Your Email" />
            <Input type="checkbox">I do accept the Terms and Conditions of your job</Input>
            <br/>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Register
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Firstname :
        Lastname :
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        {/* </Form> */}
          </Form>
            </FormGroup>
                </Col>
            </Row>
            {/* </center> */}
            </div>
         );
    }
}
 
export default Tex;