import { HOST_URL_API } from "../../contants";

const DOMAIN_API = HOST_URL_API;

export function getProfiles(){
    return new Promise((resolve, reject) => {
        const url = DOMAIN_API+'profiles';
        fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json())
        .then(res => {
            console.log('====================================');
            console.log("res: ", res);
            console.log('====================================');
            resolve(res);
        })
        .catch(err => reject(err));
    })
}

export function createProfile(profile){
    return new Promise((resolve, reject) => {
        const url = DOMAIN_API+'profile';
        fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            }
        ).then(res => res.json())
        .then(res => {
            console.log('====================================');
            console.log("res: ", res);
            console.log('====================================');
            resolve(res);
        })
        .catch(err => reject(err));
    })
}

export function updateProfile({PersonID, ...profile}){
    return new Promise((resolve, reject) => {
        const url = DOMAIN_API+'profile/'+PersonID;
        fetch(
            url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            }
        ).then(res => res.json())
        .then(res => {
            console.log('====================================');
            console.log("res: ", res);
            console.log('====================================');
            resolve(res);
        })
        .catch(err => reject(err));
    })
}

export function getProfileById(id){
    return new Promise((resolve, reject) => {
        const url = DOMAIN_API+'profile/'+id;
        fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json())
        .then(res => {
            console.log('====================================');
            console.log("res: ", res);
            console.log('====================================');
            resolve(res[0]);
        })
        .catch(err => reject(err));
    })
}

export function deleteProfileById(id){
    return new Promise((resolve, reject) => {
        const url = DOMAIN_API+'profile/'+id;
        fetch(
            url,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json())
        .then(res => {
            console.log('====================================');
            console.log("delete res: ", res);
            console.log('====================================');
            resolve(res[0]);
        })
        .catch(err => reject(err));
    })
}