import axios from "axios";

const axiosConfig = {
    baseURL: 'https://api.github.com/',
    auth: {
        username:process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    }
};

export default async (req, res) => {
    const {q, sort, order} = req.query;
    const response = await axios.get(
    'search/repositories?q=${q}&sort=${sort}&order=${order}',
    axiosConfig
    );

    res.json(response.data);
  };

