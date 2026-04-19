// import React, { useState } from 'react'

// const Liked = () => {

//         const [isLiked, setIsLiked] = useState(false)
//         const [click, setClick] = useState(0)

//         let toggleLiked = () =>{
//             setIsLiked(!isLiked)
//             setClick(click+1)
//         }



//   return (
//     <div>
//         <p  onClick={toggleLiked}>
//             {
//                 isLiked ? (<i className="fa-solid fa-heart text-red-600 ">{click} </i>
//                 ) : (<i className="fa-regular fa-heart"></i>
//             )}
//         </p>
//     </div>
//   )
// }

// export default Liked

import React, { useState } from 'react'

const Liked = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [click, setClick] = useState(0)

    const toggleLiked = () => {
        // If it's NOT liked yet, we add 1. If it IS liked, we subtract 1.
        if (!isLiked) {
            setClick(click + 1)
        } else {
            setClick(click - 1)
        }
        
        // Toggle the boolean state
        setIsLiked(!isLiked)
    }

    return (
        <div className="cursor-pointer select-none">
            <p onClick={toggleLiked} className="flex items-center gap-1">
                {isLiked ? (
                    <span className="flex items-center gap-1">
                        <i className="fa-solid fa-heart text-red-600"></i>
                        <span className="text-sm font-medium">{click}</span>
                    </span>
                ) : (
                    <span className="flex items-center gap-1">
                        <i className="fa-regular fa-heart"></i>
                        <span className="text-sm font-medium">{click}</span>
                    </span>
                )}
            </p>
        </div>
    )
}

export default Liked