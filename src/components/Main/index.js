import HeroCard from '../HeroCard';
import React, { useState } from 'react';
import Modal from '../Modal';

export default function Main(props) {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setCount(0)
    setHeroBattle([])
  };

  const [heroBattle, setHeroBattle] = useState([]);

  const battleStart = (hero) => {
    setHeroBattle(heroBattle => ({
      ...heroBattle,
      [count]: hero
    }))
    setCount(count + 1)
    if (count === 1) {
      handleOpen()
    }
  };

  return (
    <main className="container mx-auto py-2 flex flex-wrap justify-between">
      {
        props.filteredHeroes &&
        props.filteredHeroes.map((hero, index) => (
          <HeroCard hero={hero} key={index} battleStart={battleStart}></HeroCard>
        ))
      }
      {open && <Modal open={open} handleClose={handleClose} heroBattle={heroBattle}></Modal>}
    </main >

  )
}