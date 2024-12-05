
const Button = ({children,onClick}) => {
    
    return (
        <button 
           onClick={onClick}
           className='border rounded-md p-2 m-4'>
           {children}
        </button>
    )

}

const  PlayButton = ({movieName}) => {

    function handlePlaybtn (){
        alert(`Now playing the Video of ${movieName}`)
    }
    return (
        <Button onClick={handlePlaybtn}>
            Play {movieName}
        </Button>
    )
}

const UpLoadImage = () => {
    return (
        <Button onClick={() => alert('Uploading Image!!!')}>
             Upload image
        </Button>
    )
}


const Toolbar = () => {
  return (
    <div>
        <h1 className="text-2xl pt-2 font-bold text-gray-500">Here im implement 
            the different onClick btn with same btn</h1>
      <PlayButton movieName='Avatar 2'/>
      <UpLoadImage/>
    </div>
  )
}

export default Toolbar


// Passing event handlers as props 