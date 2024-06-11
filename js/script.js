      /************************************
  This codepen is part of the svg.js
  advent calendar. You can find all 
  the pens at twitter: @svg_js
*************************************/

const width = window.innerWidth
const height = window.innerHeight
let path = "";
const canvas = SVG()
  .addTo('body')
  .size(width, height)

// Create array with points for initial plotting
const arr = Array(40).fill([0, 0])

// Create polygon and create Runner with Controller
const p = canvas.polyline(arr)
  .fill('none')
  .stroke({ color: '#f06', opacity: 0, width: 50 })
  
//   .animate(new SVG.Spring(400, 20))

// Update the Array on every move
SVG(document).on('mousemove', (e) => {
  const { x, y } = canvas.point(e.pageX, e.pageY)

  // Push new value and shift old one
  arr.push([x, y])
   if (arr.length > 140) arr.shift()

  // Update polyline
  p.plot(arr)
//   console.log(p._array)
 path = "M ";
  for (let i =0; i<p._array.length;i++) {
    path += p._array[i][0].toFixed(2)+" "+p._array[i][1].toFixed(2)+" L "
  }


  console.log(path)
  path = "path('"+path.substring(0, path.length - 2)+"z')";
  
  $("#top").css({
    "clip-path":path
});
  
})