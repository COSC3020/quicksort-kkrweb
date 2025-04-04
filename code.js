// Kane Kriz
// UWYO COSC 3020 Algorithms
// Quicksort Exercise
// 25 March 2025
//
//


//


function quicksort(array) //iterative as specified, no recursion
{
   // var pivot; //probably useless to declare this here, may have to live within the helper
    var arrLen = array.length;

   if(arrLen == 0 || arrLen == 1)
    {
        return array; //0 or 1 elements, no need to sort, just return
    }

    var startPos = 0;
    var endPos = arrLen - 1;
    var pivotIndex = partitionArr(array, startPos, endPos);

    while(true)
    {
        if(startPos < pivotIndex - 1)
        {
            pivotIndex = partitionArr(array, startPos, pivotIndex - 1);
        }
           
        else if(endPos > pivotIndex + 1)
        {
            startPos = pivotIndex + 1;
            pivotIndex = partitionArr(array, startPos, endPos);
        }
           
        else
        {
            if(startPos >= endPos - 1)
            {
               break; //exit while true via break once all partitions are processed
            }
            startPos = pivotIndex + 1;
            pivotIndex = partitionArr(array, startPos, endPos);
        }
    }
   
   return array;
}


    
    //


function partitionArr(array, startPos, endPos) //helper. Tried to be stubborn and do it without one but I kept messing up the logic
{
    var pivot; 
    var leftIndex;
    var temp;

        pivot = array[endPos]; //select pivot element
        leftIndex = startPos - 1; //set leftIndex to position one before the start of the selection

        for(var j = startPos; j < endPos; j++) //iterate over elements from startPos to endPos-1, all positions within the array as desired
        {
            if(array[j] <= pivot) 
            {
                leftIndex++; //move leftIndex forward to adjust
                temp = array[leftIndex]; //swap elements array[leftIndex] and array[j] using temp var
                array[leftIndex] = array[j];
                array[j] = temp;
            }
        }

        temp = array[leftIndex + 1]; //place pivot in correct position
        array[leftIndex + 1] = array[endPos];
        array[endPos] = temp;

   return leftIndex + 1; //may need to change
}
