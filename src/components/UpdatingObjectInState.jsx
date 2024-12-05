import React, { useState } from "react";
import UseImmer from "./UseImmer";

const UpdatingObjectInState = () => {

    
    const [person, setPerson] = useState({
      name: 'Sundar Pichai',
      artwork: {
        title: 'Google Logo',
        city: 'New Delhi, India',
        image: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
      }
    });

    const handleNameChange = (e) => {
        setPerson({
            ...person,
            name:e.target.value
        });
    };
    const handleTitleChange = (e) => {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title:e.target.value
            }
        });
    };
    const handleCityChange = (e) => {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                city:e.target.value
            }
        });
    };
    const handleImageChange = (e) => {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                image:e.target.value
            }
        });
    };

  return (
    <div className="min-h-screen bg-slate-900 py-2 text-green-300 flex flex-col gap-4">
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
           alt={person.artwork.title} />
      </div>
      <hr />
      <UseImmer/>
    </div>
  );
};

export default UpdatingObjectInState;

// When the copying or the ...spred become more complicated we can use the Immer the code 
// stucture below 
// here we pass a callback draft function;

// import { useImmer } from 'use-immer';

// const [person, setPerson] = useImmer({
//   name: 'Akshay',
//   artwork: {
//     title: 'Google Logo',
//     city: 'Malappuram, Kerala',
//     image: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
//   }
// });

// const handleNameChange = (e) => {
// setPerson(draft => {
//   draft.name = e.target.value;
// });
// };
// const handleTitleChange = (e) => {
// setPerson(draft => {
//   draft.artwork.title = e.target.value;
// });
// };
// const handleCityChange = (e) => {
// setPerson(draft => {
//   draft.artwork.city = e.target.value;
// });
// };
// const handleImageChange = (e) => {
// setPerson(draft => {
//   draft.artwork.image = e.target.value;
// })
// }