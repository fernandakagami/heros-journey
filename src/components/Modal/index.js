import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography, List, ListItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 800,
  bgcolor: 'background.paper',
  color: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const isDefeat = (value1, value2) => {
  if (value1 > value2) {
    return false
  }
  return true
}

const isWinner = (hero1, hero2) => {
  let heroOne = hero1.powerstats.combat + hero1.powerstats.durability + hero1.powerstats.intelligence + hero1.powerstats.power + hero1.powerstats.speed + hero1.powerstats.strength
  let heroTwo = hero2.powerstats.combat + hero2.powerstats.durability + hero2.powerstats.intelligence + hero2.powerstats.power + hero2.powerstats.speed + hero2.powerstats.strength

  if (heroOne > heroTwo) {
    return hero1.name
  }
  return hero2.name
}

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col justify-center items-center">
          <Typography variant='h4' className='mb-9'>Winner</Typography>
          <Typography sx={{ color: '#46c001', marginBottom: 3 }} variant='h3' className='mb-9'>{isWinner(props.heroBattle[0], props.heroBattle[1])}</Typography>
          <div className="flex justify-between items-center">
            <div>
              <Box
                component="img"
                sx={{
                  height: 400,
                  width: 300,
                }}
                alt={props.heroBattle[0].name}
                src={props.heroBattle[0].images.md}
              />
              <Typography variant='h4'>{props.heroBattle[0].name}</Typography>
            </div>
            <List>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.heroBattle[0].powerstats.combat}
                {isDefeat(props.heroBattle[0].powerstats.combat, props.heroBattle[1].powerstats.combat) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
              </ListItem>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.heroBattle[0].powerstats.durability}
                {isDefeat(props.heroBattle[0].powerstats.durability, props.heroBattle[1].powerstats.durability) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
              </ListItem>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.heroBattle[0].powerstats.intelligence}
                {isDefeat(props.heroBattle[0].powerstats.intelligence, props.heroBattle[1].powerstats.intelligence) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
              </ListItem>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.heroBattle[0].powerstats.power}
                {isDefeat(props.heroBattle[0].powerstats.power, props.heroBattle[1].powerstats.power) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
              </ListItem>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.heroBattle[0].powerstats.speed}
                {isDefeat(props.heroBattle[0].powerstats.speed, props.heroBattle[1].powerstats.speed) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
              </ListItem>
              <ListItem sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.heroBattle[0].powerstats.strength}
                {isDefeat(props.heroBattle[0].powerstats.strength, props.heroBattle[1].powerstats.strength) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
              </ListItem>
            </List>
            <List>
              <ListItem>Combate</ListItem>
              <ListItem>Resistência</ListItem>
              <ListItem>Inteligência</ListItem>
              <ListItem>Poder</ListItem>
              <ListItem>Velocidade</ListItem>
              <ListItem>Força</ListItem>
            </List>
            <List>
              <ListItem>
                {isDefeat(props.heroBattle[1].powerstats.combat, props.heroBattle[0].powerstats.combat) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
                {props.heroBattle[1].powerstats.combat}
              </ListItem>
              <ListItem>
                {isDefeat(props.heroBattle[1].powerstats.durability, props.heroBattle[0].powerstats.durability) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
                {props.heroBattle[1].powerstats.durability}
              </ListItem>
              <ListItem>
                {isDefeat(props.heroBattle[1].powerstats.intelligence, props.heroBattle[0].powerstats.intelligence) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
                {props.heroBattle[1].powerstats.intelligence}
              </ListItem>
              <ListItem>
                {isDefeat(props.heroBattle[1].powerstats.power, props.heroBattle[0].powerstats.power) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
                {props.heroBattle[1].powerstats.power}
              </ListItem>
              <ListItem>
                {isDefeat(props.heroBattle[1].powerstats.speed, props.heroBattle[0].powerstats.speed) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
                {props.heroBattle[1].powerstats.speed}
              </ListItem>
              <ListItem>
                {isDefeat(props.heroBattle[1].powerstats.strength, props.heroBattle[0].powerstats.strength) ?
                  <RemoveIcon sx={{ color: '#f00' }} /> : <AddIcon sx={{ color: '#46c001' }} />}
                {props.heroBattle[1].powerstats.strength}
              </ListItem>
            </List>
            <div className='flex flex-col justify-end items-end'>
              <Box
                component="img"
                sx={{
                  height: 400,
                  width: 300,
                }}
                alt={props.heroBattle[1].name}
                src={props.heroBattle[1].images.md}
              />
              <Typography variant='h4'>{props.heroBattle[1].name}</Typography>
            </div>
          </div>

        </Box>
      </Modal>
    </div >
  );
}