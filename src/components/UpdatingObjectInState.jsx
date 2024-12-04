import React, { useState } from "react";

const UpdatingObjectInState = () => {

    const [person, setPerson] = useState({
        name:'Akshay ParamaSivan',
        artwork:{
            title:'Neela Tamara',
            city:'Tirur',
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
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
    </div>
  );
};

export default UpdatingObjectInState;
