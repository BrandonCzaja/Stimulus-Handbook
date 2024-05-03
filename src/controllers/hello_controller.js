import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  connect(){
    console.log("It's Connected!")
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  // name getter
  get name() {
    return this.nameTarget.value
  }
}