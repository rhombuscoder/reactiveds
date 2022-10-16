import {Animations} from './animations'
export const Algos = {
    BubbleSort : async function (primaryArray,setPrimaryArray) {
        try{
            let currentArr = [...primaryArray];
            let sorted = false;
            while (!sorted) {
                sorted = true;
                for (let i = 0; i < currentArr.length - 1; i++) {
                    for (let j = 0; j < currentArr.length - i - 1; j++) {
                        if (currentArr[j] > currentArr[j + 1]) {
                            let temp = currentArr[j]
                            currentArr[j] = currentArr[j + 1]
                            currentArr[j + 1] = temp
                            setPrimaryArray([...currentArr]);
                            await Animations.sleep();
                            Animations.AnimateBars(j,j+1);
                            Animations.AnimateBars(j,j+1,false)
                            sorted = false;
                        }
                    }
                    Animations.AnimateSortedBar(i,i+1);
                }
                
        console.log(currentArr)
        console.log(primaryArray)
            }
        }catch(err){
            console.log(err)
        }
        
        
    },

    MergeSort : async function (primaryArray, setPrimaryArray) {
        try{
            let currentArr = [...primaryArray]
            //Split the array
            await Split(currentArr,0,currentArr.length-1)
            console.log(primaryArray)
            //Merge the array
        }catch(err) {
            console.log(err)
        }

        async function Split(arr,l,r) {
            if(l >= r) {
                return
            }

            let m = l + parseInt((r-l)/2);
            await Split(arr,l,m)
            await Split(arr,m+1,r)
            await Merge(arr,l,m,r)
        }

        async function Merge (arr,l,m,r) {
            let nL = m-l+1;
            let nR = r-m;

            let leftArray = new Array(nL);
            let rightArray = new Array(nR);

            for(let i =0; i < nL ; i++) {
                leftArray[i] = arr[l + i]
            }
            for(let i = 0 ; i < nR ; i++) {
                rightArray[i] = arr[i+m+1]
            }

            let i =0;
            let j =0;
            let k = l;
            while(i<nL && j<nR) {
                if(leftArray[i] <= rightArray[j]) {
                    arr[k] = leftArray[i]
                    i++;
                }else {
                    arr[k] = rightArray[j]
                    j++
                }
                k++;
                setPrimaryArray([...arr])
                //Animations.AnimateBars(i,j);
                await Animations.sleep();
            }

            while(i<nL) {
                arr[k] = leftArray[i]
                setPrimaryArray([...arr])
                //Animations.AnimateBars(i,j);
                await Animations.sleep();
                i++;
                k++;
            }

            while(j<nR) {
                arr[k] = rightArray[j]
                setPrimaryArray([...arr])
                //Animations.AnimateBars(i,j);
                await Animations.sleep();
                j++;
                k++;
            }
        }
    },

    SelectionSort : async function (primaryArray, setPrimaryArray) {
        try{
            let currentArr = [...primaryArray]
            let minIndex = 0;
            for(let i =0; i<currentArr.length-1; i++) {
                minIndex = i;
                for(let j = i+1; j<currentArr.length;j++){
                    if(currentArr[j] <= currentArr[minIndex]) {
                        minIndex = j;
                    }
                }
                //Swap
                let temp = currentArr[i]
                currentArr[i] = currentArr[minIndex]
                currentArr[minIndex] = temp
                setPrimaryArray([...currentArr])
                await Animations.sleep();
            }
        }catch(err){

        }
    },

    InsertionSort : async function (primaryArray , setPrimaryArray) {
        try{
            let currentArr = [...primaryArray]
            let key = 0;
            let j =0;
            for(let i=1; i < currentArr.length; i++) {
                key = currentArr[i]
                j = i-1;
                while(j >= 0 && currentArr[j] >= key ) {
                    currentArr[j+1] = currentArr[j];
                    j = j-1;
                   
                }
                currentArr[j+1] = key;
                setPrimaryArray([...currentArr]);
                await Animations.sleep(); 
            }
        }catch(err) {

        }
    }
}