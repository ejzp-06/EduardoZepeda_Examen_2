import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  weatherItems: [{month:'March', day:'20', max: '38', min: '18'}, {month:'March', day:'21', max: '30', min: '20'}, {month:'March', day:'22', max: '33', min: '17'}, {month:'March', day:'23', max: '31', min: '19'}]    
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);
import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  weatherItems: [{ month: 'March', day: '20', max: '38', min: '18' }, { month: 'March', day: '21', max: '30', min: '20' }, { month: 'March', day: '22', max: '33', min: '17' }, { month: 'March', day: '23', max: '31', min: '19' }]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.CHANGE_ROUTE: {
      let newState = _.cloneDeep(state);
      let tmp = _.find(newState.weatherItems,{day: action.payload})
      //aqui de alguna forma deberia de imprimir tmp.max y tmp.min
    }

    default:
      return state;
  }
};

export default todoReducer;
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.CHANGE_ROUTE: {
      
    }

    default:
      return state;
  }
};

export default todoReducer;
