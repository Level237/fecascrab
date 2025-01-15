import { create } from "zustand";


interface initialStoreState{
    showHeader:boolean;
    openShowHeader:()=>void;
    closeShowHeader:()=>void;
}
export const initialStore=create<initialStoreState>((set)=>({

    showHeader:false,
    openShowHeader:()=>{
        set({showHeader:true})
    },
    closeShowHeader:()=>{
        set({showHeader:false})
    },
}));