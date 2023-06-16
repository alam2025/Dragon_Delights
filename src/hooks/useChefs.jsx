import { useQuery } from "@tanstack/react-query";

const useChefs=()=>{
      const {data: chefs=[]}=useQuery({
            queryKey:['chefs'],
            queryFn:async()=>{
                  const res= await fetch(`http://localhost:3000/chefs`);
                  return res.json()
            }
      })
      return [chefs]

}

export default useChefs;