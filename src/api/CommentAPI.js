const comments = [{
    postId: '1',
    id: '1',
    username: 'Themes.guide',
    date: '18/18/18',
    points: 231,
    body: 'Bootstrap 4 has many different ways to align navbar items. float-right won\'t work because the navbar is now flexbox.\n' +
    '\n' +
    'You can use the new mr-auto for auto right margin on the 1st (left) navbar-nav. Alternatively, ml-auto could be used on the 2nd (right) navbar-nav , or if you just have a single navbar-nav.\n' +
    '\n' +
    '<div id="app" class="container">\n' +
    '  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">\n' +
    '    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n' +
    '      <span class="navbar-toggler-icon"></span>\n' +
    '    </button>\n' +
    '    <a class="navbar-brand" href="#">Navbar</a>\n' +
    '    <ul class="navbar-nav mr-auto">\n' +
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
    '    <ul class="navbar-nav">\n' +
    '      <li class="nav-item">\n' +
    '        <a class="nav-link" href="{{ url(\'/login\') }}">Login</a>\n' +
    '      </li>\n' +
    '      <li class="nav-item">\n' +
    '        <a class="nav-link" href="{{ url(\'/register\') }}">Register</a>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </nav>\n' +
    '</div>\n' +
    'http://www.codeply.com/go/P0G393rzfm\n' +
    '\n' +
    'There are also flexbox utils. In this case, you have 2 navbar-navs, so justify-content-between in navbar-collapse would work the even the space between them,\n' +
    '\n' +
    ' <div class="navbar-collapse collapse justify-content-between">\n' +
    '     <ul class="navbar-nav mr-aut">\n' +
    '               ..\n' +
    '     </ul>\n' +
    '     <ul class="navbar-nav">\n' +
    '           ..\n' +
    '     </ul>\n' +
    ' </div>\n' +
    'Update for Bootstrap 4.0 and newer\n' +
    'As of Bootstrap 4 beta, ml-auto will still work to push items to the right. Just be aware the the navbar-toggleable- classes have changed to navbar-expand-*\n' +
    '\n' +
    'Updated navbar right for Bootstrap 4'
}, {
    postId: '1',
    id: '2',
    username: 'erdenebzaa',
    date: '18/18/18',
    points: 33,
    body: ' an overstatement. Seems like it\'s the truth.'
}, {
    postId: '1',
    id: '3',
    username: 'ayc667',
    date: '18/18/18',
    points: 45,
    body: 'Don\'t get me wrong, you\'re not going to be literally copy/pasting from stackoverflow all day, but that\'s basically all that debugging is. If you aren\'t solving novel problems at work (and relatively few of us are), that means you\'re looking for solutions to applicable, solved problems. Once the main architectural decisions are made, all that\'s really left is to google the error messages until the computer stops saying \'no\''
}];

let commentsLocalStorage;

function initComments(){
    if(commentsLocalStorage == null){
        localStorage.setItem("comments", JSON.stringify(comments));
    }
    commentsLocalStorage = JSON.parse(localStorage.getItem("comments"));
}

function getCommentsByPost(postId){
    let commentList = [];

    commentsLocalStorage.map(comment => {
        if(comment.postId == postId)
            commentList.push(comment);
    });
    return commentList;
}

function addComment(comment){
    let oldComments = commentsLocalStorage;
    let commentsOfCurrPost = getCommentsByPost(comment.postId);
    let newCommentId = commentsOfCurrPost != [] ? Number(commentsOfCurrPost.length) + 1 : 1;
    let currDate = new Date();
    
    comment.id = newCommentId;
    comment.date = currDate.getMonth() + "/" + currDate.getDate() + "/" + currDate.getFullYear();
    comments.points = 0;

    oldComments.push(comment);
    localStorage.setItem("comments", JSON.stringify(oldComments));
}

export {initComments, getCommentsByPost, addComment};