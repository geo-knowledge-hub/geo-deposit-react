/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { Fragment } from 'react';

import _get from 'lodash/get';

import {
  DescriptionsField,
  PIDField,
  TitlesField,
} from 'react-invenio-deposit';

/**
 * Basic information section organism for the Deposit Interface.
 *
 * @type Molecule
 */
export const BasicInformationSection = ({
  configContext,
  vocabulariesContext,
  recordContext,
}) => {
  const recordUI = _get(recordContext, 'ui', {});

  return (
    <>
      <TitlesField
        options={vocabulariesContext.metadata.titles}
        recordUI={recordUI}
        required
      />

      <DescriptionsField
        options={vocabulariesContext.metadata.descriptions}
        recordUI={recordUI}
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

      {configContext.pids.map((pid) => (
        <Fragment key={pid.scheme}>
          <PIDField
            btnLabelDiscardPID={pid.btn_label_discard_pid}
            btnLabelGetPID={pid.btn_label_get_pid}
            canBeManaged={pid.can_be_managed}
            canBeUnmanaged={pid.can_be_unmanaged}
            fieldPath={`pids.${pid.scheme}`}
            fieldLabel={pid.field_label}
            isEditingPublishedRecord={
              recordContext.is_published === true // is_published is `null` at first upload
            }
            managedHelpText={pid.managed_help_text}
            pidLabel={pid.pid_label}
            pidPlaceholder={pid.pid_placeholder}
            pidType={pid.scheme}
            unmanagedHelpText={pid.unmanaged_help_text}
            required
          />
        </Fragment>
      ))}
    </>
  );
};
