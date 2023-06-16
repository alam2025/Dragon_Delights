import { useQuery } from "@tanstack/react-query";

const useChefs=()=>{
      const {data: chefs=[]}=useQuery({
            queryKey:['chefs'],
            queryFn:async()=>{
                  const res= await fetch(`/chefs.json`);
                  return res.json()
            }
      })
      return [chefs]

}

export default useChefs;