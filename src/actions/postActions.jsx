import axios from 'axios';
export const postList = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts/")
    .then(res=>{
        dispatch({
            type:"POST_LIST",
            payload: res.data
        })
    })
}
export const AddPost = (data)=> dispatch =>{
    axios({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"POST",
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(res=>{
        dispatch({
            type:"ADD_USER",
            payload: true
        })
        dispatch(postList())
    })
}

export const EditPost = (data)=> dispatch =>{
    axios({
        url:"https://jsonplaceholder.typicode.com/posts/"+ data.id,
        method:"PUT",
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(res=>{
        console.log(res);
        dispatch({
            type:"EDIT_USER",
            payload: true
        })
        dispatch(postList())
    })
}

export const CloseModal = (data)=> dispatch =>{
    dispatch({
        type:"EDIT_USER",
            payload: false
    });
    dispatch({
        type:"ADD_USER",
            payload: false
    });
}
