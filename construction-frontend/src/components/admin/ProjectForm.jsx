import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

const ProjectForm = ({
  editingProject,
  onProjectSaved
}) => {

  const [project, setProject] =
    useState({
      title: "",
      location: "",
      description: "",
      completionDate: ""
    });

  const [image, setImage] =
    useState(null);

  useEffect(() => {

    if (editingProject) {

      setProject({
        title:
          editingProject.title || "",

        location:
          editingProject.location || "",

        description:
          editingProject.description || "",

        completionDate:
          editingProject.completionDate || ""
      });

    }

  }, [editingProject]);

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]:
        e.target.value
    });

  };

  const handleImageChange = (e) => {

    setImage(
      e.target.files[0]
    );

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formData =
        new FormData();

      formData.append(
        "title",
        project.title
      );

      formData.append(
        "location",
        project.location
      );

      formData.append(
        "description",
        project.description
      );

      formData.append(
        "completionDate",
        project.completionDate
      );

      if (image) {

        formData.append(
          "image",
          image
        );

      }

      if (editingProject) {

        await axios.put(
          `http://localhost:8080/api/admin/projects/${editingProject.id}`,
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data"
            }
          }
        );

        alert(
          "Project Updated Successfully"
        );

      } else {

        await axios.post(
          "http://localhost:8080/api/admin/projects/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data"
            }
          }
        );

        alert(
          "Project Uploaded Successfully"
        );
      }

      setProject({
        title: "",
        location: "",
        description: "",
        completionDate: ""
      });

      setImage(null);

      if (onProjectSaved) {

        onProjectSaved();

      }

    } catch (error) {

      console.error(error);

      alert(
        editingProject
          ? "Project Update Failed"
          : "Project Upload Failed"
      );

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        p-6
        rounded-xl
        shadow
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-5
        "
      >
        {editingProject
          ? "Edit Project"
          : "Add Project"}
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        className="
          w-full
          border
          p-3
          rounded
          mb-3
        "
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={project.location}
        onChange={handleChange}
        className="
          w-full
          border
          p-3
          rounded
          mb-3
        "
      />

      <textarea
        rows="4"
        name="description"
        placeholder="Description"
        value={project.description}
        onChange={handleChange}
        className="
          w-full
          border
          p-3
          rounded
          mb-3
        "
      />

      <input
        type="date"
        name="completionDate"
        value={project.completionDate}
        onChange={handleChange}
        className="
          w-full
          border
          p-3
          rounded
          mb-3
        "
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="
          w-full
          border
          p-3
          rounded
          mb-5
        "
      />

      <button
        type="submit"
        className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded
        "
      >
        {editingProject
          ? "Update Project"
          : "Upload Project"}
      </button>

    </form>
  );
};

export default ProjectForm;