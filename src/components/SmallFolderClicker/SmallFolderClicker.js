import React from 'react'
import './SmallFolderClicker.css'
import FileIcon from '../../assets/IconFolderClosed'


function SmallFolderClicker({ fileName }) {
    return (
        <div onDoubleClick={() => console.log("def")} style={{ cursor: 'pointer' }}>
            <FileIcon height={10} />
            <p className='small-folder-name'>{fileName}</p>
        </div >
    )
}

export default SmallFolderClicker