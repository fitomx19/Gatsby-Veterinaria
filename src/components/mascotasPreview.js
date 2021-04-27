import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;

`;

const MascotasPreview = ({mascotas}) => {
    const { titulo,info,id,contenido,imagen,slug} = mascotas;
    return (  

       <div css={css`border: 1px solid #e1e1e1; margin-bottom: 2rem;`}>
            <Image fluid={imagen.fluid} />
            <h3 css={css`font-size: 3rem;`}>{titulo}</h3>
            <p>{info}</p>
            <Boton to={slug}>Ver Mascota</Boton>
       </div>
    );
}
 
export default MascotasPreview;