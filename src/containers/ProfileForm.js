import React from 'react';
import ProfileFormComp from '../components/ProfileForm';
import { Container } from 'react-bootstrap';

export default function ProfileForm() {
    return (
        <Container>
            <div style={{width: '80%', margin: '0 auto'}}>
                <ProfileFormComp />
            </div>
        </Container>
    )
}