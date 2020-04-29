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

export const getVideos = url => {
    return dispatch => {
        dispatch({
            type: 'FETCH_VIDEOS'
        });
        return fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(getVideo => {
                dispatch({
                    type: 'GET_VIDEO',
                    getVideo: getVideo
                })
            })
            .catch(error => {
                dispatch({
                    type: 'ERROR_GET',
                    data: error
                })
            })
    }
}
