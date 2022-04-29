/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import _get from 'lodash/get';
import _compact from 'lodash/compact';

import {
  EngagementPriorityField,
  TargetAudienceField,
  WorkProgrammeActivityField,
} from '../../../Atoms';

/**
 * Associated initiatives section organism for the Deposit Interface.
 *
 * @type Molecule
 */
export const AssociatedInitiativeSection = ({ recordContext }) => {
  return (
    <>
      <WorkProgrammeActivityField
        required
        initialSuggestions={
          _compact([
            _get(recordContext, 'ui.geo_work_programme_activity', null),
          ]) || null
        }
      />

      <EngagementPriorityField
        required
        initialSuggestions={_get(
          recordContext,
          'ui.engagement_priorities',
          null
        )}
      />

      <TargetAudienceField
        required
        initialSuggestions={_get(recordContext, 'ui.target_audiences', null)}
      />
    </>
  );
};
