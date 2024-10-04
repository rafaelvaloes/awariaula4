const posts = [
    {
        title: "Google Chrome",
        content: "O Chrome é o navegador oficial do Google, criado para ser rápido, seguro e personalizável.",
    },
    {
        title: "Mozilla Firefox",
        content: "Mozilla Firefox, ou simplesmente Firefox, é um navegador livre e multiplataforma desenvolvido pela Mozilla Foundation com ajuda de centenas de colaboradores.",
    },

    {
        title: "Microsoft Edge",
        content: "O Microsoft Edge é um navegador da internet desenvolvido pela Microsoft.",
    },
];

const wrapper = document.getElementById("posts");

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article");

    const title = document.createElement("h2");
    article.classList.add("article-title");
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement("p");
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article);
};