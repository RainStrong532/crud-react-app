import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as apis from '../../fetchApis';

import {
    useParams,
    useHistory
} from "react-router-dom";


export default function ProfileForm() {
    let { id } = useParams();
    const history = useHistory();

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

    const handleCreate = async () => {
        try {
            const res = await apis.profileApi.createProfile({ FirstName, LastName });
            if (res[0].PersonID) {
                history.push("/profiles");
            }
        } catch (err) {
            alert(err);
        }
    }

    const handleUpdate = async () => {
        try {
            await apis.profileApi.updateProfile({ FirstName, LastName, PersonID: id });
            history.push("/profiles");
        } catch (err) {
            alert(err);
        }
    }

    const onSubmit = () => {
        if (id) {
            handleUpdate();
        } else {
            handleCreate();
        }
    }

    const getProfileById = async () => {
        try {
            const profile = await apis.profileApi.getProfileById(id);
            setFirstName(profile.FirstName);
            setLastName(profile.LastName);
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        if (id) {
            getProfileById();
        }
    }, []);

    return (
        <Form>
            <Form.Group style={{ textAlign: 'left' }} controlId="formBasicFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName" value={FirstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group style={{ textAlign: 'left' }} controlId="formBasicLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName" value={LastName} onChange={e => setLastName(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>
                Submit
            </Button>
        </Form>
    )
}