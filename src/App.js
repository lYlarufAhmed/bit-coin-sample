import './App.css';
import styled from "styled-components";
import {FlexContainer, FCColumn} from "./componetns/styledComponents";
import logoImageUri from './assets/logo.png'
import dadyImgUri from './assets/Layer 2.png'

const AppContainer = styled(FCColumn)`
  min-width: 100vw;
  min-height: 100vh;
  background: #251e1e;
  color: white;
`

const TopNavContainer = styled(FlexContainer)`
  height: 120px;
  justify-content: center;
  align-items: center;
`

const TopNav = styled(FlexContainer)`
  width: 1170px;
  height: 42px;
  justify-content: space-between;
`

const NavLinkContainer = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
`

const LogoImg = styled.img`
  height: auto;
  object-fit: contain;
  width: 250px;
`

const NavLink = styled.a`
  text-decoration: none;
  width: 86px;
  height: 19px;
  color: white;

  :hover {
    cursor: pointer;
  }
`
const PrimaryBtn = styled.button`
  border-radius: 12px;
`

const NavBtn = styled(PrimaryBtn)`
  border: 2px solid #FFB500;
  width: 170px;
  height: 42px;
  background: transparent;
  text-transform: uppercase;
  color: white;

  :hover {
    filter: drop-shadow(0px 54px 161px rgba(255, 181, 0, 0.42)) drop-shadow(0px 35px 94.2894px rgba(255, 181, 0, 0.318889)) drop-shadow(0px 20.8px 51.2815px rgba(255, 181, 0, 0.255111)) drop-shadow(0px 10.8px 26.1625px rgba(255, 181, 0, 0.21)) drop-shadow(0px 4.4px 13.1185px rgba(255, 181, 0, 0.164889)) drop-shadow(0px 1px 6.33565px rgba(255, 181, 0, 0.101111));
  }
`
const Main = styled(FlexContainer)`
  background-image: url("${dadyImgUri}");
  background-position: right 9.33% top 19.15%;
  width: 100%;
  background-size: contain;
  height: calc(100vh - 120px);
  background-repeat: no-repeat;

  padding-left: 13%;
  align-items: center;
`

const Banner = styled(FCColumn)`
  width: 717px;
  height: 336.21px;
  gap: 24px;
`
const BannerHeader = styled.h1`
  // width: 717px;
  height: 113px;

  font-family: Archivo Black, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 94px;
  line-height: 120%;

  /* identical to box height, or 113px */

  color: #FFFFFF;
`
const YellowColor = styled.span`
  color: #FFB500;
`

const BodyTypo = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;

  /* or 31px */

  color: #FFFFFF;

  opacity: 0.7;
`

const MainBtn = styled(PrimaryBtn)`
  width: 220px;
  height: 64px;
  background-color: ${(props) => props.color || 'Blue'};
  border: none;
`
const BtnGroup = styled(FlexContainer)`
  gap: 10px;
`


function App() {
    return (
        <AppContainer>
            <TopNavContainer>
                <TopNav>
                    <LogoImg src={logoImageUri} alt={'Brand Logo'}/>
                    <NavLinkContainer>
                        <NavLink>Link 1</NavLink>
                        <NavLink>Link 2</NavLink>
                        <NavLink>Link 3</NavLink>
                        <NavLink>Link 4</NavLink>
                        <NavLink>Link 5</NavLink>
                    </NavLinkContainer>
                    <NavBtn>Buy Token</NavBtn>
                </TopNav>
            </TopNavContainer>
            <Main>
                <Banner>
                    <BannerHeader>Daddy <YellowColor>Bitcoin</YellowColor></BannerHeader>
                    <BodyTypo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum earum molestias omnis
                        optio possimus sit voluptas. Corporis fuga impedit incidunt quaerat, quas quasi quidem quo
                        sapiente sunt voluptatibus. Provident.</BodyTypo>
                    <BtnGroup>
                        <MainBtn color={'#FFB500'}>Pancake Swap</MainBtn>
                        <MainBtn color={'#6ABC14'}>Daddy Chart</MainBtn>
                    </BtnGroup>
                </Banner>

            </Main>
        </AppContainer>
    );
}

export default App;
