import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriseCard = ({data}) => {
  // props
  // destructuring props

  // console.log(data);

  const { name, id , img_url, rating, description, cast,genre, watch_url} = data;
  
  // const btn_style = { //normal
  //   padding: ".5rem 1.2rem",
  //   border: "none",
  //   fontSize: "1.1rem",
  //   backgroundColor:  `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "black",
  //   cursor: "pointer",
  //   borderRadius: "8px",
  //   fontWeight:  "bold",
  // };
  
  // const ButtonAbhi = styled.button({ //styled components in react
  //   padding: ".5rem 1.2rem",
  //   border: "none",
  //   fontSize: "1.1rem",
  //   backgroundColor:  `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "black",
  //   cursor: "pointer",
  //   borderRadius: "8px",
  //   fontWeight:  "bold",
  // });
 

  const ButtonAbhi = styled.button` //here pure css we write 
  padding: 0.5rem 1.2rem;
  border: none;
  font-size: 1.1rem;
  background-color: ${({ $rating }) => //props pass kar rahe hai
    $rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  color: black;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
`;



  const ratingClass =  rating >= 8.5 ? "super_hit" : "average";

  return (
    <li key={id} className={styles.card} >
      <div>
        <img src={img_url} alt={name} width="30%" height="30%" />
      </div>

      <div className="card-container"> 
      {/* <h2>Name : {name} </h2> */}

      <h2 >Name: {name}</h2>
   
      <h3 className="rating">
          Rating : <span className={`${styles.rating} ${ratingClass}`}> {rating} </span>
      </h3>
      <p className="text-1xl  underline "> Summary : {description} </p>
      <p className="text-blue-600/100 dark:text-sky-400/100">Genre : {genre} </p>
      <p>Cast : {cast} </p>
      <a href={watch_url} target="_blank">
        {/* <button style={btn_style}> Watch Now </button> */}
        <ButtonAbhi $rating={rating} className="px-4 py-2 rounded-lg">Watch Now</ButtonAbhi>  
      </a>
      </div>
    </li>
  );
};
