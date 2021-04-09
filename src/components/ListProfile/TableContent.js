import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ConfirmModal from '../commons/ConfirmModal';
import * as apis from '../../fetchApis';

export default function TableHeader({ listProfile, setListProfile }) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState(undefined);
    const toggle = (id) => {
        setShow(!show);
        setId(id);
    }
    const history = useHistory();
    const handleDelete = async () => {
        try {
            await apis.profileApi.deleteProfileById(id);
            alert("Delete successfully!")
            setListProfile();
        } catch (err) {
            alert(err);
        }
    }

    const renderListProfile = () => {
        return (
            listProfile.map((item, index) => {
                let itemTd = [];
                for(let key in item){
                    itemTd.push(
                        <td>
                            {item[key]}
                        </td>
                    )
                }
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {
                            itemTd
                        }
                        <td>
                            <Button title="Update" className="mr-3" variant="warning" onClick={() => {
                                history.push('/profile/edit/' + item.PersonID, { OK: 1 })
                            }}>Update</Button>
                            <Button title="Delete" variant="danger" onClick={() => toggle(item.PersonID)}>Delete</Button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            <tbody>
                {
                    renderListProfile()
                }
            </tbody>
            <ConfirmModal show={show} setShow={setShow} handleConfirm={handleDelete} />
        </>
    )
}