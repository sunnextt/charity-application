import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
      <Wrapper>
        <div>
          <h2>404</h2>
          <h3>Sorry. this page is not functional</h3>
          <Link to="/" className="btn btn-sup">Go Home</Link>
        </div>
      </Wrapper>
    )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fdfdfd;

  h1 {
    font-size: 10rem;
  }
  h3 {
    color: #000;
    margin-bottom: 1.5rem;

  }
`
