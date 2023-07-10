import { styled } from "styled-components";
import { MenuBookSharp } from '@mui/icons-material';

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

const CustomMenu = styled(MenuBookSharp)
`
    cursor: pointer;
`

export {
    Container,
    Menu,
    RightMenu,
    CustomMenu
};