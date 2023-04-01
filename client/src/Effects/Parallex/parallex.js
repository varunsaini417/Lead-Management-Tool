const parallex = (e) => {
    let x = (window.innerWidth - e.pageX) * 0.02;
    let y = (window.innerHeight - e.pageY) * 0.02;
    
    document.querySelector(
      ".effectImage"
    ).style.transform = `translate(${x}px, ${y}px)`;
  };

  export default parallex;