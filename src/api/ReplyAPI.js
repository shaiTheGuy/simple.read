const replies = [{
    postId: 1,
    commentId: 1,
    id: 1,
    username: 'Craig van Tonder',
    date: '18/18/18',
    body: 'Would you be so kind as to take a look at my answer, is this correct in my use case with just one list or is there a better way?'
}, {
    postId: 1,
    commentId: 1,
    id: 2,
    username: 'Ege Ersoz ',
    date: '18/18/18',
    body: 'is there any reason why it needs to be "navbar-toggleable-md" what if we needed it for "navbar-toggleable-xs" ? Or even have no toggleable capability?'
}, {
    postId: 1,
    commentId: 2,
    id: 3,
    username: 'ayc667',
    date: '18/18/18',
    body: 'Don\'t get me wrong, you\'re not going to be literally copy/pasting from stackoverflow all day, but that\'s basically all that debugging is. If you aren\'t solving novel problems at work (and relatively few of us are), that means you\'re looking for solutions to applicable, solved problems. Once the main architectural decisions are made, all that\'s really left is to google the error messages until the computer stops saying \'no\''
}];

let repliesLocalStorage;

function initReplies(){
    if(repliesLocalStorage == null){
        localStorage.setItem("replies", JSON.stringify(replies));
    }
    repliesLocalStorage = JSON.parse(localStorage.getItem("replies"));
}

function getRepliesByComment(postId, commentId){
    initReplies()
    let replyList = [];

    repliesLocalStorage.map(reply => {
        if(reply.commentId == commentId && reply.postId == postId)
            replyList.push(reply)
    });
    return replyList;
}

function addReply(reply){
    let oldReplies = repliesLocalStorage;
    let repliesOfCurrPost = getRepliesByComment(reply.postId, reply.commentId);
    let newReplyId = repliesOfCurrPost != [] ? Number(repliesOfCurrPost.length) + 1 : 1;
    let currDate = new Date();
    
    reply.id = newReplyId;
    reply.date = currDate.getMonth() + "/" + currDate.getDate() + "/" + currDate.getFullYear();
    reply.points = 0;

    oldReplies.push(reply);
    localStorage.setItem("replies", JSON.stringify(oldReplies));
}

export {initReplies, replies, getRepliesByComment, addReply};