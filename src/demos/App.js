/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import { Formik } from 'formik';

import {
  WorkProgrammeActivityField,
  TargetAudienceField,
  EngagementPriorityField,
} from '../lib/components';

/**
 * GEO Deposit App component example.
 */
const App = () => {
  return (
    <div className={'form-div'}>
      <h1>GEO Deposit React</h1>
      <Formik
        initialValues={{
          metadata: {
            engagement_priorities: ['sdg-goal-17', 'sdg-goal-16'],
            target_audiences: ['tu-climate-researcher', 'tu-crisis-manager'],
            geo_work_programme_activity: 'geo-activities-gos4m',
          },
        }}
      >
        <>
          <TargetAudienceField
            initialSuggestions={[
              {
                title_l10n: 'Climate Researcher',
                id: 'tu-climate-researcher',
              },
              {
                title_l10n: 'Crisis manager',
                id: 'tu-crisis-manager',
              },
            ]}
          />
          <EngagementPriorityField
            initialSuggestions={[
              {
                title_l10n: 'SDG GOAL 16',
                id: 'sdg-goal-16',
              },
              {
                title_l10n: 'SDG GOAL 17',
                id: 'sdg-goal-17',
              },
            ]}
          />
          <WorkProgrammeActivityField
            initialSuggestions={[
              {
                title_l10n: 'GOS FOUR EME',
                id: 'geo-activities-gos4m',
              },
            ]}
          />
        </>
      </Formik>
    </div>
  );
};

export default App;
