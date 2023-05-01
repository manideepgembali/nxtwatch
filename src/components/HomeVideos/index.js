import HomeVideoCard from '../HomeVideoCard'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  VideoCardList,
  NoVideoView,
  NoVideoImage,
  NoVideoHeading,
  NoVideoDesc,
  FailureButton,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        return videosCount > 0 ? (
          <VideoCardList bgColor={bgColor}>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideoView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading color={headingColor}>
              No Search results found
            </NoVideoHeading>
            <NoVideoDesc color={noteColor}>
              Try different key words or remove search filter
            </NoVideoDesc>
            <FailureButton type="button" onClick={onClickRetry}>
              Retry
            </FailureButton>
          </NoVideoView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos
