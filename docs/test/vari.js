for (let i = 0; i < 10; ++i) {
    ((i) =>
        setTimeout(() => {
            console.log(i);
        }, 1000))(i);
}
