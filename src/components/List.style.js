import styled from 'styled-components';

export const PhoneLayout = styled.div`
  display: block;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const FullLayout = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
  }
`;

export const CategoryCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--clr-primary-4);
  transition: var(--transition);
  padding-bottom: 5px;

  & div p {
    margin: 5px 0 5px 0;
    color: var(--clr-primary-10);
    font-weight: 500;
    margin-bottom: 8px;
    text-decoration: underline;
  }

  &:hover {
    border-bottom: 4px solid var(--clr-primary-4);
    border-radius: 10px;
  }
`;

export const DataDisplay = styled.table`
  color: var(--clr-primary-9);
  border-collapse: collapse;
  text-align:left;
  table-layout: fixed;

  @media screen and (min-width: 600px) {
    width: 100%;
  }

  & td {
    font-weight: 400;
    padding: 5px 0 5px 15px;
    @media screen and (min-width: 600px) {
    padding: 0px;
  }
  & th {
    border-collapse: collapse;
    padding: 5px;
    font-weight: 500;
  }
`;
