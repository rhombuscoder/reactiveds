import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setPrimaryArray,
  setIsRunnig,
  setIsSorted,
  resetArray,
} from "../../store/AlgoSlice";
import { randomizeArray } from "../../utils";
import { Algos } from "./algorithms";

const Bars = styled.div`
  width: 5px;
  height: ${(props) => `${props.height}%`};
  background: cyan;
  margin-left: 1px;
`;
const Layout = styled.div`
  height: 92vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const SortingBars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 80%;
  bottom: 0;
  transform: scaleY(-1);
  position: absolute;
  bottom: 20px;
`;

export function Visualizer() {
  let algos = useSelector((state) => state.algos);
  let { primaryArray, selectedAlgo, reset } = algos;
  const [elementArray, setElementArray] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    const arr = randomizeArray(
      document.getElementById("visualWindow").clientHeight
    );
    dispatch(setPrimaryArray(arr));
    setElementArray(arr);
  }, []);

  useEffect(() => {
    if (selectedAlgo === "bubbleSort") {
      startAlgo('bubbleSort');
    }
    if (selectedAlgo === "mergeSort") {
      startAlgo('mergeSort');
    }
    if (selectedAlgo === "selectionSort") {
        startAlgo('selectionSort'); 
    }
    if (selectedAlgo === "insertionSort") {
        startAlgo('insertionSort'); 
    }
    if (reset === "reset") {
      setElementArray([...primaryArray]);
      resetArray("");
    }
  }, [selectedAlgo, reset]);

  const startAlgo = async (algoName) => {
    dispatch(setIsRunnig(true));
    dispatch(setIsSorted(false));
    switch (algoName) {
      case "bubbleSort":
        await Algos.BubbleSort(elementArray, setElementArray);
        dispatch(setIsRunnig(false));
        dispatch(setIsSorted(true));
        console.log("Algo Completed");
        break;

      case "mergeSort":
        await Algos.MergeSort(elementArray, setElementArray);
        dispatch(setIsRunnig(false))
        dispatch(setIsSorted(true))
        console.log("Algo Completed")
        break;

      case "selectionSort":
        await Algos.SelectionSort(elementArray, setElementArray);
        dispatch(setIsRunnig(false))
        dispatch(setIsSorted(true))
        console.log("Algo Completed")
        break;
      case "insertionSort":
        await Algos.InsertionSort(elementArray, setElementArray);
        dispatch(setIsRunnig(false))
        dispatch(setIsSorted(true))
        console.log("Algo Completed")
      default:
        break;
    }
  };

  return (
    <>
      <Layout id="visualWindow">
        <SortingBars>
          {elementArray != null &&
            elementArray.length > 0 &&
            elementArray.map((item, index) => {
              return (
                <Bars
                  title={item}
                  id={`bar_${index}`}
                  width={Math.floor(
                    (document.getElementById("visualWindow").clientWidth /
                      elementArray.length) *
                      100
                  )}
                  height={Math.floor(
                    (item /
                      document.getElementById("visualWindow").clientHeight) *
                      100
                  )}
                ></Bars>
              );
            })}
        </SortingBars>
      </Layout>
    </>
  );
}
