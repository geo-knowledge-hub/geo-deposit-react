/*
 * This file is part of GEO-Deposit-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Deposit-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { useMemo } from 'react';
import { Formik } from 'formik';

import { Button, Container, Message, Header } from 'semantic-ui-react';

import {
  WorkProgrammeActivityField,
  TargetAudienceField,
  EngagementPriorityField,
} from '../lib/components';
import { BaseTable } from '../lib/components/Atoms/Tables/BaseTable';

/**
 * GEO Deposit App component example.
 */
const App = () => {
  // Table configurations
  const baseTableColumnsExample = useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        id: 'edit-selector',
        Header: () => null,
        Cell: ({ row }) => (
          <Button
            onClick={() => {
              alert(
                `You have selected the row(${row.id}) associated to ${row.values.name}`
              );
            }}
          >
            Edit
          </Button>
        ),
      },
    ];
  });

  const baseTableDataExample = useMemo(
    () => [
      {
        name: 'Gabriela',
        role: 'Producer',
        type: 'Creator',
      },
      {
        name: 'José',
        role: 'Producer',
        type: 'Contributor',
      },
    ],
    []
  );

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as="h1">GEO Deposit React (Components showcase)</Header>
      <Message info>
        <Message.Header>About</Message.Header>
        <p>
          This page shows example of components available on GEO Deposit Page.
        </p>
      </Message>

      <Header as="h2">Form fields</Header>
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
                title_l10n: 'GEO Vision for Energy (GEO-VENER)',
                id: 'geo-activities-gos4m',
              },
            ]}
          />

          <BaseTable
            columnsConfiguration={baseTableColumnsExample}
            data={baseTableDataExample}
          />
        </>
      </Formik>
    </Container>
  );
};

export default App;
