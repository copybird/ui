import * as actionTypes from './actionTypes';

export const fetchBackups = () => ({
  type: actionTypes.BACKUPS_FETCH,
});

export const fetchBackupsComplete = payload => ({
  type: actionTypes.BACKUPS_FETCH_COMPLETE,
  payload
});
