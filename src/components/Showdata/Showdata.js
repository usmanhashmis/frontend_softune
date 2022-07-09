import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CircularProgress,
  Stack,
  Grid,
  Button,
} from "@mui/material";
const Showdata = () => {
  const [person, setPerson] = useState([]); ////////data receive
  const [loading, setLoading] = useState(true); /////API loading data

  useEffect(() => {
    axios.get("/categories").then((res) => {
      setLoading(false);
      setPerson(res.data);
    });
  }, []);

  ///
  const deleteSh = (id) => {
    axios
      .delete(`/categories/${id}`)
      .then((res) => {
        alert("Data Deleted");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{ marginTop: "100px", marginLeft: "110px", marginRight: "110px" }}
    >
      <Grid lg={12} container spacing={2}>
        {person.map((curEle) => (
          <Grid
            item xs={2}
            spacing={20}
            sx={{ mx: 1 }}
            style={{ background: "white", borderRadius: "30px" }}
          >
            <Grid sx={{ mx: 4 }}>
            <Grid item xs={6}><img src={curEle.profile}  height={150} width={100}/></Grid>
            <p>{curEle.name} </p>
            <p>{curEle.description}</p>
            <p>{curEle.date}</p>
             
           
            <Link align="left" variant="text" to={"/Adddata/edit/" + curEle._id}>
              Edit
            </Link>
            <Button onClick={() => deleteSh(curEle._id)}>Delete</Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
      {loading && (
        <Stack
          sx={{ color: "grey.500", display: "flex", alignItems: "center" }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="warning" />
        </Stack>
      )}
      <Grid
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
      </Grid>
    </div>
  );
};
export default Showdata;
