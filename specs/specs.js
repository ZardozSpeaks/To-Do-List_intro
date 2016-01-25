describe("toDoList",function(){
  it("add to do items to a list", function (){
    var task = new toDoList("item1", "item2", "item3");
    expect(task.item1).to.equal("item1");
    expect(task.item2).to.equal("item2");
    expect(task.item3).to.equal("item3");
  });
});
