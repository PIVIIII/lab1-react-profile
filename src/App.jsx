import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>My Team Portfolio</h1>
      <ProfileCard
        name="วริยา ไอยรา"
        role="Student @ CEDT"
        bio="I love my job"
      />

      <ProfileCard
        name="John Doе"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  );
}

export default App;