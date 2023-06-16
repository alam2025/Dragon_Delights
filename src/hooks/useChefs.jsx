import { useQuery } from "@tanstack/react-query";

const useChefs=()=>{
      const {data: chefs=[],isLoading}=useQuery({
            queryKey:['chefs'],
            queryFn:async()=>{
                  const res= await fetch(`https://dragon-delights-server.vercel.app/chefs`);
                  return res.json()
            }
      })
      return [chefs,isLoading]

}

export default useChefs;