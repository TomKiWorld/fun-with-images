import React, { Suspense } from 'react';
import Preloader from '../Preloader/Preloader';

const SuspenseLoad = (props) => {
  return (
    <Suspense fallback={<Preloader />}>
      {props.children}
    </Suspense>
  );
}

export default SuspenseLoad;
