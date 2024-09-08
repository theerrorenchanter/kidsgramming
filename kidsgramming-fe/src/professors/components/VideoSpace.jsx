import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'

export const VideoSpace = ({ video }) => {
  return (
        <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
            <PlayCircleIcon />
            </ListItemIcon>
            <ListItemText primary={video.title} />
        </ListItemButton>
        </ListItem>
  )
}
