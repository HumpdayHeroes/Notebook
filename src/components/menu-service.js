import axios from 'axios';

export class MenuService {

    getHeaderMenuItems = () => {
        axios.get('../data/header-items.json').then(result => result.data)
        .catch(error => {
            console.error(error);
        })
    }
}