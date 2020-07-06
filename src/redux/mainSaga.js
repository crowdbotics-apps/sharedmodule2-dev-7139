import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8100Saga from '../features/EmailAuth8100/redux/sagas';
import CalendarView8099Saga from '../features/CalendarView8099/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth8100Saga,
CalendarView8099Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}