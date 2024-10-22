/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { GetBulletinDto } from '../types/dto/getBulletinData.type';

import { _delete, _get, _post, _put } from '@/lib/client/client';

const getBulletins = async (
  bulletinFilters?: GetBulletinDto
): Promise<Bulletin[]> => {
  const response = await _get<Bulletin[], GetBulletinDto>(
    '/api/bulletins',
    bulletinFilters
  );
  return response.data;
};

const createBulletin = async (
  bulletin: CreateBulletinData
): Promise<Bulletin> => {
  const response = await _post<Bulletin, CreateBulletinData>(
    '/api/bulletins',
    bulletin
  );
  return response.data;
};

const updateBulletin = async (
  id: number,
  bulletin: Partial<CreateBulletinData>
): Promise<Bulletin> => {
  const response = await _put<Bulletin, Partial<CreateBulletinData>>(
    `/api/bulletins/${id}`,
    bulletin
  );
  return response.data;
};

const deleteBulletin = async (id: number): Promise<void> => {
  await _delete<void>(`/api/bulletins/${id}`);
};

export { getBulletins, createBulletin, updateBulletin, deleteBulletin };
