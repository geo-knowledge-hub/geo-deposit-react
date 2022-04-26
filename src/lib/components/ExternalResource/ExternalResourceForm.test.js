/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Formik } from 'formik';

import { ExternalResourceForm } from './ExternalResourceForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Formik>
      {(props) => (
        <Form>
          <ExternalResourceForm
            fieldPath={'fieldPath'}
            editorConfig={{
              removePlugins: [
                'Image',
                'ImageCaption',
                'ImageStyle',
                'ImageToolbar',
                'ImageUpload',
                'MediaEmbed',
                'Table',
                'TableToolbar',
                'TableProperties',
                'TableCellProperties',
              ],
            }}
          />
        </Form>
      )}
    </Formik>,
    div
  );
});
