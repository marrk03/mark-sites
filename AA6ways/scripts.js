var books = [
    {
        id: "AA6ways_novel",
        image: "/thumbnails/thumbnail_novel.png",
        file: "/pdfs/AA6ways_novel.pdf",
    },
    {
        id: "AA6ways_reader",
        image: "/thumbnails/thumbnail_reader.png",
        file: "/pdfs/AA6ways_reader.pdf",
    },
    {
        id: "AA6ways_document",
        image: "/thumbnails/thumbnail_doc.png",
        file: "/pdfs/AA6ways_document.pdf",
    },
    {
        id: "AA6ways_booklet",
        image: "/thumbnails/thumbnail_booklet.png",
        file: "/pdfs/AA6ways_booklet.pdf",
    },
    {
        id: "AA6ways_zine#1",
        image: "/thumbnails/thumbnail_zine1.png",
        file: "/pdfs/AA6ways_zine#1.pdf",
    },
    {
        id: "AA6ways_zine#2",
        image: "/thumbnails/thumbnail_zine2.png",
        file: "/pdfs/AA6ways_zine#2.pdf",
    },
    {
        id: "AA6ways_zine#3+4",
        image: "/thumbnails/thumbnail_zine3.png",
        file: "/pdfs/AA6ways_zine#3+4.pdf",
    },
    {
        id: "AA6ways_zine#5+6",
        image: "/thumbnails/thumbnail_zine4.png",
        file: "/pdfs/AA6ways_zine#5+6.pdf",
    },
    {
        id: "AA6ways_zine#7+8",
        image: "/thumbnails/thumbnail_zine5.png",
        file: "/pdfs/AA6ways_zine#7+8.pdf",
    },
    {
        id: "AA6ways_stills",
        image: "/thumbnails/thumbnail_stills.png",
        file: "/pdfs/AA6ways_stills.pdf",
    },
];

// Function to pick a random book
function getRandomBook() {
    return books[Math.floor(Math.random() * books.length)];
}

// Display a random thumbnail
function displayThumbnail() {
    var book = getRandomBook();

    var container = document.getElementById("thumbnail-container");

    // Create image element
    var img = document.createElement("img");
    img.src = book.image;
    img.alt = book.id;
    img.classList.add("thumbnail");
    img.style.cursor = "pointer";
    img.style.width = "40px";

    // Add click event to download file
    img.addEventListener("click", () => {
        var a = document.createElement("a");
        a.href = book.file;
        a.download = book.file.split("/").pop(); // Extract file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    // Append the image to the container
    container.appendChild(img);
}

// Run the function on page load
window.onload = displayThumbnail;
