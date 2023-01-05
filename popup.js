
$(()=>{
  $("input").keyup(()=>{
    $("#greet").text(`Hello ${$("#name").val()}`);
  });
});