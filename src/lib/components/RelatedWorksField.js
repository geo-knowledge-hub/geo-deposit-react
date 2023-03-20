// This file is part of React-Invenio-Deposit
// Copyright (C) 2020-2021 CERN.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2021 Graz University of Technology.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  TextField,
  GroupField,
  ArrayField,
  FieldLabel,
  SelectField,
} from "react-invenio-forms";
import { Button, Form, Icon } from "semantic-ui-react";

import { emptyRelatedWork } from "../record";
import { ResourceTypeField } from "./ResourceTypeField";
import { i18next } from "@translations/i18next";

export class RelatedWorksField extends Component {
  render() {
    const { fieldPath, label, labelIcon, required, options, showEmptyValue } =
      this.props;

    return (
      <>
        <label className="helptext" style={{ marginBottom: "10px" }}>
          {i18next.t(
            "Specify identifiers of the materials associated with the current record that will not be uploaded (e.g., PDF, Web pages, GitHub repository). Supported identifiers include DOI, URLs, arXiv, and many others."
          )}
        </label>
        <ArrayField
          addButtonLabel={i18next.t("Add external material")}
          defaultNewValue={emptyRelatedWork}
          fieldPath={fieldPath}
          label={<FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />}
          required={required}
          showEmptyValue={showEmptyValue}
        >
          {({ arrayHelpers, indexPath }) => {
            const fieldPathPrefix = `${fieldPath}.${indexPath}`;

            return (
              <div className="invenio-group-field-multiple-line">
                <GroupField optimized>
                  <TextField
                    fieldPath={`${fieldPathPrefix}.title`}
                    label={i18next.t("Title")}
                    width={6}
                  />
                  <TextField
                    fieldPath={`${fieldPathPrefix}.description`}
                    label={i18next.t("Description")}
                    width={10}
                  />

                  <SelectField
                    clearable
                    fieldPath={`${fieldPathPrefix}.relation_type`}
                    label={i18next.t("Relation")}
                    optimized
                    options={options.relations}
                    placeholder={i18next.t("Select relation...")}
                    required
                    width={4}
                  />

                  <TextField
                    fieldPath={`${fieldPathPrefix}.identifier`}
                    label={i18next.t("Identifier")}
                    required
                    width={4}
                  />

                  <SelectField
                    clearable
                    fieldPath={`${fieldPathPrefix}.scheme`}
                    label={i18next.t("Scheme")}
                    optimized
                    options={options.scheme}
                    required
                    width={2}
                  />

                  <ResourceTypeField
                    clearable
                    fieldPath={`${fieldPathPrefix}.resource_type`}
                    labelIcon="" // Otherwise breaks alignment
                    options={options.resource_type}
                    width={5}
                    labelclassname="small field-label-class"
                  />

                  <Form.Field>
                    <Button
                      aria-label={i18next.t("Remove field")}
                      className="close-btn"
                      icon
                      size="small"
                      onClick={() => arrayHelpers.remove(indexPath)}
                    >
                      <Icon name="close" />
                    </Button>
                  </Form.Field>
                </GroupField>
              </div>
            );
          }}
        </ArrayField>
      </>
    );
  }
}

RelatedWorksField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.object.isRequired,
  showEmptyValue: PropTypes.bool,
};

RelatedWorksField.defaultProps = {
  label: i18next.t("External materials"),
  labelIcon: "barcode",
  required: undefined,
  showEmptyValue: false,
};
