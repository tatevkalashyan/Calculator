export const postCalc = (url, info) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_CALC'
        });
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        }).then(response => response.json())
            .then(calc => {
                dispatch({
                    type: 'SUCCESS_CALC',
                    calc: calc
                })
            })
            .catch(error => {
                dispatch({
                    type: 'error',
                    data: error
                })
            })
    }
}