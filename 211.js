
class TrieNode{
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }

}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for (let ch of word) {
            if (curr.children.has(ch)) {
                curr = curr.children.get(ch);
            } else {
                curr.children.set(ch, new TrieNode());
                curr = curr.children.get(ch);
            }
        }
        curr.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let searchResult = doDfs(this.root, word, 0);
        return searchResult;

        function doDfs(curr, word, index) {

            if (index == word.length)
                return curr.isWord;

            if (word[index] != ".") {
                if (!curr.children.has(word[index]))
                    return false;
                else {
                    curr = curr.children.get(word[index]);
                    return doDfs(curr, word, index + 1);
                }
            } else {
                for (let child of curr.children.values()) {
                    if (doDfs(child, word, index + 1))
                        return true;
                }
                return false;
            }
        }
    }
}



/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let input = ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"];
let param = [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]];

let result = [];
let obj = null;

for (let i = 0; i < input.length; i++){
    let call = input[i];

    if (call == "WordDictionary") {
        obj = new WordDictionary();
        result.push(null);
    }
    else if (call == "addWord") {
        obj.addWord(param[i][0]);
        result.push(null);
    }
    else if (call == "search") {
        let val = obj.search(param[i][0]);
        result.push(val);
    }
}

console.log(result);