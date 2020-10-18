#include <iostream>

using namespace std;
bool isUnique(string str, int bitSetCount) {
    long tbl = 0;
    int tbls[bitSetCount] = {};
	
    /* create custom hash map list */
    for (int i; i < bitSetCount; ++i) {
        tbls[i] = tbl;
    }
	
	for (char ch: str) {
	    int index = ch % 64;
	    int currentTbl = ch / 64;
		long mask = 1<<index;
		
		if (tbls[currentTbl] & mask) {
			return false;
		} else {
			tbls[currentTbl] = tbls[currentTbl] | mask;
		}
	}
	
	return true;
}

int main()
{
    if(isUnique("lksa*/,.", 2)){
        std::cout << "unique" << std::endl;
    } else {
        std::cout << "not unique" << std::endl;
    }
}