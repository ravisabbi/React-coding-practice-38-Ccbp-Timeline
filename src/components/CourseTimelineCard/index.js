import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const Tag = props => {
  const {children} = props
  return <p className="tag-name">{children}</p>
}

const CourseTimelineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div>
      <div className="title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tags-list">
        {tagsList.map(eachtag => (
          <Tag key={eachtag.id}>{eachtag.name}</Tag>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
