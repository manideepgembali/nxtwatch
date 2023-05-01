import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  NotFoundContainer,
  NotFoundVideoView,
  NotFoundVideoImage,
  NotFoundVideoHeading,
  NotFoundVideoNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const notFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideoView>
              <NotFoundVideoImage src={notFindImageUrl} alt="not found" />
              <NotFoundVideoHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideoHeading>
              <NotFoundVideoNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideoNote>
            </NotFoundVideoView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NotFound
