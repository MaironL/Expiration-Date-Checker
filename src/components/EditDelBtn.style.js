import styled from 'styled-components';

export const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: space-around;
`;

export const DeleteBtn = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 5px 0.15rem;
  transition: var(--transition);
  color: hsl(360, 71%, 66%);

  &:hover {
    color: hsl(360, 67%, 44%);
  }
`;

export const EditBtn = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 5px 0.15rem;
  transition: var(--transition);
  color: hsl(125, 71%, 66%);

  &:hover {
    color: hsl(125, 67%, 44%);
  }
`;
