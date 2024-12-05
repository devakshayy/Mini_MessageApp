import React from 'react'
import {useImmer} from 'use-immer'


const UseImmer = () => {
    
    const [person, setPerson] = useImmer({
        name:'Elon Musk',
        artwork: {
            title: 'SpaceX Logo',
            city: 'California,America',
            image: "https://i.pinimg.com/736x/d4/7e/f2/d47ef2cdbb019f4e8e4aeb2343cd2863.jpg",
        }
    });
    const handleNameChange = (e) => {
        setPerson(draft => {
            draft.name = e.target.value;
        });
    };
    const handleTitleChange = (e) => {
        setPerson(draft => {
            draft.artwork.title = e.target.value;
        });
    };
    const handleCityChange = (e) => {
        setPerson(draft => {
            draft.artwork.city = e.target.value;
        });
    };
    const handleImageChange = (e) => {
        setPerson(draft => {
            draft.artwork.image = e.target.value;
        })
    }   
      
    return (
      <div className="min-h-screen bg-slate-900 py-2 text-green-300 flex flex-col gap-4">
        <h1 className='text-3xl text-yellow-400'>Here I'm Using the Immer to render the copy instead of spread Operator</h1>
        <label>
          Name:{" "}
          <input
            value={person.name}
            onChange={handleNameChange}
            className=" px-1 text-gray-900"
            placeholder="type your name..."
            type="text"
          />
        </label>
        <label>
          Title:{" "}
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
            className=" px-1 text-gray-900"
            placeholder="type your Title..."
            type="text"
          />
        </label>
        <label>
          City:{" "}
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
            className=" px-1 text-gray-900"
            placeholder="type your City..."
            type="text"
          />
        </label>
        <label>
          Image:{" "}
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
            className=" px-1 text-gray-900"
            placeholder="enter the art url..."
            type="text"
          />
        </label>
        <div className="text-white">
          <h1>
            <i className="font-bold">{person.artwork.title}</i> by {person.name}
          </h1>
          <h2>(Located in {person.artwork.city})</h2>
          <img
             className="rounded-lg"
             src={person.artwork.image}
             alt={person.artwork.title}
             width={450}
             height={300} />
        </div>
      </div>
    );
  };

export default UseImmer

// first we want to install use-immer and immer from npm instll
// after that import that like import {useImmer} from 'use-immer';