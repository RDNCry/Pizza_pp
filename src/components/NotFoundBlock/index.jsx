import React from 'react';

import styles from '../NotFoundBlock/NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Ничего не найдено</h1>
      <p>К сожалению, данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFoundBlock;
