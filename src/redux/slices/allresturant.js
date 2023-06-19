import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const API = "http://localhost:5000/allresturant"


const initialState = {
    resturant:[],
    isLoading: true,
    error: false
}

export const allresturantSlice = createSlice({
    name: 'allresturant',
    initialState,
    reducers:{
        getallresturant: (rafsun, action) => {
            rafsun.resturant = [action.payload]                      
        }
    }
})

export const getresturant =(resturant) => async(dispatch) => {
    try{
        const response = await axios.get(`${API}`)
        dispatch(getallresturant(response.data))

    }
    catch(err){
        throw new Error(err)

    }

}





// all action 
export const showResturant = (state) => state.allresturant.resturant;
export const { getallresturant } = allresturantSlice.actions
export default allresturantSlice.reducer