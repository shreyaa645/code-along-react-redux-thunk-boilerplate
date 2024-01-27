import axios from 'axios'

export const dataFetching = ()=>(dispatch)=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res)
        dispatch(fetchingDataFunctin(res.data));

    })
    .catch((err)=> console.log("Not Found",err))
}

export const fetchingDataFunctin = (payload)=>{
    return{type : "fetchData",payload};
}