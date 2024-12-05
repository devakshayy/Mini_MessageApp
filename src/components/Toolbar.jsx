
const Button = ({children,onSmash}) => {                  
    //Build in components like <button> and <div> supports 'browser event names' like onClick
    //When ever you're building your own component you can name their 'event handler props' any Way that you like
    //By convention event handler prop should start with on 
    //Here we use "onSmash" happy coding bro    
    return (
        <button 
           onClick={onSmash}
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
        <Button onSmash={handlePlaybtn}>
            Play {movieName}
        </Button>
    )
}

const UpLoadImage = () => {
    return (
        <Button onSmash={() => alert('Uploading Image!!!')}>
             Upload image
        </Button>
    )
}


const Toolbar = () => {
  return (
    <div>
        <h1 className="text-2xl 
                       pt-2 font-bold
                     text-gray-500">
                        Here im implement 
                      the different onClick btn with same btn</h1>
      <PlayButton movieName='Avatar 2'/>
      <UpLoadImage/>
    </div>
  )
}

export default Toolbar


// Passing event handlers as props 