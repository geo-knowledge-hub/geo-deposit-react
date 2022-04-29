/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Formik } from 'formik';
import { CreatibutorsField } from './CreatibutorsField';

it('renders without crashing with only the required props', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Formik>
      {(props) => <CreatibutorsField fieldPath={'creatibutors'} />}
    </Formik>,
    div
  );
});

// ToDo: Test if the children is receiving the Parent props.
