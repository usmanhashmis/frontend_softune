import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});
const Adddata = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const edit = id ? true : false;

  const [category, setCategory] = useState({
    name: "",
    description: "",
    date:"",
    profile:"",
  });
  
  const { name, description,date,profile } = category;

  const onupload =async e=>{
  const files = e.target.files
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append('upload_preset','softuneimg')
                    
  fetch(
    "http://api.cloudinary.com/v1_1/db6yuxnub/image/upload/",
    {
      method: "post",
      body: formData,
    }).
    then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      setCategory({ ...category, profile: responseData.secure_url });
      console.log(profile);
    })
  } 

  React.useEffect(() => {
    if (edit) {
      axios
        .get("/categories/" + id)

        .then((res) => {
          setCategory(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1 style={{ color: "black", marginTop: "7rem", marginLeft: "60px" }}>
        {props.heading}
      </h1>
      <div className=" mt-3 container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name ? name : ""}
            row={8}
            onChange={(e) => {
              setCategory({ ...category, name: e.target.value });
            }}
            placeholder="Enter Name"
          />
          <TextField
            id="outlined-basic"
            label="Description"
            value={description ? description : ""}
            onChange={(e) => {
              setCategory({ ...category, description: e.target.value });
            }}
            placeholder="Enter Description"
          />
           {/* <TextField
            id="outlined-basic"
            label="Image"
            value={image ? image : ""}
            onChange={(e) => {
              setShayari({ ...Shayari, image: e.target.value });
            }}
            placeholder="Add Image"
          /> */}
          <TextField
            id="outlined-basic"
            type="date"
            value={date ? date : ""}
            onChange={(e) => {
              setCategory({ ...category, date: e.target.value });
            }}
            placeholder="Enter Date"
          />
            <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={onupload}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>

        </Box>
        <Button
          variant="contained"
          onClick={() => {
            if (!edit) {
              axios.post("/categories", category).then((res) => {
                console.log(res.data);
                navigate("/showdata");
              });
            } else {
              axios
                .put("/categories/" + id, category)
                .then((res) => {
                  console.log("data has been edited " + res.data.Categories);
                  navigate("/showdata");
                })
                .catch((err) => {
                  console.log(err);
                });
              navigate("/showdata");
            }
          }}
        >
          {edit ? "Edit" : "Submit Data"}
        </Button>
      </div>
    </div>
  );
};
export default Adddata;
