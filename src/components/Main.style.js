import styled from 'styled-components';

export const MainCont = styled.main`
  margin: 50px auto;
  padding: 30px 5%;
  background-color: #242e4c;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 100%;
  max-width: 800px;

  & hr {
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;

  & h1 {
    font-size: 1.5rem;
    color: var(--clr-primary-9);
    font-weight: 500;
  }
`;

export const AddBtn = styled.button`
  background-color: #f28ab2;
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 10px;
  transition: var(--transition);

  &:hover {
    background-color: #be2a63;
  }

  & p {
    font-size: 0.7rem;
    font-weight: 600;
    margin: 0;
    color: var(--clr-primary-5);
  }
`;

export const EntryAlertCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomCont = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`;

export const DropDownItems = styled.div`
  display: none;
  position: absolute;
  background-color: var(--clr-primary-10);
  text-align: center;
  min-width: 60px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  z-index: 1;
  border-radius: 4px;
  top: 0px;
  right: -10px;
  transform: translate(-50%);
`;

export const DropDownBtn = styled.button`
  border-radius: 5px;
  border-color: transparent;
  cursor: pointer;
  padding: 7px 5px;
  transition: var(--transition);
  font-size: 0.85rem;

  &:hover {
    background-color: var(--clr-primary-9);
  }
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  background-color: #f28ab2;
  border-radius: 6px;
  padding: 5px;
  transition: var(--transition);

  &:hover {
    background-color: #be2a63;
  }

  & span {
    font-weight: 600;
    margin: 0;
    color: var(--clr-primary-5);
  }

  &:hover ${DropDownItems} {
    display: flex;
    flex-direction: row;
  }
`;
