// IsoGrid implementation - main grid functionality
function IsoGrid(element, options) {
  this.element = element;
  this.options = options || {};
  this.items = this.element.querySelectorAll('.grid__item');
  this.isLoaded = false;
  
  this.init();
}

IsoGrid.prototype.init = function() {
  var self = this;
  
  // Add transform to the isolayer
  if (this.options.transform) {
    this.element.style.transform = this.options.transform;
  }
  
  // Initialize items
  this.items.forEach(function(item, index) {
    item.style.opacity = '0';
    
    // Add animation with delay
    setTimeout(function() {
      item.classList.add('animate');
      item.classList.add('shown');
      
      // Apply stack animation if configured
      if (self.options.stackItemsAnimation && self.options.stackItemsAnimation.properties) {
        var props = self.options.stackItemsAnimation.properties(index);
        if (props.translateZ) {
          item.style.transform = 'translateZ(' + props.translateZ + 'px) rotateZ(' + (props.rotateZ || 0) + 'deg)';
        }
      }
    }, index * 100);
  });
  
  // Mark as loaded after all animations
  setTimeout(function() {
    self.isLoaded = true;
    self.element.classList.add('grid--loaded');
    if (self.options.onGridLoaded) {
      self.options.onGridLoaded();
    }
  }, this.items.length * 100 + 500);
};

// Make IsoGrid available globally
window.IsoGrid = IsoGrid;