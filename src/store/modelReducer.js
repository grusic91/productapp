import { STORE, UPDATE, DELETE} from './modelActionTypes';
import { initialData } from './initialData';

export default function(storeData, action) {
    switch (action.type) {
        case STORE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat([action.payload])
            }
        case UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType]
                .map(p => p.id === action.payload.id ? action.payload : p)
            }
        case DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].filter(p => p.id !== action.payload)
            }
        default:
            return storeData || initialData.modelData;
    }
}

/**
 * The reducer receives the current data from the data store and an action
 * swhitch inspects the action and uses it to create a new data object,
 * which replace existing in the data store.
 * 
 * 2 implementation rules to follow:
 * 1. the reducer mus create a new object and not return the object received as a parameter
 * 2. it is important to copy the properties of the existing object, not just the one modified by the action
 */