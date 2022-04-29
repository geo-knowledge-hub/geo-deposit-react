/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { LicenseField, VersionField } from 'react-invenio-deposit';

/**
 * Legal information section organism for the Deposit Interface.
 * 
 * @type Molecule
 */
export const LegalSection = () => {
  return (
    <>
      <VersionField />

      <LicenseField
        fieldPath="metadata.rights"
        searchConfig={{
          searchApi: {
            axios: {
              headers: {
                Accept: 'application/vnd.inveniordm.v1+json',
              },
              url: '/api/vocabularies/licenses',
              withCredentials: false,
            },
          },
          initialQueryState: {
            filters: [['tags', 'recommended']],
          },
        }}
        serializeLicenses={(result) => ({
          title: result.title_l10n,
          description: result.description_l10n,
          id: result.id,
          link: result.props.url,
        })}
      />
    </>
  );
};
