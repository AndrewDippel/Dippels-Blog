const addComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    console.log(comment)

    if (comment) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};
document
    .querySelector('#saveComment')
    .addEventListener('click', addComment);

