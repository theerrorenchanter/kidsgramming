
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import { SuscriptionCard } from '../components/SuscriptionCard'

const suscriptionsListWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  p: 1,
  maxWidth: '100%',
  justifyContent: 'center'
}

export const Suscriptions = ({ suscriptions }) => {
  return (
    <Box sx={suscriptionsListWrapperStyles}>
        {suscriptions.map(suscription => {
          return <SuscriptionCard key={suscription.id}
                name={suscription.name}
                capacity={suscription.capacity}
                price={suscription.price}
                benefits={suscription.benefits} />
        })}
    </Box>
  )
}

Suscriptions.propTypes = {
  suscriptions: PropTypes.arrayOf(PropTypes.object).isRequired
}
