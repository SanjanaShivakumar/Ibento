import React, { useState } from 'react';
import {Form, Col, Row, Button, Navbar } from 'react-bootstrap'
import { CaretLeft } from 'react-bootstrap-icons';
import firebase from '../Authentication/base';

import '../Styles/EventForm.css'

export default function AddEvent() {


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

    const uploading = (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref("images")
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            alert("Successfully Uploaded Event Poster!")
        })
    }


  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleOnChangeDesc = (e) => {
    setDescription(e.target.value);
  };

  const createEvent = () => {
    const eventRef = firebase.database().ref('Events');
    const event = {
      title,
      description
    };


    eventRef.push(event);
    window.location.reload(false);
  };
  return (
     <div class="container">
          <Navbar className="welcome">
              <a href="/"><CaretLeft /></a>
              <h3 className="addEventTitle">Add An Event</h3>
         </Navbar>

        {/* In This Component, We are Reading data from users, and uploading the same to the Firebase Console */}

        <Form className="eventForm">
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                  Title
                </Form.Label>
              <Col sm={10}>
                  <Form.Control type="text" onChange={handleOnChange} value={title} placeholder="Name Your Event" />
              </Col>
            </Form.Group>
            <Form.Group >
                <Form.Label>
                  Description 
                </Form.Label>
                <Form.Control as="textarea" onChange={handleOnChangeDesc} value={description} placeholder="Type something" rows={3} />
                  </Form.Group>
                  <Form.Group>
                     <Form.File tye="file" onChange={uploading} id="exampleFormControlFile1" label="Upload Event Poster" />
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Category
                </Form.Label>
              <Col sm={10}>
              <Form.Check
                    type="radio"
                    label="Arts & Culture"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
              <Form.Check
                    type="radio"
                    label="Sports"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
              <Form.Check
                    type="radio"
                    label="Coding"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
              <Form.Check
                    type="radio"
                    label="Other"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
              </Col>
              </Form.Group>
              </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Send Push Notififcations" />
                    </Col>
                </Form.Group>
{/* 
                By clicking submit, the onClick functon is Triggered, which in turn upoads Pictures
                to the Cloud Storage bucket, and uploades Event Information to a Real Time Databaae */}

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button  onClick={createEvent}>Submit</Button>
                    </Col>
              </Form.Group>
            </Form>
    </div>
  );
}
