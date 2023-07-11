import { styled } from "styled-components";

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgimage}')`};
`

const ItemText = styled.div `
    text-align: center;
    padding-top: 35vh;
    opacity: 0;
    transition: all 3.6s;
    
    &.item__visible {
        padding-top: 15vh;
        opacity: 1;
    }
`

const Buttons = styled.div ``

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 75px;
    opacity: 0;
    transition: all 3.6s;
    
    &.button__visible {
        margin-bottom: 30px;
        opacity: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    border-radius: 100px;
    margin: 8px;
    background-color: rgba(23, 26, 32, 0.8);
    opacity: 0.85;
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
`

const RightButton = styled(LeftButton)
`
    opacity: 0.65;
    background-color: white;
    color: black;
`

const DownArrow = styled.img `
    // margin: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

export {
    Wrap,
    ItemText,
    Buttons,
    ButtonGroup,
    LeftButton,
    RightButton,
    DownArrow
}