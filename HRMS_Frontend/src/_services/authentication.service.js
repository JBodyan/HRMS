import { BehaviorSubject } from 'rxjs';
import config from 'config';
import { handleResponse } from '../_helpers/handleResponse.js';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/api/Authentication/Login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser',JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}