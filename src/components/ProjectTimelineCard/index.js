import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,

    duration,
    projectUrl,
  } = projectDetails
  console.log(projectDetails)

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
