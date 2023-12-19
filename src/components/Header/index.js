import hero from '../../assets/hero.png';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";

export default function Header(props) {
  const heroes = useSelector(state => state.heroes);
  const HandleChange = (e) => {
    const searchHero = e.target.value;
    const searchFiltered = heroes.filter(hero => hero.name.toLowerCase().includes(searchHero));
    props.setFilteredHeroes(searchFiltered);
  }

  return (
    <header className='container mx-auto py-10 flex flex-row justify-between h-15 items-center mb-5'>
      <div className='basis-1/4 items-center'>
      </div>
      <div className='basis-1/2 grid justify-items-center'>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Pesquisar</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={HandleChange}
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      <Typography variant='h4' component='h1' color='primary' className='basis-1/4 grid justify-items-end'>
        Hero's Journey
      </Typography>
    </header>
  )
}