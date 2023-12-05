import e from "express"
import { useState } from "react"


const usePreviewimg = () => {
    const [ imgUrl, seiImgUrl ] = useState(null)

    const handleImgChange = (e) => {
        const file = e.target.files[0]
        console.log(file);

    }

    return {handleImgChange, imgUrl}
}

export default usePreviewimg