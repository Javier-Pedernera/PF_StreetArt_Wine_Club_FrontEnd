import React, { useState } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAge } from '../../actions/userActions';


export default function AgeForm() {
    const dispatch = useDispatch()
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [activeButton, setActiveButton] = useState(true)



    const handleSubmit = (event) => {
        event.preventDefault();
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        if (hoy.getMonth() < fechaNacimientoDate.getMonth() || (hoy.getMonth() === fechaNacimientoDate.getMonth() && hoy.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
        }
        if (edad >= 18) {
            localStorage.setItem('age', fechaNacimiento)
            window.location.href = '/home'
        } else {
            window.location.href = 'https://www.google.com'
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>Select your birthdate</FormLabel>
                <FormControl style={{ width: '50%' }} type="date" value={fechaNacimiento} onChange={(event) => setFechaNacimiento(event.target.value)} />
            </FormGroup>
            <Button type="submit" className='btn btn-warning btn-lg'>Verify age</Button>
        </Form>
    );
}


