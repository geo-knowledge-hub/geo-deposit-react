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
import { AssociatedInitiativeSection } from './AssociatedInitiativeSection';

it('renders without crashing with all props', () => {
  const div = document.createElement('div');

  const limitToOptions = [
    { text: 'All', value: 'all' },
    { text: 'FOS', value: 'fos' },
  ];

  ReactDOM.render(
    <Formik>
      {(props) => (
        <AssociatedInitiativeSection
          vocabulariesContext={{
            metadata: {
              subjects: {
                limit_to: limitToOptions,
              },
            },
          }}
          recordContext={{
            ui: null,
          }}
        />
      )}
    </Formik>,
    div
  );
});
