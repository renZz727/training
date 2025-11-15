interface Data {
  name: string;
  age: number;
  joinDate: string;
}
interface Keys {
  key: string;
  order: string;
}
function multiFieldSorter(data: Data[], sortKeys: Keys[]) : Data[] {
  for (let keys of sortKeys) {
    if (typeof data[0][keys.key]) {
      data.sort((a, b) => {
        if (a[keys.key] < b[keys.key]) return keys.order === "asc" ? -1 : 1;
        if (a[keys.key] > b[keys.key]) return keys.order === "asc" ? 1 : -1;
        return 0;
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
          if (keys.order === "asc") {
            if (data[j][keys.key] > data[j + 1][keys.key]) {
              let temp = data[j];
              data[j] = data[j + 1];
              data[j + 1] = temp;
            }
          } else if (keys.order === "desc") {
            if (data[j].key < data[j + 1].key) {
              let temp = data[j].key;
              data[j].key = data[j + 1].key;
              data[j + 1].key = temp.key;
            }
          }
        }
      }
    }
  }
  return data;
}

const data = [
  { name: "charlie", age: 25, joinDate: "2022-06-01" },
  { name: "alice", age: 30, joinDate: "2020-03-15" },
  { name: "Bob", age: 30, joinDate: "2021-05-10" },
  { name: "bob", age: 30, joinDate: "2019-01-12" },
];
const sortKeys = [
  { key: "age", order: "desc" },
  { key: "joinDate", order: "asc" },
  { key: "name", order: "asc" },
];

// const data = [
//   { name: "Alice", department: "HR", salary: 60000 },
//   { name: "Bob", department: "Engineering", salary: 75000 },
//   { name: "Charlie", department: "Engineering", salary: 80000 },
//   { name: "David", department: "HR", salary: 60000 },
//   { name: "Eve", department: "Finance", salary: 90000 },
//   { name: "Frank", department: "Engineering", salary: 75000 },
//   { name: "Grace", department: "Finance", salary: 85000 },
// ];

// const sortKeys = [
//   { key: "department", order: "asc" },
//   { key: "salary", order: "desc" },
//   { key: "name", order: "asc" },
// ];

console.log(multiFieldSorter(data, sortKeys));
