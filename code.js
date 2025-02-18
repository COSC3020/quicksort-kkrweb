// Kane Kriz
// UWYO COSC 3020 Algorithms
// 18 Feb 2025
//
//
//


//


function quicksort(array) //iterative as specified, no recursion
{
   // var pivot; //probably useless to declare this here, may have to live within the helper
    var arrLen = array.length;

   if (arrLen == 0 || arrLen == 1)
    {
        return array; //0 or 1 elements, no need to sort, just return
    }

   var startPos = 0;
   var endPos = arrLen - 1;

    while (startPos < endPos)
    {
        var pivotIndex = partitionArr(array, startPos, endPos);

        if (pivotIndex - startPos < endPos - pivotIndex)
        {
            quicksort(array.slice(startPos, pivotIndex));
            startPos = pivotIndex + 1;
        }
           
        else
        {
            quicksort(array.slice(pivotIndex + 1, endPos + 1));
            endPos = pivotIndex - 1;
        }
    }

    return array;
}


    
    //


function partitionArr(array, startPos, endPos)
{
    var pivot; 
    var leftIndex;
    var temp;

        pivot = array[endPos]; //select pivot element
        leftIndex = startPos - 1; //set leftIndex to position one before the start of the selection
        var i = startPos;

        while(i < endPos) //iterate over elements from startPos to endPos-1, all positions within the array as desired
        {
            if(array[i] < pivot) 
            {
                leftIndex++; //move leftIndex forward to adjust
                temp = array[leftIndex]; //swap elements array[leftIndex] and array[i] using temp var
                array[leftIndex] = array[i];
                array[i] = temp;
                i++;
            }
               
            else if(array[i] === pivot)
            {
                i++;
            }
               
            else
            {
                temp = array[i];
                array[i] = array[endPos - 1];
                array[endPos - 1] = temp;
                endPos--;
            }
        }

        temp = array[leftIndex + 1]; //place pivot in correct position
        array[leftIndex + 1] = array[endPos];
        array[endPos] = temp;

        return leftIndex + 1;
}
