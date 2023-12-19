import { Card, CardContent, CardHeader, CardMedia, CardActions, Button, Typography } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';

export default function HeroCard(props) {
  const styles = {
    media: {
      height: 180
    },
  };

  const battle = () => {
    props.battleStart(props.hero)
  };

  return (
    <>
      <Card sx={{ width: 200, borderRadius: '12px' }} variant="outlined" className='mb-3'>
        <CardHeader
          titleTypographyProps={{ variant: 'h7' }}
          title={props.hero.name}
          subheaderTypographyProps={{ variant: 'caption' }}
          subheader={'n. ' + props.hero.id}

        >
        </CardHeader>
        <CardMedia
          style={styles.media}
          component="img"
          image={props.hero.images.sm}
          alt={props.hero.name}
        />
        <CardContent sx={{ margin: 0.05 }} className='flex justify-center items-center'>
          <ShieldIcon sx={{ marginRight: 1 }} />
          <Typography
            align='center'
          >
            {props.hero.powerstats.combat + props.hero.powerstats.durability + props.hero.powerstats.intelligence + props.hero.powerstats.power + props.hero.powerstats.speed + props.hero.powerstats.strength}
          </Typography>
        </CardContent>
        <CardActions className='justify-center' sx={{ paddingTop: 0 }}>
          <Button variant="contained" sx={{ backgroundColor: 'red', color: '#fff' }} onClick={battle}>Batalhar</Button>
        </CardActions>
      </Card>
    </>
  )
}