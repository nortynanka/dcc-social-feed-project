import React, { useState } from "react";

const CreateNewPost = ({ handleSubmit, userInput }) => {
  const [userName, setName] = useState("");
  const [postContent, setPostContent] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, userName, postContent, "02-05-2022")}
    >
      <div>
        {" "}
        Name:
        <input
          name="name"
          type="text"
          onSubmit={(e) => handleSubmit(e)}
          value={setName}
        />
      </div>
      <div>
        {" "}
        Post:
        <input
          name="postContent"
          type="text"
          onSubmit={(e) => handleSubmit(e)}
          value={setPostContent}
        />
      </div>
      <div>
        <input type="Submit" />
      </div>
    </form>
  );
};

export default CreateNewPost;
