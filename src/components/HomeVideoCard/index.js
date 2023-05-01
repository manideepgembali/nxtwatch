import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  LinkItem,
  ThumbNail,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewAndDate,
  Dot,
  LinkContainer,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props

  const {
    id,
    title,
    thumbnailUrl,
    profileImageUrl,
    name,
    viewCount,
    publishedAt,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <LinkContainer to={`/videos/${id}`}>
            <LinkItem>
              <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewAndDate color={textColor}>
                    {viewCount} views <Dot> &#8226; </Dot>
                    {publishedAt}
                  </ViewAndDate>
                </ContentSection>
              </VideoDetails>
            </LinkItem>
          </LinkContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
