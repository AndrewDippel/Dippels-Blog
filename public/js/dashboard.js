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

const deletePost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to delete post');
        }
    }
};

async function editPost(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = event.target.getAttribute('data-id');


    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to edit post');
    }
}

document
    .querySelector('#newPost')
    .addEventListener('click', showNewForm);
if (document.querySelector("#savePost"))
    document
        .querySelector('#savePost')
        .addEventListener('click', newPost);
document
    .querySelectorAll('.deletePost')
    .forEach((elem) => elem.addEventListener('click', deletePost));
document
    .querySelectorAll('.editPost')
    .forEach((elem) => elem.addEventListener('click', editPost));



