import phaseMusik from "../assets/images/projects/phaseMusik.jpg";
import secondSunshine from "../assets/images/projects/secondSunshine.jpg";
import stayHealthy from "../assets/images/projects/stayHealthy.jpg";
import zacChat from "../assets/images/projects/zacChat.png";

// GIFs
import phaseMusikGif from "../assets/images/gifs/phaseMusikGif.gif";
import secondSunshineGif from "../assets/images/gifs/secondSunshineGif.gif";
import stayHealthyGif from "../assets/images/gifs/stayHealthy.gif";

const projectsState = () => {
  return [
    {
      name: "Second Sunshine",
      description:
        "Second Sunshine is a Rental Property finder for the USA, combining the Google Maps API and the Realtor API to allow users to search for properties available for rent and have them displayed on a Google Map. Users can click on the map markers, or press the 'show on map' button in the results panel for more information about the property. This project also utilizes GSAP's ScrollTrigger functionality to create complex scroll animations.",
      img: secondSunshine,
      gif: secondSunshineGif,
      stack: [
        "Javascript",
        "React",
        "Axios",
        "CSS/SASS",
        "GSAP",
        "Styled Components",
      ],
      link: "/projects/secondsunshine",
      url: "https://www.second-sunshine.com",
      source: "https://github.com/aporia-coder/Second-Sunshine",
    },
    {
      name: "Phase Musik",
      description:
        "This Music Player App allows user's to choose a song to listen to from a library of songs, with a trackbar that reveals a linear gradient of two color's from each track's album art as the song plays. The user can skip through songs using the player controls, or open the Library to choose a song.",
      img: phaseMusik,
      gif: phaseMusikGif,
      stack: ["Javascript", "React", "Styled Components"],
      link: "/projects/phasemusik",
      url: "https://www.phasemusik.com",
      source: "https://github.com/aporia-coder/phase-musik",
    },
    {
      name: "Stay Healthy",
      description:
        "This project allows users to find recipes based on their dietary choices and search queries. The main feature of this application is the calorie calculator, which calculates a users optimal calorie intake based on user input, and automatically displays recipes based on that value.",
      img: stayHealthy,
      gif: stayHealthyGif,
      stack: [
        "Javascript",
        "React",
        "Redux",
        "CSS/SASS",
        "Axios",
        "Material-UI",
      ],
      link: "/projects/stayhealthy",
      url: "https://www.stayhealthyfood.com",
      source: "https://github.com/aporia-coder/Stay-Healthy",
    },
  ];
};

export default projectsState;
