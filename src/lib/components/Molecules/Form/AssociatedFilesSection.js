/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import _get from 'lodash/get';

import { FileUploader } from 'react-invenio-deposit';

/**
 * Associated files section organism for the Deposit Interface.
 *
 * ToDo: Implement Embargo component
 */
export const AssociatedFilesSection = ({ recordContext }) => {
  return (
    <>
      <FileUploader
        isDraftRecord={!_get(recordContext, 'is_published', false)} // by default, a record is not published
        quota={{
          maxFiles: 100,
          maxStorage: 10 ** 10, // ToDo: Move this to the configuration context
        }}
      />
    </>
  );
};
