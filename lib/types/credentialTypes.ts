import { credentials } from '@prisma/client';

export type CredentialCreate = Omit<credentials, 'id' | 'createdAt'>