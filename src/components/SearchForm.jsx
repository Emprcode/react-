import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { fetchData } from "../utilities/axiosHelper";
import { MovieCard } from "./MovieCard";
import { Alert } from "bootstrap";

export const SearchForm = () => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetchData(form);
      console.log(resp.data);

      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center p-5">
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Col>
              <Form.Control
                onChange={handleOnChange}
                placeholder="Movie Name"
              />
            </Col>
            <Col>
              <Button type="submit" variant="primary">
                Search
              </Button>{" "}
            </Col>
          </Row>
          <Row className="d-flex justify-content-center p-5">
            <MovieCard movie={movie} />
          </Row>
        </Form>
      </div>
    </>
  );
};
