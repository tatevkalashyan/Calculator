const INITIAL_STATE = { videos: [] }
export const videoReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'FETCH_VIDEOS': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_VIDEO': {
            let arr = []
            action.getVideo.videos.map(item => {
                arr.push(item.url)
            })
            console.log(arr)
            return {
                ...state,
                videos: arr,
                isFetching: false
            }
        }
        default: return state;
    }
}