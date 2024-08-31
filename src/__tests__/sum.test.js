import { sum } from "../utils/sum"


test('shoud send 3 and 4 expect 7', () => {
  sum(3, 4);

  expect(7)
})