let TextArea = document.getElementById('input-text-area');
let CharacterCount = document.getElementById('character-count');
let WordCount = document.getElementById('word-count');

TextArea.addEventListener("input" , () => {

    CharacterCount.textContent = TextArea.value.length;
    let text = TextArea.value.trim();
    WordCount.textContent = text.split(" ").filter((item) => item).length;

});