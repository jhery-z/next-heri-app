import axios from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper';

const axiosConfig = {
    baseURL: 'https://api.github.com/',
    auth: {
        username:process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        password:process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    }
//     baseURL: "https://api.github.com/users/nama-akun/repos",
//     jsonp: true,
//     method: "GET",
//     dataType: "json",
//     success: function(res) {
//     console.log(res)
//   }
};

function searchRepos(searchText, language) {
    const query = language ? '${searchText}+language:${language}' : searchText;

    return axiosGetCancellable('api/search?q=${query}&sort=stars&order=desc');
}

export {searchRepos};