const WordSearch = [
    ["D", "D", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "S", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
]

letterCounter(WordSearch, "D");

function letterCounter(array, filter) {
    let founded = 0;
    for(let i=0; i<WordSearch.length; i++) {
        let filtered = array[i];
        for(let j=0; j<array[i].length; j++) {
            if(filter === filtered[j]) {
                founded++;    
            }
        }
    }

    console.log(founded);
}