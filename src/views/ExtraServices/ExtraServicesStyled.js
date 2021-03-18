import styled from 'styled-components';

const BookNow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;
const BookContent = styled.div`
  width: 800px;
`;
const BookTitle = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const BookTab = styled.div`
  background: linear-gradient(
      129.67deg,
      rgba(122, 127, 133, 0.4) 14.52%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    linear-gradient(133.76deg, #e6e7ed -18.17%, #f7f8fa 140.27%);
  background-blend-mode: soft-light, normal;
  // box-shadow: -2px -3px 8px #FAFAFC, 1px 1px 5px #B1B5C6, inset 1px 1px 3px #EBECF0;
  box-shadow: ${(props) =>
    props.collapsed
      ? '1px 1px 7px #EBECF0, inset -5px -4px 10px #FAFBFC, inset 3px 3px 8px #BDC1D1;'
      : '-2px -3px 8px #FAFAFC, 1px 1px 5px #B1B5C6, inset 1px 1px 3px #EBECF0;'};

  border-radius: 8px;
  // display: flex;
  // align-items:center;
  // justify-content: space-between;
  // height: 66px;
  padding: 20px;
  margin-bottom: 15px;
  p {
    font-weight: bold;
    font-size: 13px;
    // margin-left: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const FlexGrow = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  cursor: pointer;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  background: linear-gradient(
      129.67deg,
      rgba(122, 127, 133, 0.4) 14.52%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    linear-gradient(135deg, #b4b2f1 0%, #7838ff 100%);
  background-blend-mode: soft-light, normal;
  box-shadow: -2px -3px 8px #fafafc, 1px 1px 5px #b1b5c6,
    inset 1px 1px 3px #ebecf0;
  text-transform: uppercase;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  padding: 0 19px;
  margin: 0 0 20px 0;
  outline: none;
  font-size: 16px;
  border: none;
  color: #ffffff;
  font-weight: bold;
  transition: all 0.2s;
  :hover {
    opacity: 0.8;
  }
`;
const CollapseHidden = styled.div`
  margin-top: 30px;
  p {
    font-size: 14px;
    color: #757e95;
    margin-bottom: 20px !important;
    font-weight: 400;
  }
`;

const CollapseArrow = styled.img`
  transition: all 0.2s ease;
  transform: ${(props) =>
    props.collapsed ? 'rotate(180deg)' : 'rotate(0deg)'};
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;

const Price = styled.h5`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  text-align: right;
`;

const Checkbox = styled.div`
  background: #ebecf0;
  box-shadow: inset -2px -2px 6px #ffffff, inset 2px 2px 3px #bdc1d1;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckboxChecked = styled.div`
  background-color: linear-gradient(
      129.67deg,
      rgba(122, 127, 133, 0.4) 14.52%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    #ebecf0;
  box-shadow: -2px -3px 8px #fafafc, 1px 1px 5px rgba(177, 181, 198, 0.339052),
    inset 1px 1px 3px #ebecf0 !important;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  BookNow,
  BookContent,
  BookTitle,
  BookTab,
  Flex,
  FlexGrow,
  FlexBetween,
  NextButton,
  CollapseHidden,
  CollapseArrow,
  Price,
  Checkbox,
  CheckboxChecked,
};
