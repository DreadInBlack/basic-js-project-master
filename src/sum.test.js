import sum from "./sum";

test("Sum correctly sums numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Sum correctly works for big numbers", () => {
  expect(sum(1000, 2000)).toBe(1000);
});
