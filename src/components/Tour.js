import React, { useState } from 'react'

function Tour({ id, name, info, image, price, removeTour }) {
    const [readMore, setReadMore] = useState(false)

    const text = info || "";

    return (
        <div>
            <img src={image} alt={name} className="rounded mb-4" />

            <header className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{name}</h2>
                <span className="bg-green-600 text-white px-3 py-1 rounded">
                    ₹{price}
                </span>
            </header>

            <p className="text-gray-700 mb-3" id={`tour-item-para-${id}`}>
                {readMore ? text : `${text.substring(0, 200)}...`}

                {text.length > 200 && (
                    <button
                        id={`see-more-${id}`}
                        onClick={() => setReadMore(!readMore)}
                        className="text-blue-600 ml-2"
                    >
                        {readMore ? "Show Less" : "Show More"}
                    </button>
                )}
            </p>


            <button
                id={`delete-btn-${id}`}
                onClick={() => removeTour(id)}
                className="bg-red-500 text-white px-4 py-2 rounded w-full"
            >
                Remove
            </button>
        </div>
    );
}

export default Tour;
