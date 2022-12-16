
const ForumPosts = ({ posts, username }) => {
    // Connect to pocketbase

    // Delete button deletes item from pockebase
    return (
      <div className='mt-10'>
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded shadow p-6 mb-4 mx-16">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <button hidden={username!==post.author} className="px-4 py-2 text-xs font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline">
                Delete
              </button>
            </div>
            <div className="mb-4 flex items-center text-sm text-gray-700">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              <span>{post.author}</span>
              <svg className="h-5 w-5 ml-2 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <span>{post.date}</span>
            </div>
            <p className="text-gray-700 text-base">{post.body}</p>
          </div>
        ))}
        <div className='mb-60'></div>
      </div>
    );
  };

export default ForumPosts;