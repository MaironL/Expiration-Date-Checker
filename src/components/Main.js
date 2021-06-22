import React from 'react';
import * as S from './Main.style.js';
import List from './List';
import AlertType from './Alert';
import { useGlobalContext } from '../context';

export const Main = () => {
  const { addEntry, rowsOrAll } = useGlobalContext();

  return (
    <S.MainCont className='Main__MainCont'>
      <S.Title className='Main__Title'>
        <h1>Expiration Date Checker</h1>
      </S.Title>
      <S.EntryAlertCont className='Main__EntryAlertCont'>
        <S.AddBtn className='Main__AddBtn' onClick={addEntry}>
          <p> New Entry</p>
        </S.AddBtn>
        <AlertType />
      </S.EntryAlertCont>
      <hr />
      <List />
      <S.BottomCont className='Main__BottomCont'>
        <S.DropDown className='Main__DropDown'>
          <span>Rows</span>
          <S.DropDownItems className='Main__DropDownItems'>
            <S.DropDownBtn
              className='Main__DropDownBtn'
              onClick={() => rowsOrAll(5, true)}
            >
              5
            </S.DropDownBtn>
            <S.DropDownBtn
              className='Main__DropDownBtn'
              onClick={() => rowsOrAll(10, true)}
            >
              10
            </S.DropDownBtn>
            <S.DropDownBtn
              className='Main__DropDownBtn'
              onClick={() => rowsOrAll(15, true)}
            >
              25
            </S.DropDownBtn>
            <S.DropDownBtn
              className='Main__DropDownBtn'
              onClick={() => rowsOrAll(0, false)}
            >
              All
            </S.DropDownBtn>
          </S.DropDownItems>
        </S.DropDown>
      </S.BottomCont>
    </S.MainCont>
  );
};

export default Main;
