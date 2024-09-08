import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { bull } from '../../ui/components/Bull'
import React from 'react'
import { capitalize } from '@mui/material'

const suscriptionCardStyles = {
  minWidth: 275,
  maxWidth: 275,
  m: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

export const SuscriptionCard = ({ name, capacity, price, benefits }) => {
  return (
     <Card sx={suscriptionCardStyles}>
      <CardContent>
        <Typography variant="h5" component="div">
         {capitalize(name)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: ${price}
          <br />
          Capacity: {capacity || 'unlimited'}
        </Typography>
        <Typography variant="body2">
            {benefits.map((benefit, index) => {
              return <React.Fragment key={index + '-card'}>
                    <span>{bull} {capitalize(benefit)}</span>
                    <br />
                </React.Fragment>
            })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Suscribe</Button>
      </CardActions>
    </Card>
  )
}

SuscriptionCard.propTypes = {
  name: PropTypes.string.isRequired,
  capacity: PropTypes.any,
  price: PropTypes.number.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired
}
