// npm install react-loader-spinner --save

import { CirclesWithBar } from "react-loader-spinner";


const Loader = () => {
    return (
        <CirclesWithBar
            height="80"
            width="80"
            color="#0c8599"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}

export default Loader;
