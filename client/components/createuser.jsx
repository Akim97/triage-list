import React, { Component, useState } from 'react';

export default function createPatient() {

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
                            <form>
                                <div>
                                <label>First Name:
                                    <input type="text" name="firstname" placeholder='First Name'/>
                                </label>
                                </div>
                                <div>
                                <label>Last Name:
                                    <input type="text" name="lastname" placeholder='Last Name'/>
                                </label>
                                </div>
                                <div>
                                <label>Chief Complaint:
                                    <input type="text" name="chiefcomplaint" placeholder='Chief Complaint'/>
                                </label>
                                </div>
                                <div>
                                <label>Address:
                                    <input type="text" name="address" placeholder='Address'/>
                                </label>
                                </div>
                                    <input type="submit" value="Submit" />
                            </form>
                            <button className='close-modal' onClick={toggleModal}>CLOSE</button>
                        </div>
                    </div>
                </div>
        )}


        </>
    );
} 