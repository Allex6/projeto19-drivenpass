import { users } from '@prisma/client';

export type UserCreate = Omit<users, 'id' | 'createdAt'>