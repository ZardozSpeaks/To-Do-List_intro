function toDoList(item1, item2, item3) {
  this.item1 = item1;
  this.item2 = item2;
  this.item3 = item3;
};

$(function () {
  $("form.userListItems").submit(function(event) {
    event.preventDefault();
    var userTask = $("input.userTask").val();

    $("#appendHere").append("<li>" + userTask + "</li>");
    $("li").click(function() {
      $(this).remove();
      $("#appendDoneHere").append($(this));
    });
  });
});
