import { useState, useEffect } from 'react';
import ProfileCard from "./components/ProfileCard";

function App() {

  const [githubData, setGithubData] = useState(null);
  const username = "PIVIIII"; // <-- เปลี่ยนเป็น Username ของนิสิต
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then (data => {
    setGithubData (data);
    })
    .catch(err => console.error(err));
  },[]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>My Team Portfolio</h1>
      { githubData ? (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
        />
      ) : (
        <p>Loading data from GitHub...</p>
      )}
      {/* <ProfileCard
        name="วริยา ไอยรา"
        role="Student @ CEDT"
        bio="I love my job"
      />

      <ProfileCard
        name="John Doе"
        role="Guest Developer"
        bio="I love coding and learning new things."
      /> */}
    </div>
  );
}

export default App;