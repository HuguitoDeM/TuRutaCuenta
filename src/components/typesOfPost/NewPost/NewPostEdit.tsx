import { useState } from "react";
import ModelOne from "../modelOne/ModelOne";
import ModelOneVersionEdit from "../modelOne/ModelOneVersionEdit";

const NewPostEdit = () => {
  const [Edit, setEdit] = useState(false);

  const handleEditPost = () => {
    setEdit(!Edit);
  };

  return (
    <>
      {Edit ? (
        <ModelOneVersionEdit
          title="Read it on our Blog"
          contentTop={{
            subtitulo: "The Ultimate Guide to Writing",
            textP: "Writing effectively is an art. Start by using simple...",
            img: "https://th.bing.com/th/id/R.7fde484fcaaea614c0f986ab4cdece0c?rik=QUQJ2S%2b4i7H6BQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-a_MZ51-uScA%2fU4fajP8XbRI%2fAAAAAAAACLI%2fVPVjyQAcB4Y%2fs1600%2fimagenes%2bbonitas%2bde%2bflores%2bpara%2bcolocar%2bcomo%2bfondo%2bde%2bpantalla4.jpg&ehk=5LpHzioJJWbchX6z62tIz3N%2bG59V5%2f6gVa3KXpY8%2fGo%3d&risl=&pid=ImgRaw&r=0",
          }}
          contentMiddle={{
            subtitulo: "The Art of Clear Communication",
            textP: "Being clear and direct to the point is crucial...",
            img: "https://th.bing.com/th/id/R.7fde484fcaaea614c0f986ab4cdece0c?rik=QUQJ2S%2b4i7H6BQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-a_MZ51-uScA%2fU4fajP8XbRI%2fAAAAAAAACLI%2fVPVjyQAcB4Y%2fs1600%2fimagenes%2bbonitas%2bde%2bflores%2bpara%2bcolocar%2bcomo%2bfondo%2bde%2bpantalla4.jpg&ehk=5LpHzioJJWbchX6z62tIz3N%2bG59V5%2f6gVa3KXpY8%2fGo%3d&risl=&pid=ImgRaw&r=0",
          }}
          contentBottom={{
            subtitulo: "Expressing Ideas Accurately",
            textP: "Choosing the right words to express your ideas...",
            img: "https://th.bing.com/th/id/R.7fde484fcaaea614c0f986ab4cdece0c?rik=QUQJ2S%2b4i7H6BQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-a_MZ51-uScA%2fU4fajP8XbRI%2fAAAAAAAACLI%2fVPVjyQAcB4Y%2fs1600%2fimagenes%2bbonitas%2bde%2bflores%2bpara%2bcolocar%2bcomo%2bfondo%2bde%2bpantalla4.jpg&ehk=5LpHzioJJWbchX6z62tIz3N%2bG59V5%2f6gVa3KXpY8%2fGo%3d&risl=&pid=ImgRaw&r=0",
          }}
          guardarEdit={handleEditPost}
        />
      ) : (
        <ModelOne
          title="Read it on our Blog"
          contentTop={{
            subtitulo: "The Ultimate Guide to Writing",
            textP: "Writing effectively is an art. Start by using simple...",
            img: "https://th.bing.com/th/id/R.7fde484fcaaea614c0f986ab4cdece0c?rik=QUQJ2S%2b4i7H6BQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-a_MZ51-uScA%2fU4fajP8XbRI%2fAAAAAAAACLI%2fVPVjyQAcB4Y%2fs1600%2fimagenes%2bbonitas%2bde%2bflores%2bpara%2bcolocar%2bcomo%2bfondo%2bde%2bpantalla4.jpg&ehk=5LpHzioJJWbchX6z62tIz3N%2bG59V5%2f6gVa3KXpY8%2fGo%3d&risl=&pid=ImgRaw&r=0",
          }}
          contentMiddle={{
            subtitulo: "The Art of Clear Communication",
            textP: "Being clear and direct to the point is crucial...",
            img: "https://th.bing.com/th/id/R.7fde484fcaaea614c0f986ab4cdece0c?rik=QUQJ2S%2b4i7H6BQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-a_MZ51-uScA%2fU4fajP8XbRI%2fAAAAAAAACLI%2fVPVjyQAcB4Y%2fs1600%2fimagenes%2bbonitas%2bde%2bflores%2bpara%2bcolocar%2bcomo%2bfondo%2bde%2bpantalla4.jpg&ehk=5LpHzioJJWbchX6z62tIz3N%2bG59V5%2f6gVa3KXpY8%2fGo%3d&risl=&pid=ImgRaw&r=0",
          }}
          contentBottom={{
            subtitulo: "Expressing Ideas Accurately",
            textP: "Choosing the right words to express your ideas...",
            img: "https://th.bing.com/th/id/R.7fde484fcaaea614c0f986ab4cdece0c?rik=QUQJ2S%2b4i7H6BQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-a_MZ51-uScA%2fU4fajP8XbRI%2fAAAAAAAACLI%2fVPVjyQAcB4Y%2fs1600%2fimagenes%2bbonitas%2bde%2bflores%2bpara%2bcolocar%2bcomo%2bfondo%2bde%2bpantalla4.jpg&ehk=5LpHzioJJWbchX6z62tIz3N%2bG59V5%2f6gVa3KXpY8%2fGo%3d&risl=&pid=ImgRaw&r=0",
          }}
          Edit={handleEditPost}
        />
      )}
    </>
  );
};

export default NewPostEdit;
