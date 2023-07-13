import React, { useState, useEffect, useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`

  

const Result = () => {


    const { html, css, js} = useContext(DataContext);
    const [srcDoc, setSrcDoc] = useState("");
     

      useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        ` )
        }, 250)

        return () => clearTimeout(timeout);
    }, [html,css,js])

    return (
        <Container>
            <iframe 
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </Container>
    )
}
export default Result;