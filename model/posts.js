module.exports = {
    posts: [{
        id: 'dssadsas',
        title: '233242323',
        description: '2132112222'
    }],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id: generateID(),title,description})
    }
}


function generateID(){
    return Math.random().toString(36).substr(2,9);
}