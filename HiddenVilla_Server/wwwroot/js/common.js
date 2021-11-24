

window.ShowToastr = (type, message) => {
    if (type === "success") {
        toastr.success(message, 'Operation Successful !');
    }

    if (type === "error") {
        toastr.error(message, 'Operation Filed !');
    }
}



window.ShowSweet = (type, message) => {
    if (type === "success") {
        Swal.fire(
            'Success Notification!',
             message,
            'success'
        )
    }
    if (type === "error") {
        Swal.fire(
            'ERROR Notification!',
            message,
            'error'
        )
    }
}

