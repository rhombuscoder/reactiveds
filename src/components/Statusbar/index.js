import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Statusbar = () => {
    const state = useSelector(state => state.algos);
    const { selectedAlgo, isSorted, isRunning, primaryArray } = state
    const Layout = styled.div`
    width :80%;
    background: black;
    heght: 40px;
    padding: 1rem;
    left: 10%;
    top: 1%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `
    const NotSorted = styled.label`
        background: red;
        color: white;
        padding:5px;
        border-radius: 5px;
        font-size: 12px;
        font-weight:500;
    `

    const Running = styled.label`
    background: yellow;
    color: black;
    padding:5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight:500;
    `
    const Sorted = styled.label`
    background: green;
    color: white;
    padding:5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight:500;
    `

    return (

        <Layout>
            <label>{selectedAlgo}</label>
            {isSorted ? <Sorted>Sorted</Sorted> : <NotSorted>Not Sorted</NotSorted>}
            <label>Array Length: {primaryArray.length}</label>
            <label>{isRunning && <Running>Running</Running>}</label>
        </Layout>
    )
}
