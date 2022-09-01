"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const loadComments = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/comments");
    const data = yield res.json();
    showComments(data.slice(0, 20));
});
const showComments = (comments) => {
    const commentsContainer = document.querySelector("[data-comments-container]");
    comments.forEach((comment) => {
        const divElement = document.createElement("div");
        divElement.innerHTML = `<h5 onclick="loadPost(${comment.postId})">Name: ${comment.name}</h5>
    <p>Email: ${comment.email}</p>`;
        commentsContainer.append(divElement);
    });
};
const loadPost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(postId);
    const res = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = yield res.json();
    console.log(data);
});
