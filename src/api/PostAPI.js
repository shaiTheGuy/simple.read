const posts = [{
    id: '1',
    author: 'Luuk Wuijster',
    title: 'Bootstrap 4 align navbar items to the right\n',
    body: 'How do I align a navbar item to right?\n' +
    '\n' +
    'I want to have the login and register to the right. But everything I try does not seem to work.\n' +
    '\n' +
    'Picture of Navbar\n' +
    '\n' +
    'This is what I have tried so far:\n' +
    '<div> around the <ul> with the atribute: style="float: right"\n' +
    '<div> around the <ul> with the atribute: style="text-align: right"\n' +
    'tried those two things on the <li> tags\n' +
    'tried all those things again with !important added to the end\n' +
    'changed nav-item to nav-right in the <li>\n' +
    'added a pull-sm-right class to the <li>\n' +
    'added a align-content-end class to the <li>\n' +
    'This is my code:\n' +
    '<div id="app" class="container">\n' +
    '  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">\n' +
    '    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n' +
    '      <span class="navbar-toggler-icon"></span>\n' +
    '    </button>\n' +
    '    <a class="navbar-brand" href="#">Navbar</a>\n' +
    '    <ul class="navbar-nav">\n' +
    '      <li class="nav-item active">\n' +
    '        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
    '      </li>\n' +
    '      <li class="nav-item">\n' +
    '        <a class="nav-link" href="#">Features</a>\n' +
    '      </li>\n' +
    '      <li class="nav-item">\n' +
    '        <a class="nav-link" href="#">Pricingg</a>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '    <ul class="navbar-nav " >\n' +
    '      <li  class="nav-item">\n' +
    '        <a class="nav-link" href="{{ url(\'/login\') }}">Login</a>\n' +
    '      </li>\n' +
    '      <li  class="nav-item">\n' +
    '        <a class="nav-link" href="{{ url(\'/register\') }}">Register</a>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </nav>\n' +
    '  @yield(\'content\')\n' +
    '</div>',
    points: 123,
    comments: 18
}, {
    id: '2',
    author: 'Raj Rj',
    title: 'what is right way to do API call in react js?',
    body: 'post2 body',
    points: 20,
    comments: 0
}, {
    id: '3',
    author: 'post2_author',
    title: 'post3 title',
    body: 'post3 body',
    points: 30,
    comments: 0
}];

let postsLocalStorage;

//postsLocalStorage = JSON.parse(localStorage.getItem("posts"));
function initPosts(){
    if(postsLocalStorage === null){
        localStorage.setItem("posts", JSON.stringify(posts));
    }
    postsLocalStorage = JSON.parse(localStorage.getItem("posts"));
}

function getPosts(){
    return postsLocalStorage;
}

function getPostById(postId){
    let result = null;

    postsLocalStorage.map(post => {
        if(post.id == postId)
            result = post;
    });
    return result;
}

function addPost(post){
    let oldPosts = postsLocalStorage;
    let newPostId = Number(oldPosts[oldPosts.length - 1].id) + Number(1);
    
    post.id = newPostId;
    post.comments = 0;
    post.points = 0;

    oldPosts.push(post);
    localStorage.setItem("posts", JSON.stringify(oldPosts));
}

export {initPosts, getPosts, getPostById, addPost};