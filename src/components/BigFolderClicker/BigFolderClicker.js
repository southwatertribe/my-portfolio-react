import React from 'react'
import './BigFolderClicker.css'
import FileIcon from '../../assets/IconFolderClosed'
function BigFolderClicker({fileName}) {
    return (
        <div onDoubleClick={() => console.log("def")}  style={{ cursor: 'pointer' }}>
            <FileIcon height={50} />
            <p className='big-folder-name'>{fileName}</p>
        </div >
    )
}

export default BigFolderClicker


//Should have a previous folder prop
        //TODO: This should link to its corresponding folder
        //The me folder will have this too, a tiny version of this should be anicon at the top 
        //THIS IS LITERALLY A CUTOM BUTTON