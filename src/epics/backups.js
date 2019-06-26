import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map } from 'rxjs-compat/operators/map';
import { mergeMap } from 'rxjs-compat/operators/mergeMap';
import { ofType } from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { API } from '../config/api';

export const fetchBackups = action$ => action$.pipe(
  ofType(actionTypes.BACKUPS_FETCH),
  mergeMap(action =>
    ajax.getJSON(`${API.host}/backups/`).pipe(
      map(({ data }) => actions.fetchBackupsComplete(data))
    )
  )
);

