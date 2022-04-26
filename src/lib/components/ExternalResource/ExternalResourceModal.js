/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { i18next } from '@translations/i18next';
import { i18next } from '../../../i18next'; // temporary
import { Modal } from 'semantic-ui-react';

import { ExternalResourceForm } from './ExternalResourceForm';

/**
 * @name ExternalResourceModal
 * @summary External Resource Modal
 *
 */
export const ExternalResourceModal = ({ fieldPath, modalProps, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        {...modalProps}
      >
        <Modal.Header>{i18next.t('External resources')}</Modal.Header>

        <Modal.Content>
          <ExternalResourceForm
            fieldPath={fieldPath}
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
          options={options}
        </Modal.Content>
      </Modal>
    </>
  );
};

ExternalResourceModal.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  modalProps: PropTypes.object,
  options: PropTypes.object,
};
