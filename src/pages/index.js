import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from '../components/search';
import { searchRepos } from '../services/githubService';


const index = (props) => {
  const [searchText, setSearchText] = useState('');
  const [language, setLanguage] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    setSearchText(text);
    loadRepos(text, language);
  };

  const onLanguageChange = (Language) => {
    setLanguage(language);
    loadRepos(searchText, language);
  };

  const loadRepos = async(searchText, Language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    setLoading(false);
    setRepos(res.data.items);
  }

  return (
    <div>
      <Search 
      searchText={searchText}
      language={language}
      onSearchTextChange={onSearchTextChange}
      onLanguageChange={onLanguageChange}
      />
      {loading ? 'Loading...' : <div>{JSON.stringify(repos, null, 2)}</div>}
    </div>
  );
};


export const getStaticProps = async () => {
  const res = await axios.get('https://api.chucknorris.io/jokes/random');
  return {
    props: {
      value: res.data.value
    }
  };
};


export default index
