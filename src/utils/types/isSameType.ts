export type IsSameType<A, B> = A extends B
  ? B extends A
    ? true
    : false
  : false;
