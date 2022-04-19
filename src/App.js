import React, { useState } from "react";
import CreateNewPost from "./Components/CreateNewPost/CreateNewPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [] = useState({
    userName: "Billy Bob",
    postContent: "Example post.",
  });

  // const [userContent, setUserContent] = useState();

  // const handleChange = (e, name, text, date) => {
  //   let postIdea = {userName:name, postContent:text, postDate:date};
  //   setUserContent({...userContent, [e.target.name]: e.target.value});

  const handleSubmit = (e, name, text, date) => {
    let postIdea = { userName: name, postContent: text, postDate: date };
    setPosts([...posts, postIdea]);
    e.preventDefault();
  };

  return (
    <div>
      <h1>SocialFeed</h1>

      {/* <div className="create-new-post">
        <CreateNewPost
          handleChange={handleChange}
          userInput={userInput}
          />
      </div> */}

      <CreateNewPost
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
