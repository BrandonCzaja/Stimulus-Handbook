import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number}

  // Not needed - only here for my practice
  connect(){
    console.log("Slideshow controller connected")
  }

  next(){
    this.indexValue++
    this.showCurrentSlide()
  }

  previous(){
    this.indexValue--
    this.showCurrentSlide()
  }

  indexValueChanged(){
    this.showCurrentSlide()
  }

  showCurrentSlide(){
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}