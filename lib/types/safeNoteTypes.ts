import { safeNotes } from '@prisma/client';

export type SafeNoteCreate = Omit<safeNotes, 'id' | 'createdAt'>