import {domain} from './cogfix'
export default {
    catalog: (page) => {
        return fetch(`${domain}product?page=${page}`).then(res => res.json())
    }
}