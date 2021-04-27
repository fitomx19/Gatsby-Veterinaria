import * as React from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled";
import ContenidoInicio from '../components/contenidoInicio';
import useMascotas from '../hooks/useMascotas'


const Titulo = styled.div`
  font-size: 1.5rem;
  fontFamily: "PT SANS, sans-serif"
`

// markup

const IndexPage = () => {
  const mascotas = useMascotas();
  return (
    <Layout>
        <ContenidoInicio/>
    </Layout>
    
  )
}

export default IndexPage
