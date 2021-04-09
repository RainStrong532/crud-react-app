import React, { useEffect, useState } from 'react';
import TableProfile from '../components/ListProfile/TableProfile';
import { Container, Button } from 'react-bootstrap';
import * as apis from '../fetchApis';
import { useHistory } from "react-router-dom";

export default function ListProfile() {

    const [listProfile, setListProfile] = useState([]);
    const history = useHistory();

    const goToAddPage = () => {
        history.push('/profiles/add');
    }

    const getListProfile = async () => {
        let list = [];
        try {
            list = await apis.profileApi.getProfiles();
            if (list.message) {
                alert(list.message);
            } else {
                setListProfile([...list]);
            }
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getListProfile();
    }, []);
    return (
        <Container>
            <h2 className="title">
                List Profile
            </h2>
            <Button variant="primary" className="mb-4" onClick={goToAddPage}>
                Thêm mới
            </Button>
            <TableProfile listProfile={listProfile} setListProfile={getListProfile}/>
        </Container>
    )
}