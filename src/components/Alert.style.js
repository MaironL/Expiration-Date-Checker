import styled from 'styled-components';

export const AlertCont = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: ${(props) =>
    props.action === 'success'
      ? '#d4edda'
      : props.action === 'danger'
      ? '#f8d7da'
      : props.action === 'edit'
      ? '#d4edda'
      : 'white'};
  color: ${(props) =>
    props.action === 'success'
      ? '#155724'
      : props.action === 'danger'
      ? '#721c24'
      : props.action === 'edit'
      ? '#155724'
      : 'white'};
  margin-bottom: 10px;
  height: 2rem;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 0 5px;
  & p {
    margin: 0;
    padding: 0 2px;
  }
  transition: var(--transition);
`;
