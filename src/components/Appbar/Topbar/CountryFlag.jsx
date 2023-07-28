import { useEffect, useState } from "react";
import SportsScoreSharpIcon from "@mui/icons-material/SportsScoreSharp";
import LoadingButton from "@mui/lab/LoadingButton";
const CountryFlag = () => {
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    const userCountryName = "usa";

    if (userCountryName) {
      fetch(`https://restcountries.com/v3.1/name/${userCountryName}`)
        .then((response) => response.json())
        .then((data) => {
          const [{ flag, fifa }] = data;
          setFlag(flag);
          // console.log(fifa);
          // console.log(typeof flag);
        })
        .catch((error) => {
          console.error("Error fetching flag:", error);
          setFlag(<SportsScoreSharpIcon />);
        });
    }
  }, []);
  return (
    <div>
      {flag ? (
        <h3>{flag}</h3>
      ) : (
        <div>
          <LoadingButton size="small" loading variant="text">
            Submit
          </LoadingButton>
        </div>
      )}
    </div>
  );
};

export default CountryFlag;
