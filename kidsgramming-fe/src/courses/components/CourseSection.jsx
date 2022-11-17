import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import List from '@mui/material/List'
import { VideoSpace } from './VideoSpace'
import { getCourseVideos } from '../../api/professor/professorAPI'

export const CourseSection = ({ section, premium }) => {
  const [showCreateVideo, setShowCreateVideo] = useState(false)
  const [videos, setVideos] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    getCourseVideos(section.id).then(res => {
      const { videos, errorMessage } = res
      setVideos(videos)
      setErrorMessage(errorMessage)
    })
  }, [])

  return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
          <Typography>{section.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                 <Typography>
                    {section.description}
                </Typography>
            </Box>
            <List >
              {videos.map(video => (
                <VideoSpace key={video.id} video={video} premium={premium} />
              ))}
            </List>
        </AccordionDetails>
      </Accordion>
  )
}
