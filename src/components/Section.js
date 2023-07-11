import React, { useEffect } from 'react'
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons
} from '../styled components/sectionStyles'

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {

  useEffect(() => {
    const itemTextElement = document.querySelectorAll(`.${ItemText.styledComponentId}`);
    const buttonGroupElement = document.querySelectorAll(`.${ButtonGroup.styledComponentId}`);

    const itemTextObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('item__visible');
          itemTextObserver.unobserve(entry.target);
        }
      });
    });

    const buttonGroupObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('button__visible');
          itemTextObserver.unobserve(entry.target);
        }
      });
    });

    itemTextElement.forEach(element => {
      itemTextObserver.observe(element);
    })
    buttonGroupElement.forEach(element => {
      buttonGroupObserver.observe(element);
    })

    return () => {
      itemTextElement.forEach(element => {
        itemTextObserver.observe(element);
      })
      buttonGroupElement.forEach(element => {
        buttonGroupObserver.observe(element);
      })
    };
  }, []);

  return (
    <Wrap bgimage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {
            rightBtnText && <RightButton>{rightBtnText}</RightButton>
          }
        </ButtonGroup>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section
