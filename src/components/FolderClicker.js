import React from 'react'
import FileIcon from '../assets/IconFolderClosed'

function FolderCliker({fileName}) {
    // const goToFile = () => {
    //     console.log("Go to correct fileView")
    // }
    return (
        <div onDoubleClick={() => console.log("def")}  style={{ cursor: 'pointer' }}>
            <FileIcon />
            <p  height={400} style={{ userSelect: "none" }}>{fileName}</p>
        </div >
    )
}

export default FolderCliker


//Should have a previous folder prop
        //TODO: This should link to its corresponding folder
        //The me folder will have this too, a tiny version of this should be anicon at the top 
        //THIS IS LITERALLY A CUTOM BUTTON