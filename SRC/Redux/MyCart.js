import {createSlice} from '@reduxjs/toolkit'
import { CreateSliceOptions } from '@reduxjs/toolkit';

const MyCartSlice=createSlice({
name:'cart',
initialState:[],
reducers:{
    addMycart(state,action){
let myIndex=-1;
state.map((item,index)=>{
  if(item.id==action.payload.id){
    myIndex=index;
  }
});

if(myIndex==-1){
    state.push({
        name:action.payload.Brand,
         email:action.payload.id, 
       phone: action.payload.image, 
        status:action.payload.name, 
        price: action.payload.price,
        qty: action.payload.qty+1
    });
}else{
    state[myIndex].qty=state[myIndex].qty+1}
    },
    removeItem(state,action){
        let removeIndex=-1;
        state.map((item,index)=>{
          if(item.id==action.payload.id){
            removeIndex=index;
          }
        });
        if(removeIndex==-1){
            state.push({
                Brand:action.payload.Brand,
                 id:action.payload.id, 
                image: action.payload.image, 
                name:action.payload.name, 
                price: action.payload.price,
                qty: action.payload.qty+1
            });
        }
        
        else{
            state[removeIndex].qty=state[removeIndex].qty-1
        }}     
}
})
export const {addMycart,removeItem}=MyCartSlice.actions
export default MyCartSlice.reducer
