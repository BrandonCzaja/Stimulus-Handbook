import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // targets elements with "source" target
  static targets = [ "source" ]

  // targets CSS classes
  // access with => this.supportedClass
  static classes = [ "supported" ]

  connect() {
    console.log("Uncomment clipboard#connect to see changes")
    // if ("clipboard" in navigator) {
    //   this.element.classList.add(this.supportedClass);
    // }
  }

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
    console.log("Text copied")
  }
}