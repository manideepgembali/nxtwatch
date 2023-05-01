import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id} = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <ItemLink to={`/videos/${id}`}>
            <GamingListItem>
              <GamingThumbNailImage
                src={videoDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingContentSection>
                <GamingTitle color={textColor}>
                  {videoDetails.title}
                </GamingTitle>
                <GamingViewsAndDate color={textColor}>
                  {videoDetails.viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default GameVideoCard
