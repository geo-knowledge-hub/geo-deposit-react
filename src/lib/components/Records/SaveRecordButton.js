// This file is part of React-Invenio-Deposit
// Copyright (C) 2020-2022 CERN.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2022 Graz University of Technology.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { i18next } from "@translations/i18next";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  DepositFormSubmitActions,
  DepositFormSubmitContext,
} from "../../DepositFormSubmitContext";
import { DRAFT_SAVE_STARTED } from "../../state/types";
import { scrollTop } from "../../utils";
import _omit from "lodash/omit";
import { connect as connectFormik } from "formik";
import PropTypes from "prop-types";

export class SaveRecordButtonComponent extends Component {
  static contextType = DepositFormSubmitContext;

  handleSave = (event) => {
    const { formik } = this.props;
    const { setSubmitContext } = this.context;
    const { handleSubmit } = formik;

    setSubmitContext(DepositFormSubmitActions.SAVE_WITHOUT_CHANGE_URL);
    handleSubmit(event);
    scrollTop();
  };

  render() {
    const { actionState, formik, ...ui } = this.props;
    const { isSubmitting } = formik;

    const uiProps = _omit(ui, ["dispatch"]);

    return (
      <Button
        name="save"
        disabled={isSubmitting}
        onClick={(event) => this.handleSave(event)}
        icon="save"
        loading={isSubmitting && actionState === DRAFT_SAVE_STARTED}
        labelPosition="left"
        content={i18next.t("Save draft")}
        {...uiProps}
      />
    );
  }
}

SaveRecordButtonComponent.propTypes = {
  formik: PropTypes.object.isRequired,
  actionState: PropTypes.string,
};

SaveRecordButtonComponent.defaultProps = {
  actionState: undefined,
};

const mapStateToProps = (state) => ({
  actionState: state.deposit.actionState,
});

export const SaveRecordButton = connect(
  mapStateToProps,
  null
)(connectFormik(SaveRecordButtonComponent));
