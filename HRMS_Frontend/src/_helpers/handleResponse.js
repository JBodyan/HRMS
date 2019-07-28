import { authenticationService } from '../_services/authentication.service.js';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            console.log(response.statusText.data);
            if ([401, 403].indexOf(response.status) !== -1) {
                authenticationService.logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}