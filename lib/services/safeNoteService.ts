import safeNoteRepository from '../repositories/safeNoteRepository';
import errorFactory from '../utils/errorFactory';

async function createSafeNote(safeNoteData: { userId: any, label: any, content: any }){
    
	 const { userId, label, content} = safeNoteData;
    await safeNoteRepository.create({ userId, label, content });

}

async function getById(id: number){

    await safeNoteRepository.getById(id);

}

async function list(){

    await safeNoteRepository.list();

}

async function updateSafeNote(id: number, safeNoteData: { userId: any, label: any, content: any }){
    
	 const { userId, label, content } = safeNoteData;
    await safeNoteRepository.update(id, { userId, label, content });

}

async function deleteSafeNote(id: number){

    await safeNoteRepository.deleteSafeNote(id);

}

export default {
    createSafeNote,
    getById,
    list,
    updateSafeNote,
    deleteSafeNote
}