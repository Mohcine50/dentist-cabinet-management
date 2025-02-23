import { DemLoadAllTreatmentsQuery } from '../../../data-access/generated/generated';

export type Treatment = {
  name: string;
  id: string;
  price: number;
  sessions: number;
  updatedAt: string | null;
  createdAt: string;
  createdBy: {
    username: string;
  };
  updatedBy: {
    username: string;
  } | null;
};
