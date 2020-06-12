let name: string = "whj";
console.log(name);

fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
