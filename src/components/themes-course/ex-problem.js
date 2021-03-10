import React from 'react'
import styled from 'styled-components'
const ProblemStyled = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 1em;
`
function ExProblem({enunciado}) {

    return (
        <ProblemStyled>
            <img src={enunciado} alt="enunciado"/>
        </ProblemStyled>
    )
}

export default ExProblem
