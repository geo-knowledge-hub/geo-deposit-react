/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { RichInputField, SelectField, TextField } from 'react-invenio-forms';

// import { i18next } from '@translations/i18next';
import { i18next } from '../../../i18next'; // temporary
import { Grid } from 'semantic-ui-react';
import { ResourceTypeField } from 'react-invenio-deposit';

/**
 * Styled components
 */
const RelationFieldStyled = styled.div`
  margin-bottom: 1rem;
`;

/**
 * @name ExternalResourceForm
 * @summary External Resource Form.
 *
 */
export const ExternalResourceForm = ({ fieldPath, editorConfig, options }) => {
  return (
    <>
      <TextField
        fieldPath={`${fieldPath}.title`}
        label={i18next.t('Title')}
        required
        width={4}
      />

      <RichInputField
        fieldPath={`${fieldPath}.description`}
        editorConfig={editorConfig}
        label={i18next.t('Description')}
        optimized
      />

      <ResourceTypeField
        clearable
        fieldPath={`${fieldPath}.resource_type`}
        labelIcon={''} // Otherwise breaks alignment
        options={options.resource_type}
        width={6}
        labelclassname="small field-label-class"
      />

      <RelationFieldStyled>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <SelectField
                clearable
                fieldPath={`${fieldPath}.relation_type`}
                label={i18next.t('Relation')}
                optimized
                options={options.relations}
                placeholder={i18next.t('Select relation...')}
                required
                width={3}
              />
            </Grid.Column>

            <Grid.Column>
              <SelectField
                clearable
                fieldPath={`${fieldPath}.scheme`}
                label={i18next.t('Scheme')}
                optimized
                options={options.scheme}
                required
                width={2}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </RelationFieldStyled>

      <TextField
        fieldPath={`${fieldPath}.identifier`}
        label={i18next.t('Identifier')}
        required
        width={4}
      />
    </>
  );
};

ExternalResourceForm.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  editorConfig: PropTypes.object,
  options: PropTypes.shape({
    resource_type: PropTypes.array,
    relations: PropTypes.array,
    scheme: PropTypes.array,
  }),
};

ExternalResourceForm.defaultProps = {
  fieldPath: 'metadata.related_identifiers',
  options: {
    resource_type: [],
    relations: [],
    scheme: [],
  },
};
