import React from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import {Table} from 'react-bootstrap';

export default function TableProfile({listProfile, setListProfile}) {
    return (
        <Table striped bordered hover>
            <TableHeader/>
            <TableContent listProfile={listProfile} setListProfile={setListProfile}/>
        </Table>
    )
}