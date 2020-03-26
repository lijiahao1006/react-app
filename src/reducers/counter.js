const initialState = {
  'a' : 999,
  'b': 5
}

export default (state = initialState, {type}) => {
    if (type === 'add') {
      return {
        'a': state.a+1
      }
    }else if (type === 'cheng') {
      return {
        'b': state.b*2
      }
    }
    return state;
}
