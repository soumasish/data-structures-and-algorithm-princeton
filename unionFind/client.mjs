import UnionFind from "./unionFind.js";

const uf = new UnionFind(10)
uf.union(1,2)
uf.union(3,4)
uf.union(1,3)
uf.union(4,5)
print(uf.connected(1,3))
console.log(uf)
