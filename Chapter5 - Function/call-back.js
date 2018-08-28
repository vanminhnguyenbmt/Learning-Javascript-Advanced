function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadAvatar(url, onSuccess) {
    // tai avatar
    console.log('start downloading avatar');
    
    await sleep(3000);
    // tai xong thi update avatar

    console.log('finish download avatar');
    
    onSuccess();
}

function updateAvatar() {
    console.log('updated avatar');
}

// downloadAvatar('url', updateAvatar);

downloadAvatar('url', function () { // khai báo trực tiếp function express
    console.log('updated avatar');
})