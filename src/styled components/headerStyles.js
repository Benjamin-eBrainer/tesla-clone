import { styled } from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div `
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
}
`

const CustomMenu = styled(MenuIcon)
`
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    display: flex;
    flex-direction: column;
    text-align: start;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    padding: 20px;
    background: white;
    z-index: 16;
    list-style: none;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`

const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)
`
    cursor: pointer;
`

export {
    Container,
    Menu,
    RightMenu,
    CustomMenu,
    BurgerNav,
    CloseWrapper,
    CustomClose
};