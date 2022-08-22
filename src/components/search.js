import React from 'react'
import TextInput from './shared/text-input'
import Select from './shared/select'
import LANGUAGE from './constants/languages.constant';

const Search = (props) => {
    const {language, searchText, onSearchTextChange, onLanguageChange} = props;

    const languages = [{value: '', label: 'All'},...LANGUAGE];

  return (
    <div>
      <TextInput 
      Label="Repo Search"
      value={searchText}
      onChange={(value) => onSearchTextChange(value)}
      />
      <Select 
      Label="Language"
      vlaue={language}
      options={languages}
      onChange={(value) => onSearchTextChange(value)}
      />
    </div>
  )
}

export default Search
