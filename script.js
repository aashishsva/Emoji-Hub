let emoji_container = document.getElementById("emojiList");
let search_field = document.getElementById("searchInput");
let button = document.querySelectorAll("button");



function displayEmoji(searchQuery) {

    let filteredEmoji = emojiList.filter((emoji) => {
        // Show all emojis if searchQuery is empty or undefined
        if (!searchQuery) {
            return true;
        }
        // Check if the searchQuery matches the description, aliases, or tags
        if (emoji.description.includes(searchQuery)) {
            return true;
        }
        if (emoji.aliases.includes(searchQuery)) {
            return true;
        }
        if (emoji.tags.includes(searchQuery)) {
            return true;
        }
        return false;
    });

    emoji_container.innerHTML = "";

    filteredEmoji.forEach((emoji)=>{
        let emoji_list = document.createElement('li');
        emoji_list.innerText = emoji.emoji;
        emoji_container.appendChild(emoji_list);
    });
}

window.addEventListener("load", () => displayEmoji(""));

search_field.addEventListener("keyup", function(){
    // console.log(search_field.value)
    let searchValue = search_field.value.toLowerCase();
    displayEmoji(searchValue);
})

emoji_container.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert(e.target.innerText + " "  +"Copied to clipboard");
});

button.forEach(btn => {
    btn.addEventListener("click", () => {
        event.preventDefault();
        displayEmoji(btn.innerText.toLowerCase());
    }) 
})