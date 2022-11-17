import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DialogContent, DialogTitle, IconButton } from '@mui/material'
import ReactPlayer from 'react-player'
import { authenticationStatuses } from '../../store/auth/authSlice'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const alertMessage = message => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message
  })
}

export const VideoSpace = ({ video, premium }) => {
  const { roles, status } = useSelector(state => state.auth)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    if (status === authenticationStatuses.notAuthenticated) {
      alertMessage('You must log in to watch courses')
      return
    }

    if (!roles.includes('premium') && premium) {
      alertMessage('You must be a premium user to watch courses')
      return
    }

    setOpen(!open)
  }

  return (
        <ListItem disablePadding onClick={handleClickOpen} >
          <ListItemButton>
              <ListItemIcon>
              <PlayCircleIcon />
              </ListItemIcon>
              <ListItemText primary={video.title}/>
          </ListItemButton>
          <Video link={video.video_url} open={open} handleClose={handleClickOpen} title={video.title}/>
        </ListItem>
  )
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose
        ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>
          )
        : null}
    </DialogTitle>
  )
}

const Video = ({ link, open, handleClose, title }) => {
  return (
     <BootstrapDialog fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ReactPlayer url={link} controls width='100%' height='100%' />
        </DialogContent>
      </BootstrapDialog>
  )
}
