/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import { updateObj, findIndexFunc } from '../../lib/utils';
import {
  BookNow,
  BookContent,
  BookTitle,
  NextButton,
  BookTab,
  Flex,
  FlexGrow,
  FlexBetween,
  CollapseHidden,
  CollapseArrow,
  Price,
  Checkbox,
  CheckboxChecked,
} from './ExtraServicesStyled';
import arrow from '../../assets/icons/arrow.svg';
import check from '../../assets/icons/check.svg';
import owen from '../../assets/icons/owen.svg';
import frige from '../../assets/icons/frige.svg';
import moveIn from '../../assets/icons/moveIn.svg';
import deep from '../../assets/icons/deep.svg';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';


const ExtraServices = () => {
  const categories = useSelector(state => state?.extraServices?.categories)
  const [categoriesState, setCategoriesState] = useState(null)

  useEffect(() => {
    if (!categoriesState) {
      setCategoriesState(categories)
    }
  }, [categories])


  const handleDrawIcon = (tabName) => {
    let icon = null
    switch (tabName) {
      case "Move in-move out cleaning":
        icon = moveIn
        break;
      case "Deep Cleaning":
        icon = deep
        break;
      case "Inside Refrigerator":
        icon = frige
        break;
      case "Inside Oven":
        icon = owen
        break;
    
      default:
        break;
    }

    return icon
  }

  const handleSelectTab = (id, collapsedFlag) => {
    const index = findIndexFunc(categoriesState, 'selfID', id)
    const categoriesNew = Object.assign([], categoriesState, { [index]: updateObj(categoriesState[index], 'isExpanded', collapsedFlag) } );
    setCategoriesState(categoriesNew)
  }

  const handleToggle = (toggle, idTab) => {
    const index = findIndexFunc(categoriesState, 'selfID', idTab)
    const categoriesNew = Object.assign([], categoriesState, {[index]: updateObj(categoriesState[index], 'isChecked', toggle)} )
    setCategoriesState(categoriesNew)
  }


  return (
    <BookNow>
      <Sidebar />
      <BookContent>
        <BookTitle>Do you need some extra services?</BookTitle>

        <BookTab collapsed={true}>
          <FlexBetween>
            <Flex>
              <img src={frige} alt='Area' />
              <p style={{ marginLeft: 20 }}>{'Inside refrigerator'}</p>
              <CollapseArrow
                collapsed={true}
                src={arrow}
                alt='arrow'
                className='ml-3'
              />
            </Flex>
            <Flex>
              {/* <Checkbox></Checkbox> */}
              <CheckboxChecked>
                <img src={check} alt='Area' />
              </CheckboxChecked>
            </Flex>
          </FlexBetween>

          <CollapseHidden>
            <p>
              Peak Demand can be defined as the overall power requested at the
              summit of a given time.{' '}
            </p>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway.
            </p>
            <p>
              At the end of the day, going forward, a new normal that has
              evolved from generation X.
            </p>
            <Price>$50</Price>
          </CollapseHidden>
        </BookTab>

        {
          categoriesState?.map(cat => {
            return (
              <TabCollapse 
                key={cat.selfID} 
                icon={handleDrawIcon(cat.name)} 
                title={cat.name} 
                description={cat.description}
                price={cat.price}
                collapsedTab={cat?.isExpanded}
                handleSelectTab={() => handleSelectTab(cat.selfID, !cat?.isExpanded)}
                onToggleCheckbox={() => handleToggle(!cat?.isChecked, cat.selfID)}
                toggle={cat.isChecked}
              />
            )
          })
        }

        <Link to='/AdditionalQuestions'>
          <NextButton>next</NextButton>
        </Link>
      </BookContent>
    </BookNow>
  );
};

const TabCollapse = (props) => {
  return (
    <BookTab collapsed={props.collapsedTab}>
      <FlexBetween>
        <FlexGrow onClick={() => props.handleSelectTab()}>
          <img src={props.icon} alt='Area' />
          <p style={{ marginLeft: 20 }}>{props.title}</p>
          <CollapseArrow
            collapsed={props.collapsedTab}
            src={arrow}
            alt='arrow'
            className='ml-3'
          />
        </FlexGrow>
        <Flex onClick={props.onToggleCheckbox}>
          { !props.toggle ? 
              <Checkbox></Checkbox>
              :
              <CheckboxChecked>
                <img src={check} alt='Area' />
              </CheckboxChecked> 
          }
        </Flex>
      </FlexBetween>
      {
        props.collapsedTab ?
          <CollapseHidden>
            <p>{props.description}</p>
            <Price>{`$${props.price}`}</Price>
          </CollapseHidden>
          : null  
    }
    </BookTab>
  );
};

export default ExtraServices;
