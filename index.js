let zSpacing = -1800;
let lastPos = zSpacing / 5;
let Bframes = document.getElementsByClassName('galery__frame');
let frames = Array.from(Bframes);
let zVals = [];

window.onscroll = () => {

  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top

  frames.forEach((n, i) => {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -5;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  });
}

window.scrollTo(0, 1);
window.onbeforeunload = () => window.scrollTo(0, 0);
