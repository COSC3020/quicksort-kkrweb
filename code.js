// Kane Kriz
// UWYO COSC 3020 Algorithms
// Quicksort Exercise
// 7 April 2025 - Edited For Feedback Request
//


//


function quicksort(array) //iterative as specified, no recursion
{
   // var pivot; //probably useless to declare this here, may have to live within the helper
   var arrLen = array.length;
   var partitionStack = [];

   if(arrLen == 0 || arrLen == 1)
    {
        return array; //0 or 1 elements, no need to sort, just return
    }

    partitionStack.push(0);
    partitionStack.push(arrLen - 1);

    while(partitionStack.length > 0) 
    {
        var endPos = partitionStack.pop();
        var startPos = partitionStack.pop();
        var pivotIndex = partitionArr(array, startPos, endPos);

        //left parition handling
        if(pivotIndex - 1 > startPos) 
        {
            partitionStack.push(startPos);
            partitionStack.push(pivotIndex - 1);
        }

        //right partition handling
        if(pivotIndex + 1 < endPos) 
        {
            partitionStack.push(pivotIndex + 1);
            partitionStack.push(endPos);
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
