import axios from "axios"
import { useEffect, useRef , useState} from "react"

const useAxios = ( url, req, data, config ) => {

    const isMounted = useRef(true);

    const [resp, setResp] = useState({
        data,
        loading:true,
    })

    useEffect(()=>{
        return () => {
            isMounted.current = false
        }
    },[])

    if( isMounted.current ){

        switch (req){
            case 'post':{
                axios.post(url,data,config)
                    .then( resp => {
                        setResp( resp );
                    })
            break;
            }
            case 'put':{
                axios.put(url,data,config)
                    .then( resp => {
                        setResp( resp );
                    })
            break;
            }
            case 'delete':{
                axios.delete(url,config)
                    .then( resp => {
                        setResp({
                            data:resp.data,
                            loading:false,
                        } );
                    })
            break;
            }
            case 'get':{
                axios.get(url)
                    .then( resp => {
                        setResp({
                            data:resp.data,
                            loading:false,
                        } );
                    })
            break;
            }

            default:{
                setResp('No se ha esa peticion http');
            }
        }
    }

    return resp;
}

export default useAxios