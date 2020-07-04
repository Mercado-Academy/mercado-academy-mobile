import React, { useState } from 'react';
import { Searchbar as DefaultSearchBar } from 'react-native-paper';
import Fonts from '../../constants/Fonts';

// import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <DefaultSearchBar
      accessibilityStates
      placeholder="Vamos aprender algo novo?"
      style={{ fontFamily: Fonts.montserratRegular, borderRadius: 50 }}
      inputStyle={{
        fontFamily: Fonts.montserratRegular,
        fontSize: Fonts.size.text,
      }}
      value={search}
      onChangeText={setSearch}
    />
  );
};

export default SearchBar;
