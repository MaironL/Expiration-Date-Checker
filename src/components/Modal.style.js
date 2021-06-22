import styled from 'styled-components';

export const ModalCont = styled.div`
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 150;

  & input {
    font-size: 1rem;
    padding: 10px;
    background-color: var(--clr-primary-6);
    color: var(--clr-primary-4);
    border-color: transparent;
    height: 50px;
    min-width: 240px;
    border-bottom: 1px solid var(--clr-primary-5);
    transition: var(--transition);

    &:hover {
      background-color: var(--clr-primary-5);
    }

    &:focus {
      font-weight: 500;
      color: var(--clr-primary-8);
      background-color: var(--clr-primary-5);
    }

    &::placeholder {
      color: var(--clr-primary-7);
      font-size: 0.8rem;
      font-weight: 500;
      opacity: 1;
    }
  }
  & input:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & input:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Focus = styled.div`
  background-color: rgba(11, 14, 24, 0.91);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const ModalBtn = styled.button`
  margin-top: 40px;
  border-color: transparent;
  border-radius: 10px;
  background-color: rgba(180, 89, 147, 0.9);
  height: 40px;
  width: 240px;
  color: var(--clr-primary-8);
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    background-color: rgba(180, 89, 147, 0.7);
    color: var(--clr-primary-8);
  }

  &:focus {
    box-shadow: 0 0 8px rgba(47, 13, 35, 1) inset;
  }
`;

export const CloseBtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-size: 1.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-grey-7);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--clr-grey-10);
  }
`;
