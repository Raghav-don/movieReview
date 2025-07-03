import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    movie: "",
    rating: "",
    comments: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...existingReviews, form];

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    alert("Thank you for your feedback!");
    navigate("/reviews");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name:</label>
      <input name="name" onChange={handleChange} value={form.name} required />
      <br />
      <br />
      <label>Movie:</label>
      <select name="movie" onChange={handleChange} value={form.movie} required>
        <option value="">Select</option>
        <option value="Inception">Inception</option>
        <option value="Interstellar">Interstellar</option>
        <option value="The Dark Knight">The Dark Knight</option>
      </select>
       <br />
       <br />

      <label>Rating (1-5):</label>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        onChange={handleChange}
        value={form.rating}
        required
      />
      <br />
      <br />

      <label>Comments:</label>
      <textarea name="comments" className="cmt" onChange={handleChange} value={form.comments} />
      <br />
      <br />
      <br />
      <button type="submit" className="btn">Submit</button>
    </form>
  );
};

export default FeedbackForm;