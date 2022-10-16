import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSelectedAlgo , setPrimaryArray , resetArray } from '../../store/AlgoSlice'
import { randomizeArray } from '../../utils'
import BrandLogo from '../../logo.svg'

const Layout = styled.div`
    height: 8vh;
    background: #1b1a19;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 15%;
    color: black;
`
const Logo = styled.img`
  width: 5rem;
  margin: auto;
  display:flex;
  padding: 10px;
`

const Menu = styled.ul`
  color: white;
  list-style: none;
  text-decoration: none;
  padding-left: 0px;
  marign-left:0px;
`

const MenuItems = styled.ul`
  list-style: none;
  text-decoration: none;
  marign: 0px;
  padding: 8px;
`

const MenuListItem = styled.li`
  padding: 0.3rem;
  margin: 0.5rem 0;
  &:hover{
    background: green;
    cursor: pointer;
  }
`
const MenuTitle = styled.label`
  margin-bottom: 10px;
  padding-bottom: 0.2rem;
  display:block;
  border-bottom: 1px solid #2f2f2f
`

const Button = styled.div`
    background: #3355ff;
    margin: 1rem;
    padding: 0.5rem;
    text-align : center;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background: #192978;
      color: #FFFFFF
    }
`

export function Navbar() {
  let dispatch = useDispatch();

  const generateArray = () => {
    const arr = randomizeArray(document.getElementById('visualWindow').clientHeight);
    dispatch(setPrimaryArray(arr));
    dispatch(resetArray('reset'));
  }

  const MenuOptions = [
    {
      Title : 'Sortings',
      Items : [
        {
          Title: 'Bubble Sort',
          Handler : 'bubbleSort'
        },
        {
          Title: 'Merge Sort',
          Handler : 'mergeSort'
        },
        {
          Title: 'Selection Sort',
          Handler : 'selectionSort'
        },
        {
          Title: 'Insertion Sort',
          Handler : 'insertionSort'
        },
      ]
      
    }
    
  ]

  return (
    <Layout>
        <Logo src={BrandLogo} alt="reactiveDs" />

        <Button onClick={generateArray}>
          Generate Array
        </Button>
        <Menu>
          {
            MenuOptions.map(menuitem => {
                return(
                  <MenuItems>
                      <MenuTitle>{menuitem.Title}</MenuTitle>
                      {
                        menuitem.Items.map(item => {
                          return(
                              <MenuListItem onClick={() => {dispatch(setSelectedAlgo(item.Handler))}}>{item.Title}</MenuListItem>
                          )
                        })
                      }
                  </MenuItems>
                )
            })
          }
          
        </Menu>
    </Layout>
  )
}