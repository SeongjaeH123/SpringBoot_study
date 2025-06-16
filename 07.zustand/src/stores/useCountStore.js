import { create } from "zustand" //create : store를 생성해주는 함수

const useCountStore = create((set, get)=>({
    count: 0,
    increase: ()=>set((state)=>({
        count: state.count + 1
    })),
    increaseBy: (num)=>set((state)=>({
        count: state.count + num
    })),
    decrease: ()=>set((state)=>({
        count: state.count>0? state.count-1 : state.count
    }))
    /*
    decrease: ()=>{
        //get()으로 객체를 전부 가져오고 거기서 count만 남긴 것
        let {count} = get()
        if(count>0)
            return set((state)=>({
                count: state.count - 1
            }))
    }
    */
}))

export default useCountStore;