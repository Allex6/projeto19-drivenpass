import { cards } from '@prisma/client';

export type CardCreate = Omit<cards, 'id' | 'createdAt'>