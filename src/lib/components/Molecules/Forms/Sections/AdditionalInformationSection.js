/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import _get from 'lodash/get';

import {
  LanguagesField,
  PublicationDateField,
  SubjectsField,
} from 'react-invenio-deposit';

/**
 * Additional information section molecules for the Deposit Interface.
 *
 * @type Molecule
 */
export const AdditionalInformationSection = ({
  vocabulariesContext,
  recordContext,
}) => {
  return (
    <>
      <PublicationDateField required />

      <SubjectsField
        initialOptions={_get(recordContext, 'ui.subjects', null)}
        limitToOptions={_get(
          vocabulariesContext,
          'metadata.subjects.limit_to',
          null
        )}
      />

      <LanguagesField
        initialOptions={_get(recordContext, 'ui.languages', []).filter(
          (lang) => lang !== null
        )} // needed because dumped empty record from backend gives [null]
        serializeSuggestions={(suggestions) =>
          suggestions.map((item) => ({
            text: item.title_l10n,
            value: item.id,
            key: item.id,
          }))
        }
      />
    </>
  );
};
