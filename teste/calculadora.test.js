const caculadora = require("../models/caculadora.js")

test("somar 2+2 = 4",()=>{
  const resutado = caculadora.somar(2,2)
  expect(resutado).toBe(4)
});
test("somar 'banana' + 100 deve retonar 'error' ",()=>{
  const resutado = caculadora.somar("banana",100)
  expect(resutado).toBe("error")
});
