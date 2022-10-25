// This file is part of React-Invenio-Deposit
// Copyright (C) 2020-2021 CERN.
// Copyright (C) 2020-2021 Northwestern University.
// Copyright (C)      2021 Graz University of Technology.
// Copyright (C) 2022 Group on Earth Observations.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { Card, Divider, Form, Header } from "semantic-ui-react";
import { i18next } from "@translations/i18next";
import { MetadataAccess, FilesAccess, EmbargoAccess, AccessMessage } from "./Access";

export class AccessRightFieldResourceCmp extends Component {
  /** Top-level Access Right Component */

  render() {
    const {
      formik, // this is our access to the shared current draft
      packageRecord,
    } = this.props;

    const packageAccess = packageRecord?.access;
    const packageAccessRecord = packageAccess?.record;

    const isMetadataOnly = !formik.form.values.files.enabled;

    return (
      <Card className="access-right" fluid raised={false}>
        <Form.Field required>
          <Card.Content>
            <MetadataAccess
              recordAccess={formik.field.value.record}
              communityAccess={packageAccessRecord}
            />

            <Divider hidden />

            <FilesAccess
              access={formik.field.value}
              accessCommunity={packageAccessRecord}
              metadataOnly={isMetadataOnly}
            />

            <Divider hidden />

            <AccessMessage
              access={formik.field.value}
              accessCommunity={packageAccessRecord}
              metadataOnly={isMetadataOnly}
            />

            <Divider hidden />
          </Card.Content>
          <Card.Content>
            <Card.Header as={Header} size="tiny">
              {i18next.t("Options")}
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <EmbargoAccess
              access={formik.field.value}
              accessCommunity={packageAccessRecord}
              metadataOnly={isMetadataOnly}
            />
          </Card.Content>
        </Form.Field>
      </Card>
    );
  }
}

AccessRightFieldResourceCmp.propTypes = {
  formik: PropTypes.object.isRequired,
  packageRecord: PropTypes.object,
};

AccessRightFieldResourceCmp.defaultProps = {
  packageRecord: {},
};

export class AccessRightFieldResource extends Component {
  render() {
    const { fieldPath } = this.props;

    return (
      <Field name={fieldPath}>
        {(formik) => <AccessRightFieldResourceCmp formik={formik} {...this.props} />}
      </Field>
    );
  }
}

AccessRightFieldResource.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelIcon: PropTypes.string,
  isMetadataOnly: PropTypes.bool,
};

AccessRightFieldResource.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  fieldPath: "access",
  labelIcon: undefined,
  isMetadataOnly: undefined,
};
