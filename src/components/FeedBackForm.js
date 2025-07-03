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
        <option value="Titanic">Titanic</option>
        <option value="Mankatha">Mankatha</option>
        <option value="Thug Life">Thug Life</option>
        <option value="Indian 2">Indian 2</option>
        <option value="Pushpa 2">Pushpa 2</option>
        <option value="Annathe">Annathe</option>
        <option value="GOAT">GOAT</option>
        <option value="Vettaiyan">Vettaiyan</option>
        <option value="Laal salaam">Laal salaam</option>
        <option value="Thunivu">Thunivu</option>
        <option value="Varisu">Varisu</option>
        <option value="Beast">Beast</option>
        <option value="Bigil">Bigil</option>
        <option value="Sura">Sura</option>
        <option value="Puli">Puli</option>
        <option value="Kanguva">Kanguva</option>

        


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
      <br />
      
    </form>
  );
};

export default FeedbackForm;