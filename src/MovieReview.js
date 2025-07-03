import React ,{useEffect,useState} from "react";

 export default function MovieReview() {
    

    return (
        <div>
            <h2>All movie Reviews</h2>
            {reviews.length==0 ? (
            <p>No reviews submitted yet.</p>):(
            <ul>{reviews.map((reviews,index)=>(
                <li key={index} className="reviews-card">
                    <strong>{reviews.name}</strong>
                    reviewed<em>{reviews.movie}</em>
                    <br />
                    Rating:{reviews.rating}/5 <br />
                    {reviews.comments && <p>{reviews.comments}</p>}
                </li>
            ))}
            </ul>
            )}
        </div>
        )
    }



