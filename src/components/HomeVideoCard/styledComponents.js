import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbNail = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.textColor};
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.textColor};
`
export const ViewAndDate = styled(ChannelName)`
  font-size: 12px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const LinkContainer = styled(Link)`
  text-decoration: none;
`
