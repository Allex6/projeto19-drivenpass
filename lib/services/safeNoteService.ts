import safeNoteRepository from '../repositories/safeNoteRepository';
import { SafeNoteCreate } from '../types/safeNoteTypes';
import errorFactory from '../utils/errorFactory';

async function createSafeNote(userId: number, safeNoteData: SafeNoteCreate){

    const safeNote = await safeNoteRepository.findByLabelAndUserId(userId, safeNoteData.label);
    if(safeNote) throw errorFactory('conflict', 'There is already a safeNote registered with this label/title on your account.');

    await safeNoteRepository.create(safeNoteData);

}

async function getById(userId: number, id: number){

    const safeNote = await safeNoteRepository.getById(id);
    if(!safeNote || safeNote.userId !== userId) throw errorFactory('not_found', 'Could not find the safeNote.');

    return safeNote;

}

async function list(userId: number){

    const safeNotes = await safeNoteRepository.list(userId);
    return safeNotes

}

async function deleteSafeNote(userId: number, id: number){

    const safeNote = await safeNoteRepository.getById(id);
    if(!safeNote || safeNote.userId !== userId) throw errorFactory('not_found', 'Could not find the safeNote.');
    
    await safeNoteRepository.deleteSafeNote(id);

}

export default {
    createSafeNote,
    getById,
    list,
    deleteSafeNote
}