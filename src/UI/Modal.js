class Modal {
  constructor(modalElement, overlayElement) {
    this.modal = modalElement;
    this.overlay = overlayElement;
  }
  show() {
    this.modal.classList.remove("close");
    this.overlay.classList.remove("close");
  }
  close() {
    this.modal.classList.add("close");
    this.overlay.classList.add("close");
  }
  init() {
    this.overlay.onclick = () => this.close();
  }
  addHTML(HTMLstring) {
    this.modal.innerHTML = HTMLstring;
  }
}

export default Modal;
