export const createdRoom = (payload) => ({ type: 'CREATE_ROOM', payload });
export const joinedRoom = (payload) => ({ type: 'JOIN_ROOM', payload });
export const refetchedRoom = (payload) => ({ type: 'REFETCHED', payload });
export const askedQuestion = (payload) => ({ type: 'ASK_QUEST', payload });
export const answeredQuestion = (payload) => ({ type: 'ANSWER_QUEST', payload });
export const deleteQuestion = (payload) => ({ type: 'DELETE_QUEST', payload });
export const logoutAction = () => ({ type: 'LOGOUT' });
