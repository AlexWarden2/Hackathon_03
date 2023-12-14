export const toggleCard2 = card2 => ({ type: 'TOGGLE_VIEW', payload: card2 })

export const playGame = (card) => {
    return (dispatch) => {
      dispatch({
        type: "PLAY",
        payload: card
      })
    }
  }
