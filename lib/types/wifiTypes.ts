import { wifis } from '@prisma/client';

export type WifiCreate = Omit<wifis, 'id' | 'createdAt'>