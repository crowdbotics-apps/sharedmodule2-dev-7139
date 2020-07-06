import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth8100Reducer from '../features/EmailAuth8100/redux/reducers';
import CalendarView8099Reducer from '../features/CalendarView8099/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth8100: EmailAuth8100Reducer,
CalendarView8099: CalendarView8099Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});