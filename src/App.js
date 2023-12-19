import Header from "./components/Header";
import { ThemeProvider, createTheme } from '@mui/material';
import Main from "./components/Main";
import instance from "./common/config/api";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addHeroes } from "./store/reducers/heroes";


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    }
  }
})

function App() {
  //const [heroes, setHeroes] = useState([]);


  //const fetchData = async () => {
  //  const result = await axios.get(baseUrl)
  //  setHeroes(result.data);
  //  setFilteredHeroes(result.data)
  // }

  //useEffect(() => {
  //  fetchData();
  //}, [])

  const dispatch = useDispatch();
  const heroes = useSelector(state => state.heroes);
  const [filteredHeroes, setFilteredHeroes] = useState("");

  const fetchHeroes = async () => {
    const response = await instance.get();
    dispatch(addHeroes(response.data));
    setFilteredHeroes(response.data);
  }

  useEffect(() => {
    if (heroes.length === 0) {
      fetchHeroes();
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header setFilteredHeroes={setFilteredHeroes} />
      <Main filteredHeroes={filteredHeroes} />
    </ThemeProvider>
  );
}

export default App;