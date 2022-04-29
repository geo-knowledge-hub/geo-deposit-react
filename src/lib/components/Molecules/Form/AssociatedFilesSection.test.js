/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from 'redux-mock-store';

import { Formik } from 'formik';
import { Provider } from 'react-redux';
import { AssociatedFilesSection } from './AssociatedFilesSection';

const mockStore = configureStore([]);

it('renders without crashing without props', () => {
  let store;
  let component;

  const div = document.createElement('div');

  beforeEach(() => {
    store = mockStore({
      files: {
        links: [],
        entries: [],
      },
    });
  });

  component = (
    <Provider store={store}>
      <AssociatedFilesSection />
    </Provider>
  );

  ReactDOM.render(<Formik>{(props) => <component />}</Formik>, div);
});
