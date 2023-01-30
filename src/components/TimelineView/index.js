import {Chrono} from 'react-chrono'

import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  renderingTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)

    return (
      <div className="app-container">
        <h1 className="my-journey">
          MY JOURNEY OF <br /> <span className="ccbp-heading">CCBP 4.0</span>
        </h1>

        <Chrono
          items={timelineItemsList}
          slideShow
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem =>
            this.renderingTimelineCard(eachItem),
          )}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
