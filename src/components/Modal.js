import React from 'react';
import * as S from './Modal.style';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { modalShow, closeModal, getNewEntry, entry, submitHandler } =
    useGlobalContext();
  return (
    <>
      {modalShow && (
        <S.Focus className='Modal__Focus'>
          <S.ModalCont className='Modal__ModalCont'>
            <S.CloseBtnCont className='Modal__CloseBtnCont'>
              <FaTimes onClick={closeModal} />
            </S.CloseBtnCont>
            <S.ModalForm className='Modal__ModalForm'>
              <input
                type='text'
                placeholder='Products'
                onChange={getNewEntry}
                value={entry.products}
                name='products'
              />
              <input
                type='number'
                placeholder='Price'
                onChange={getNewEntry}
                value={entry.price}
                name='price'
              />
              <input
                type='date'
                placeholder='Expiration date'
                onChange={getNewEntry}
                value={entry.expDate}
                name='expDate'
              />
              <S.ModalBtn
                className='Modal__ModalBtn'
                type='submit'
                onClick={submitHandler}
              >
                Accept
              </S.ModalBtn>
            </S.ModalForm>
          </S.ModalCont>
        </S.Focus>
      )}
    </>
  );
};

export default Modal;
