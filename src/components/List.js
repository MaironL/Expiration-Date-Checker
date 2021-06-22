import React from 'react';
import * as S from './List.style';
import EditDelBtn from './EditDelBtn';
import { useGlobalContext } from '../context';

const List = () => {
  const { data, howMany, readRows } = useGlobalContext();

  let rows = data.slice(Math.max(data.length - howMany, 0));

  return (
    <>
      <S.PhoneLayout className='List__PhoneLayout'>
        {(readRows ? rows : data).map((item) => {
          const { products, price, expDate, status, id } = item;
          return (
            <S.CategoryCont className='List__CategoryCont' key={id}>
              <div>
                <p>{products}</p>
                <S.DataDisplay className='List__DataDisplay'>
                  <tr>
                    <th>Price:</th>
                    <td>${price}</td>
                  </tr>
                  <tr>
                    <th>Exp.date:</th>
                    <td>{expDate}</td>
                  </tr>
                  <tr>
                    <th>Status:</th>
                    <td>{`${status > 0 ? 'On Date' : 'Expired'}`}</td>
                  </tr>
                </S.DataDisplay>
              </div>
              <EditDelBtn id={id} />
            </S.CategoryCont>
          );
        })}
      </S.PhoneLayout>
      <S.FullLayout className='List__FullLayout'>
        {(readRows ? rows : data).map((item) => {
          const { products, price, expDate, status, id } = item;
          return (
            <S.CategoryCont className='List__CategoryCont' key={id}>
              <S.DataDisplay className='List__DataDisplay'>
                <tr>
                  <th colSpan='2'>Products</th>
                  <th>Price:</th>
                  <th>Exp.date:</th>
                  <th>Status:</th>
                </tr>
                <tr>
                  <td colSpan='2'>{products}</td>
                  <td>${price}</td>
                  <td>{expDate}</td>
                  <td>{`${status > 0 ? 'On Date' : 'Expired'}`}</td>
                </tr>
              </S.DataDisplay>
              <EditDelBtn id={id} />
            </S.CategoryCont>
          );
        })}
      </S.FullLayout>
    </>
  );
};

export default List;
