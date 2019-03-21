// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    CHANGE_ROUTE: "CHANGE_ROUTE"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  const getWeatherDetail = (month,day) =>({
    type: Types.CHANGE_ROUTE,
    payload: month,day
  })

  export default {
    createItem,
    deleteItem,
    getWeatherDetail,
    Types
  };