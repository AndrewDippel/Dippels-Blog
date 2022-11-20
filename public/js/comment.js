const addComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const post_id = window.location.href.split("/")[4]
    console.log(comment)

    if (comment) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
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

