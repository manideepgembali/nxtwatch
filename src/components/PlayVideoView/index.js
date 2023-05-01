import ReactPlayer from 'react-player'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  PlayVideoStatus,
  PlaySocialButtonContainer,
  BtnContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  PlayVideoDot,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, clickLiked, clickDisliked, isLiked, isDisliked} = props

  const onClickLiked = () => {
    clickLiked()
  }

  const onClickDisliked = () => {
    clickDisliked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisliked ? '#2563eb' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconContainer = isSaved ? '#2563eb' : textColor
        const onClickSave = () => {
          addVideo(videoDetails)
        }
        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views{' '}
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickLiked}
                    color={likeIconColor}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText type="button">Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickDisliked}
                    color={dislikeIconColor}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText type="button">Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickSave}
                    color={saveIconContainer}
                  >
                    <BiListPlus size={25} />
                    <ButtonText type="button">
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscribersCount} subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoView
