import React from 'react'

const AlertButon = ({message,children}) => {
   return(
       <button
           onClick={() => alert(message)}
           className='border p-2 m-4 rounded-md'
       >
          {children}
      </button>
   )
}

const Toolbar = () => {
  return (
    <div>
         <AlertButon message={"Now Playing the Movie"}>
             Play Movie
         </AlertButon>
         <AlertButon message={"Uplaoding Image Started"}>
             Upload Image
         </AlertButon>
         <AlertButon message={"Downloading Video Started"}>
             Download Video
         </AlertButon>
    </div>
  )
}

export default Toolbar
