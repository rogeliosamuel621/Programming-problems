#include<iostream>
#include<conio.h>

using namespace std;

int convert(int minutes);

int main() {
	
	int NumberToConvert = 0;
	
	cout << "Introduce the number that you want to convert into seconds: ";
	cin >> NumberToConvert;
	
	int result = convert(NumberToConvert);
	
	cout << "\n";
	cout << NumberToConvert << " minute(s) is equal to " << result << " second(s)\n\n";
	
	system("pause");
	return 0;	
}

int convert(int minutes) {
	return 60 * minutes;
}
