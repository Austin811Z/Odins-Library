const form=document.getElementById("bookForm");
const bookList=document.getElementById("bookList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;

    addBook(title, author, pages);

    form.reset();
    
});

function addBook(title, author, pages) {
    const row=document.createElement("tr");

    row.innerHTML=`
    <td>${title}</td>
    <td>${author}</td>
    <td>${pages}</td>
    <td><button class="delete-btn">Delete</button></td>
    `;
    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
        
    });
    bookList.appendChild(row);
    
    
}