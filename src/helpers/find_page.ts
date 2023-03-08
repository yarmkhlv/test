export function findPage(arr: any[], perPage: number) {
  return Math.round(arr.length / perPage);
}
