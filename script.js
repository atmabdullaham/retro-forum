const loadAllPosts = async (category) => {

 // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`);

 const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`)
 const data = await res.json();
 displayAllPost(data.posts);
}

const displayAllPost = (posts) => {
 console.log(posts)
}


loadAllPosts();
const handleSearchByCategory = () => {
 const searchTexts = document.getElementById("searchPosts").value;
 loadAllPosts(searchTexts)
}