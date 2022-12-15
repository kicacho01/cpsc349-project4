import { useEffect, useState } from 'react';

const ForumPosts = ({ posts }) => {
  return (
    <div className="px-6 py-4">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded shadow p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 text-base">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hello World', body: 'Welcome to the forum!' },
    { id: 2, title: 'Another Post', body: 'This is a sample post.' },
    { id: 3, title: 'Hello Ryan and Daniel', body: 'This is a Ryan and Daniel\'s post.' }
  ]);

  function addPost() {
    let oldPosts = posts;
    console.log(oldPosts)
    oldPosts.push({ id: (posts.length + 1), title: `Hello this is post# ${posts.length+1}`, body: 'This is a Ryan and Daniel\'s post.' })
    setPosts(oldPosts)
  }

    useEffect(() => {
      console.log(posts)
  }, [posts]);
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-center mb-6">
          Forum Title
        </h1>
        <button onClick={addPost}>Add another post</button>
        <ForumPosts
          posts={posts}
        />
      </div>
    </div>
  );
};

export default App;
