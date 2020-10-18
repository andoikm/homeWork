#include <iostream>
using namespace std;

void removeDuplicates(int *arr) {
    long tbl = 0;
    int bitSetCount = 10;
    int newArr[] = {};
    int tbls[bitSetCount] = {};
	
    /* create custom hash map */
    for (int i; i < bitSetCount; ++i)
        tbls[i] = tbl;
    
	for (int i = 0; i < arr.size(); ++i) {
	    int charElem = (char)arr[i];
	    int index = charElem % 64;
	    int currentTbl = charElem / 64;
		long mask = 1<<index;
		
		if (!(tbls[currentTbl] & mask)) {
			int ln = (sizeof(arr)/sizeof(*arr));
			
		    newArr[ln - 1] = arr[i];
			tbls[currentTbl] = tbls[currentTbl] | mask;
		}
	}
	for (int i = 0; i < (sizeof(newArr)/sizeof(*newArr)); ++i) 
        std::cout << newArr[i] << std::endl; 
}

int main()
{
    int arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}; 

    removeDuplicates(arr); 
    return 0; 
}