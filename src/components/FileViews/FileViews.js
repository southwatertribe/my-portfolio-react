import React from 'react'
import FileBar from './FileBar'


function FileViews() {
  return (
    <div>
      <FileBar></FileBar>
    </div>
  )
}

export default FileViews


//This is what the folder buttons link to basically, you click the Projects folder, get sent to its corresponding Projects File View etc.
//Composition
//Filebar should be generated with array mapping
//Content should also do the same