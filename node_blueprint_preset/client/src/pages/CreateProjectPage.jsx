import React, { useState } from "react";

const CreateProjectPage = () => {
  const [project, setProject] = useState("");
  const handleSubmit = () => {
    console.log(project);
  };
  return (
    <>
      <h1>Create Project</h1>
      <input
        type="text"
        placeholder="project name. . ."
        onChange={(e) => setProject(e.target.value)}
      />
      <button onClick={handleSubmit}> Save</button>
    </>
  );
};

export default CreateProjectPage;
