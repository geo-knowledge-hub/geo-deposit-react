/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import _get from 'lodash/get';
import { getIn, FieldArray } from 'formik';

import { Form } from 'semantic-ui-react';

import { CREATIBUTOR_TYPE } from './type';

const CreatibutorsFieldForm = ({
  form: { values, errors, initialErrors, initialValues },
  remove: formikArrayRemove,
  replace: formikArrayReplace,
  move: formikArrayMove,
  name: fieldPath,
  roleOptions,
  schema,
  children,
}) => {
  const formikValues = getIn(values, fieldPath, []);
  const formikInitialValues = getIn(initialValues, fieldPath, []);
  const error = getIn(errors, fieldPath, null);
  const initialError = getIn(initialErrors, fieldPath, null);

  const associatedPeopleError =
    error || (formikValues === formikInitialValues && initialError);

  const associatedEntityData = getIn(values, fieldPath, []).map(
    (value, index, array) => {
      const key = `${fieldPath}.${index}`;
      const personOrOrgPath = 'person_or_org';
      const typeFieldPath = `${personOrOrgPath}.type`;
      const familyNameFieldPath = `${personOrOrgPath}.family_name`;
      const givenNameFieldPath = `${personOrOrgPath}.given_name`;
      const nameFieldPath = `${personOrOrgPath}.name`;
      const affiliationsFieldPath = 'affiliations';

      const identifiersError =
        associatedPeopleError &&
        associatedPeopleError[index]?.person_or_org?.identifiers;

      const isPerson =
        _get(value, typeFieldPath, CREATIBUTOR_TYPE.PERSON) ===
        CREATIBUTOR_TYPE.PERSON;

      const creatibutorsData = isPerson
        ? {
            familyName: _get(value, familyNameFieldPath),
            givenName: _get(value, givenNameFieldPath),
            affiliationName: _get(value, `${affiliationsFieldPath}[0].name`),
          }
        : {
            familyName: _get(value, nameFieldPath),
            affiliationName: _get(value, `${affiliationsFieldPath}[0].name`),
          };

      return {
        key,
        index,
        identifiersError,
        roleOptions,
        schema,

        compKey: key,

        // Formik operation handlers
        removeCreatibutor: formikArrayRemove,
        replaceCreatibutor: formikArrayReplace,
        moveCreatibutor: formikArrayMove,

        // Formik Data
        initialCreatibutor: value,
        ...creatibutorsData,
      };
    }
  );

  return (
    <Form.Field
      required={schema === 'creators'}
      className={associatedPeopleError && 'error'}
    >
      <children formikData={associatedEntityData} />
    </Form.Field>
  );
};

export const CreatibutorsField = ({ fieldPath, ...props }) => (
  <FieldArray
    name={fieldPath}
    component={(formikProps) => (
      <CreatibutorsFieldForm {...formikProps} {...props} />
    )}
  />
);
