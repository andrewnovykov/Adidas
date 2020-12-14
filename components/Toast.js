const Toast = () => {
    return (
      <div
        class="toast d-flex align-items-center"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-body">Hello, world! This is a toast message.</div>
        <button
          type="button"
          class="btn-close ms-auto me-2"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    );
}

export default Toast