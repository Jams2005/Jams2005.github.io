
function test() {
	let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${user.name}"}`;
  }
};

alert(user); // {name: "John", age: 30}
}