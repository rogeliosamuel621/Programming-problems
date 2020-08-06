/*Write a function to reverse an array.  Example: reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]*/

#include<iostream>

using namespace std;

void ReverseAnArray(int [], int);

int main() {

	int array[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	int limit = (sizeof(array)/sizeof(array[0])) - 1;
		
	ReverseAnArray(array, limit);
    
    return 0;
}

void ReverseAnArray(int array[], int limit) {

	int reverseArray[limit];
	
	for(int i=0; i <= limit; i++ ) {
		
		reverseArray[i] = array[limit - i];
		cout << "[" << reverseArray[i] << "]" << " ";
	}
}