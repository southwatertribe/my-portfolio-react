import FileIcon from "../assets/IconFolderClosed"
import React from 'react'


function MainFolderClicker() {
    return (
        <div onDoubleClick={() => console.log("def")} style={{ cursor: 'pointer' }}>
            <FileIcon />
            <p style={{ userSelect: "none" }}>Me:</p>
        </div >
    )
}

export default MainFolderClicker


