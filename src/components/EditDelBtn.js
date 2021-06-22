import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import * as S from './EditDelBtn.style';
import { useGlobalContext } from '../context';

const EditDelBtn = ({ id }) => {
  const { deleteItem, editItem } = useGlobalContext();

  return (
    <S.BtnCont className='EditDelBtn__BtnCont'>
      <S.EditBtn
        className='EditDelBtn__EditBtn'
        type='button'
        onClick={() => editItem(id)}
      >
        <FaEdit />
      </S.EditBtn>
      <S.DeleteBtn
        className='EditDelBtn__DeleteBtn'
        type='button'
        onClick={() => deleteItem(id)}
      >
        <FaTrash />
      </S.DeleteBtn>
    </S.BtnCont>
  );
};

export default EditDelBtn;
