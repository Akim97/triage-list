import axios from 'axios';
import React, { Component, useState } from 'react';
// import axios from 'axios';


export default function createPatient() {

    const[fname, addfname] = useState();
    const[lname, addlname] = useState();
    const[chiefcomplaint, addchiefcomplaint] = useState();
    const[address, addaddress] = useState();


    function addPatient() {
        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({last_name: lname, first_name:fname, chief_complaint: chiefcomplaint, address: address})
          })
    }


    const[modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
        <button className='btn-modal' onClick={toggleModal}>
            Add Patient
        </button>



        {modal && (
                    <div className='modal'>
                    <div className='overlay'>
                        <div className='modal-content'>
                            <h2>Add Patient</h2>
                            <form onSubmit={ addPatient }>
                                <div>
                                <label>First Name:
                                    <input type="text" name="firstname" placeholder='First Name' onChange={(input) => {
                                        addfname(input.target.value)
                                    }} />
                                </label>
                                </div>
                                <div>
                                <label>Last Name:
                                    <input type="text" name="lastname" placeholder='Last Name' onChange={(input) => {
                                        addlname(input.target.value)
                                    }} />
                                </label>
                                </div>
                                <div>
                                <label>Chief Complaint:
                                    <input type="text" name="chiefcomplaint" placeholder='Chief Complaint' onChange={(input) => {
                                        addchiefcomplaint(input.target.value)
                                    }} />
                                </label>
                                </div>
                                <div>
                                <label>Address:
                                    <input type="text" name="address" placeholder='Address'onChange={(input) => {
                                        addaddress(input.target.value)
                                    }}/>
                                </label>
                                </div>
                                    <input type="submit"/>
                                <div/>
                            </form>
                            <button className='close-modal' onClick={toggleModal}>CLOSE</button>
                        </div>
                    </div>      
                </div>
        )}


        </>
    );
} 