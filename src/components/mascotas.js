import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Layout from '../components/layout';

import { graphql } from 'gatsby';

export const query = graphql`

    query($slug: String!){
        allDatoCmsPet(filter: {slug: {eq:$slug}}){
    nodes{	
    titulo
    info
    id
    contenido
    imagen{
    fluid(maxWidth:1200){
        ...GatsbyDatoCmsFluid
                     }
                }
            }
	    }
    }
`;

const Macotas = ({data: {allDatoCmsPet: {nodes}}}) => {
    const {titulo,info,id,contenido,imagen} = nodes [0];
    return ( 
        <Layout>
            <main css={css`margin: 0auto; max-width:1200px; width: 95%`}>
                <h1>{titulo}</h1>
                <p>{info}</p>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </main>
        </Layout>
     );
}
 
export default Macotas;
