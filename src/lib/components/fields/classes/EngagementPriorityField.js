/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import PropTypes from 'prop-types';

import { VocabularySuggestionField } from './VocabularySuggestionField';

// import { i18next } from '@translations/i18next';

/**
 * Engagement Priority Field.
 *
 * Note:
 *  This component is based on `LanguagesField` provided by
 *  the `react-invenio-deposit` library.
 */
export const EngagementPriorityField = ({ fieldPath, ...fieldProps }) => {
  return (
    <VocabularySuggestionField
      fieldPath={fieldPath}
      suggestionAPIUrl="/api/vocabularies/engagementprioritiestypes"
      suggestionAPIHeaders={{
        Accept: 'application/vnd.inveniordm.v1+json',
      }}
      {...fieldProps}
    />
  );
};

EngagementPriorityField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  serializeSuggestions: PropTypes.func,
};

EngagementPriorityField.defaultProps = {
  fieldPath: 'metadata.engagement_priorities',
  label: 'Engagement Priorities',
  labelIcon: 'flag',
  multiple: true,
  clearable: true,
  required: true,
  placeholder: 'Search for Engagement Priorities',
  noQueryMessage: 'Start typing to search for an engagement priority',
};
