import { useRef } from "react"

const useComponentWillMount = (cb) => {
    const willMount = useRef(true);

    if(willMount.current) 
        cb();

    willMount.current = false;
}

export default useComponentWillMount;