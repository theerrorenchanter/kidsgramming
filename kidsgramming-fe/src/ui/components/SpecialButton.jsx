import { Button } from '@mui/material'

const styles = {
  display: 'inline-block',
  cursor: 'pointer',
  fontSize: '12pt',
  fontWeight: 'bold',
  color: '#FDFFFC',
  width: 'auto',
  padding: '10px 30px',
  borderRadius: '40px',
  background: '#13ff13',
  backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FF8F00 100%)',
  boxShadow: '0 0 0 0 rgba(145,64,248,0.5), 0 0 0 0 rgba(39,200,255,0.5)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&-webkit-border-radius': '40px',
  '&-o-border-radius': '40px',
  '&-ms-border-radius': '40px',
  '&:hover': {
    color: '#FDFFFC',
    transform: 'translate(0, -3px)',
    boxShadow: '5px -5px 16px 0 #7722e7, -5px 5px 16px rgba(183, 0, 255, 0.7)'
  }
}

export const SpecialButton = ({ children }) => {
  return (
    <Button sx={ styles }>
          { children }
    </Button>
  )
}
