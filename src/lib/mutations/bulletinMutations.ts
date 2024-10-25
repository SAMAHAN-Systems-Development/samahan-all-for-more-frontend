'use client';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import {
  createBulletin,
  deleteBulletin,
  updateBulletin,
} from '../services/bulletinService';

// Not fully type safe because of the useMutationOptions type

export const useCreateBulletin = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { bulletinData: CreateBulletinData }
  >
) =>
  useMutation({
    mutationFn: ({ bulletinData }) => createBulletin(bulletinData),
    ...mutationOptions,
  });

export const useDeleteBulletin = (
  mutationOptions: UseMutationOptions<unknown, Error, { bulletinId: number }>
) =>
  useMutation({
    mutationFn: ({ bulletinId }) => deleteBulletin(bulletinId),
    ...mutationOptions,
  });

export const useUpdateBulletin = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { bulletinId: number; bulletinData: Partial<CreateBulletinData> }
  >
) =>
  useMutation({
    mutationFn: ({ bulletinId, bulletinData }) =>
      updateBulletin(bulletinId, bulletinData),
    ...mutationOptions,
  });
