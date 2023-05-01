import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  Navbar,
  NavigationContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
} from './styledComponents'

class NavigationBar extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeTab} = value
          const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'
          const onClickTabHome = () => {
            changeTab('Home')
          }
          const onClickTabTrending = () => {
            changeTab('Trending')
          }
          const onClickTabGaming = () => {
            changeTab('Gaming')
          }
          const onClickTabSaved = () => {
            changeTab('Saved')
          }
          return (
            <Navbar>
              <NavigationContainer bgColor={bgColor}>
                <NavOptions>
                  <NavLink to="/">
                    <NavLinkContainer
                      key="home"
                      onClick={onClickTabHome}
                      bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    >
                      <AiFillHome
                        size={25}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Home</NavText>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/trending">
                    <NavLinkContainer
                      key="trending"
                      onClick={onClickTabTrending}
                      bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    >
                      <HiFire
                        size={25}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Trending</NavText>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/gaming">
                    <NavLinkContainer
                      key="gaming"
                      onClick={onClickTabGaming}
                      bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    >
                      <SiYoutubegaming
                        size={25}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Gaming</NavText>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/saved-videos">
                    <NavLinkContainer
                      key="saved"
                      onClick={onClickTabSaved}
                      bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    >
                      <CgPlayListAdd
                        size={25}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Saved Videos</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </NavOptions>
                <ContactInfo>
                  <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                  <ContactIcons>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt=" facebook logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIcons>
                  <ContactNote color={textColor}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactNote>
                </ContactInfo>
              </NavigationContainer>
            </Navbar>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default NavigationBar
