const loadComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  showComments(data.slice(0, 20));
};

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const showComments = (comments: Comments[]) => {
  const commentsContainer = document.querySelector(
    "[data-comments-container]"
  ) as HTMLDivElement;
  comments.forEach((comment) => {
    const divElement = document.createElement("div");
    divElement.innerHTML = `<h5 onclick="loadPost(${comment.postId})">Name: ${comment.name}</h5>
    <p>Email: ${comment.email}</p>`;
    commentsContainer.append(divElement);
  });
};

const loadPost = async (postId: number) => {
  //   console.log(postId);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();
  console.log(data);
};
