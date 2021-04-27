import * as React from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled";
import ContenidoInicio from '../components/contenidoInicio';
import useMascotas from '../hooks/useMascotas'
import MascotasPreview from '../components/mascotasPreview';

const Titulo = styled.div`
  font-size: 1.5rem;
  fontFamily: "PT SANS, sans-serif"
`
const ListadoMascotas = styled.ul`
    max-width:1200px;
    width: 95%;
    margin: 4rem auto 0 auto;
    @media (min-width: 768px){
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
    }
`;


// markup

const IndexPage = () => {
  const mascotas = useMascotas();
  console.log(mascotas);
  return (
    <Layout>
        <ContenidoInicio/>
        <ListadoMascotas>
          {mascotas.map(mascotas => (
           <MascotasPreview key={mascotas.id} mascotas={mascotas}/>
          ))}
        </ListadoMascotas>
        
    </Layout>
    
    
  )
}

export default IndexPage
