function showNewForm() {
    document.querySelector(".hidden").classList.remove("hidden")
}

const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#content').value.trim();

    if (title && description) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create post');
        }
    }
};
document
    .querySelector('#newPost')
    .addEventListener('click', showNewForm);
if (document.querySelector("#savePost"))
    document
        .querySelector('#savePost')
        .addEventListener('click', newPost);
